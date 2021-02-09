# @author lucasmiranda42
# encoding: utf-8
# module deepof

"""

Simple utility functions used in deepof example scripts. These are not part of the main package

"""

from datetime import date, datetime
from kerastuner import BayesianOptimization, Hyperband
from kerastuner import HyperParameters
from kerastuner_tensorboard_logger import TensorBoardLogger
from tensorboard.plugins.hparams import api as hp
from typing import Tuple, Union, Any, List
import deepof.hypermodels
import deepof.model_utils
import numpy as np
import os
import pickle
import tensorflow as tf

# Ignore warning with no downstream effect
tf.get_logger().setLevel("ERROR")
tf.autograph.set_verbosity(0)


class CustomStopper(tf.keras.callbacks.EarlyStopping):
    """ Custom early stopping callback. Prevents the model from stopping before warmup is over """

    def __init__(self, start_epoch, *args, **kwargs):
        super(CustomStopper, self).__init__(*args, **kwargs)
        self.start_epoch = start_epoch

    def get_config(self):  # pragma: no cover
        """Updates callback metadata"""

        config = super().get_config().copy()
        config.update({"start_epoch": self.start_epoch})
        return config

    def on_epoch_end(self, epoch, logs=None):
        if epoch > self.start_epoch:
            super().on_epoch_end(epoch, logs)


def load_hparams(hparams):
    """Loads hyperparameters from a custom dictionary pickled on disc.
    Thought to be used with the output of hyperparameter_tuning.py"""

    if hparams is not None:
        with open(hparams, "rb") as handle:
            hparams = pickle.load(handle)
    else:
        hparams = {
            "bidirectional_merge": "ave",
            "clipvalue": 1.0,
            "dense_activation": "relu",
            "dense_layers_per_branch": 1,
            "dropout_rate": 1e-3,
            "learning_rate": 1e-3,
            "units_conv": 160,
            "units_dense2": 120,
            "units_lstm": 300,
        }
    return hparams


def load_treatments(train_path):
    """Loads a dictionary containing the treatments per individual,
    to be loaded as metadata in the coordinates class"""
    try:
        with open(
            os.path.join(
                train_path,
                [i for i in os.listdir(train_path) if i.endswith(".pkl")][0],
            ),
            "rb",
        ) as handle:
            treatment_dict = pickle.load(handle)
    except IndexError:
        treatment_dict = None

    return treatment_dict


def get_callbacks(
    X_train: np.array,
    batch_size: int,
    cp: bool,
    variational: bool,
    phenotype_class: float,
    predictor: float,
    loss: str,
    logparam: dict = None,
    outpath: str = ".",
) -> List[Union[Any]]:
    """Generates callbacks for model training, including:
    - run_ID: run name, with coarse parameter details;
    - tensorboard_callback: for real-time visualization;
    - cp_callback: for checkpoint saving,
    - onecycle: for learning rate scheduling"""

    run_ID = "{}{}{}{}{}{}_{}".format(
        ("GMVAE" if variational else "AE"),
        ("Pred={}".format(predictor) if predictor > 0 and variational else ""),
        ("_Pheno={}".format(phenotype_class) if phenotype_class > 0 else ""),
        ("_loss={}".format(loss) if variational else ""),
        ("_encoding={}".format(logparam["encoding"]) if logparam is not None else ""),
        ("_k={}".format(logparam["k"]) if logparam is not None else ""),
        (datetime.now().strftime("%Y%m%d-%H%M%S")),
    )

    log_dir = os.path.abspath(os.path.join(outpath, "fit", run_ID))
    tensorboard_callback = tf.keras.callbacks.TensorBoard(
        log_dir=log_dir,
        histogram_freq=1,
        profile_batch=2,
    )

    onecycle = deepof.model_utils.one_cycle_scheduler(
        X_train.shape[0] // batch_size * 250,
        max_rate=0.005,
    )

    callbacks = [run_ID, tensorboard_callback, onecycle]

    if cp:
        cp_callback = tf.keras.callbacks.ModelCheckpoint(
            os.path.join(outpath, "checkpoints", run_ID + "/cp-{epoch:04d}.ckpt"),
            verbose=1,
            save_best_only=False,
            save_weights_only=True,
            save_freq="epoch",
        )
        callbacks.append(cp_callback)

    return callbacks


def autoencoder_fitting(
    preprocessed_object: Tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray],
    batch_size: int,
    encoding_size: int,
    epochs: int,
    hparams: dict,
    kl_warmup: int,
    log_history: bool,
    log_hparams: bool,
    loss: str,
    mmd_warmup,
    montecarlo_kl,
    n_components,
    output_path,
    phenotype_class,
    predictor: float,
    pretrained: str,
    save_checkpoints: bool,
    save_weights: bool,
    variational: bool,
):
    """Implementation function for deepof.data.coordinates.deep_unsupervised_embedding"""

    # Load data
    X_train, y_train, X_val, y_val = preprocessed_object

    # To avoid stability issues
    tf.keras.backend.clear_session()

    # Defines what to log on tensorboard (useful for trying out different models)

    logparam = {
        "encoding": encoding_size,
        "k": n_components,
        "loss": loss,
    }
    if phenotype_class:
        logparam["pheno_weight"] = phenotype_class

    # Load callbacks
    run_ID, *cbacks = get_callbacks(
        X_train=X_train,
        batch_size=batch_size,
        cp=save_checkpoints,
        variational=variational,
        phenotype_class=phenotype_class,
        predictor=predictor,
        loss=loss,
        logparam=logparam,
        outpath=output_path,
    )
    if not log_history:
        cbacks = cbacks[1:]

    # Logs hyperparameters to tensorboard
    if log_hparams:
        logparams = [
            hp.HParam(
                "encoding",
                hp.Discrete([2, 4, 6, 8, 12, 16]),
                display_name="encoding",
                description="encoding size dimensionality",
            ),
            hp.HParam(
                "k",
                hp.IntInterval(min_value=1, max_value=25),
                display_name="k",
                description="cluster_number",
            ),
            hp.HParam(
                "loss",
                hp.Discrete(["ELBO", "MMD", "ELBO+MMD"]),
                display_name="loss function",
                description="loss function",
            ),
        ]

        rec = "reconstruction_" if phenotype_class else ""
        metrics = [
            hp.Metric("val_{}mae".format(rec), display_name="val_{}mae".format(rec)),
            hp.Metric("val_{}mse".format(rec), display_name="val_{}mse".format(rec)),
        ]
        if phenotype_class:
            logparams.append(
                hp.HParam(
                    "pheno_weight",
                    hp.RealInterval(min_value=0.0, max_value=1000.0),
                    display_name="pheno weight",
                    description="weight applied to phenotypic classifier from the latent space",
                )
            )
            metrics += [
                hp.Metric(
                    "phenotype_prediction_accuracy",
                    display_name="phenotype_prediction_accuracy",
                ),
                hp.Metric(
                    "phenotype_prediction_auc",
                    display_name="phenotype_prediction_auc",
                ),
            ]

        with tf.summary.create_file_writer(
            os.path.join(output_path, "hparams", run_ID)
        ).as_default():
            hp.hparams_config(
                hparams=logparams,
                metrics=metrics,
            )

    # Build models
    if not variational:
        encoder, decoder, ae = deepof.models.SEQ_2_SEQ_AE(
            ({} if hparams is None else hparams)
        ).build(X_train.shape)
        return_list = (encoder, decoder, ae)

    else:
        (
            encoder,
            generator,
            grouper,
            ae,
            kl_warmup_callback,
            mmd_warmup_callback,
        ) = deepof.models.SEQ_2_SEQ_GMVAE(
            architecture_hparams=({} if hparams is None else hparams),
            batch_size=batch_size,
            compile_model=True,
            encoding=encoding_size,
            kl_warmup_epochs=kl_warmup,
            loss=loss,
            mmd_warmup_epochs=mmd_warmup,
            montecarlo_kl=montecarlo_kl,
            neuron_control=False,
            number_of_components=n_components,
            overlap_loss=False,
            phenotype_prediction=phenotype_class,
            predictor=predictor,
        ).build(
            X_train.shape
        )
        return_list = (encoder, generator, grouper, ae)

    if pretrained:
        # If pretrained models are specified, load weights and return
        ae.load_weights(pretrained)
        return return_list

    else:
        if not variational:

            ae.fit(
                x=X_train,
                y=X_train,
                epochs=epochs,
                batch_size=batch_size,
                verbose=1,
                validation_data=(X_val, X_val),
                callbacks=cbacks
                + [
                    CustomStopper(
                        monitor="val_loss",
                        patience=5,
                        restore_best_weights=True,
                        start_epoch=max(kl_warmup, mmd_warmup),
                    ),
                ],
            )

            if save_weights:
                ae.save_weights("{}_final_weights.h5".format(run_ID))

        else:

            callbacks_ = cbacks + [
                CustomStopper(
                    monitor="val_loss",
                    patience=5,
                    restore_best_weights=True,
                    start_epoch=max(kl_warmup, mmd_warmup),
                ),
            ]

            if "ELBO" in loss and kl_warmup > 0:
                # noinspection PyUnboundLocalVariable
                callbacks_.append(kl_warmup_callback)
            if "MMD" in loss and mmd_warmup > 0:
                # noinspection PyUnboundLocalVariable
                callbacks_.append(mmd_warmup_callback)

            Xs, ys = [X_train], [X_train]
            Xvals, yvals = [X_val], [X_val]

            if predictor > 0.0:
                Xs, ys = X_train[:-1], [X_train[:-1], X_train[1:]]
                Xvals, yvals = X_val[:-1], [X_val[:-1], X_val[1:]]

            if phenotype_class > 0.0:
                ys += [y_train]
                yvals += [y_val]

            ae.fit(
                x=Xs,
                y=ys,
                epochs=epochs,
                batch_size=batch_size,
                verbose=1,
                validation_data=(
                    Xvals,
                    yvals,
                ),
                callbacks=callbacks_,
            )

            if save_weights:
                ae.save_weights("{}_final_weights.h5".format(run_ID))

            if log_hparams:
                # noinspection PyUnboundLocalVariable
                def tensorboard_metric_logging(run_dir: str, hpms: Any):
                    output = ae.predict(X_val)
                    if phenotype_class or predictor:
                        reconstruction = output[0]
                        prediction = output[1]
                        pheno = output[-1]
                    else:
                        reconstruction = output

                    with tf.summary.create_file_writer(run_dir).as_default():
                        hp.hparams(hpms)  # record the values used in this trial
                        val_mae = tf.reduce_mean(
                            tf.keras.metrics.mean_absolute_error(X_val, reconstruction)
                        )
                        val_mse = tf.reduce_mean(
                            tf.keras.metrics.mean_squared_error(X_val, reconstruction)
                        )
                        tf.summary.scalar("val_{}mae".format(rec), val_mae, step=1)
                        tf.summary.scalar("val_{}mse".format(rec), val_mse, step=1)

                        if predictor:
                            pred_mae = tf.reduce_mean(
                                tf.keras.metrics.mean_absolute_error(X_val, prediction)
                            )
                            pred_mse = tf.reduce_mean(
                                tf.keras.metrics.mean_squared_error(X_val, prediction)
                            )
                            tf.summary.scalar(
                                "val_prediction_mae".format(rec), pred_mae, step=1
                            )
                            tf.summary.scalar(
                                "val_prediction_mse".format(rec), pred_mse, step=1
                            )

                        if phenotype_class:
                            pheno_acc = tf.keras.metrics.binary_accuracy(
                                y_val, tf.squeeze(pheno)
                            )
                            pheno_auc = roc_auc_score(y_val, pheno)

                            tf.summary.scalar(
                                "phenotype_prediction_accuracy", pheno_acc, step=1
                            )
                            tf.summary.scalar(
                                "phenotype_prediction_auc", pheno_auc, step=1
                            )

                # Logparams to tensorboard
                tensorboard_metric_logging(
                    os.path.join(output_path, "hparams", run_ID),
                    logparam,
                )

    return return_list


def tune_search(
    data: List[np.array],
    encoding_size: int,
    hypertun_trials: int,
    hpt_type: str,
    hypermodel: str,
    k: int,
    kl_warmup_epochs: int,
    loss: str,
    mmd_warmup_epochs: int,
    overlap_loss: float,
    phenotype_class: float,
    predictor: float,
    project_name: str,
    callbacks: List,
    n_epochs: int = 30,
    n_replicas: int = 1,
) -> Union[bool, Tuple[Any, Any]]:
    """Define the search space using keras-tuner and bayesian optimization

    Parameters:
        - train (np.array): dataset to train the model on
        - test (np.array): dataset to validate the model on
        - hypertun_trials (int): number of Bayesian optimization iterations to run
        - hpt_type (str): specify one of Bayesian Optimization (bayopt) and Hyperband (hyperband)
        - hypermodel (str): hypermodel to load. Must be one of S2SAE (plain autoencoder)
        or S2SGMVAE (Gaussian Mixture Variational autoencoder).
        - k (int) number of components of the Gaussian Mixture
        - loss (str): one of [ELBO, MMD, ELBO+MMD]
        - overlap_loss (float): assigns as weight to an extra loss term which
        penalizes overlap between GM components
        - phenotype_class (float): adds an extra regularizing neural network to the model,
        which tries to predict the phenotype of the animal from which the sequence comes
        - predictor (float): adds an extra regularizing neural network to the model,
        which tries to predict the next frame from the current one
        - project_name (str): ID of the current run
        - callbacks (list): list of callbacks for the training loop
        - n_epochs (int): optional. Number of epochs to train each run for
        - n_replicas (int): optional. Number of replicas per parameter set. Higher values
         will yield more robust results, but will affect performance severely

    Returns:
        - best_hparams (dict): dictionary with the best retrieved hyperparameters
        - best_run (tf.keras.Model): trained instance of the best model found

    """

    X_train, y_train, X_val, y_val = data

    assert hpt_type in ["bayopt", "hyperband"], (
        "Invalid hyperparameter tuning framework. " "Select one of bayopt and hyperband"
    )

    if hypermodel == "S2SAE":  # pragma: no cover
        assert (
            predictor == 0.0 and phenotype_class == 0.0
        ), "Prediction branches are only available for variational models. See documentation for more details"
        hypermodel = deepof.hypermodels.SEQ_2_SEQ_AE(input_shape=X_train.shape)

    elif hypermodel == "S2SGMVAE":
        hypermodel = deepof.hypermodels.SEQ_2_SEQ_GMVAE(
            input_shape=X_train.shape,
            encoding=encoding_size,
            kl_warmup_epochs=kl_warmup_epochs,
            loss=loss,
            mmd_warmup_epochs=mmd_warmup_epochs,
            number_of_components=k,
            overlap_loss=overlap_loss,
            phenotype_predictor=phenotype_class,
            predictor=predictor,
        )

    else:
        return False

    hpt_params = {
        "hypermodel": hypermodel,
        "executions_per_trial": n_replicas,
        "logger": TensorBoardLogger(metrics=["val_mae"], logdir="./logs/hparams"),
        "objective": "val_mae",
        "project_name": project_name,
        "seed": 42,
        "tune_new_entries": True,
    }

    if hpt_type == "hyperband":
        tuner = Hyperband(
            directory="HyperBandx_{}_{}".format(loss, str(date.today())),
            max_epochs=hypertun_trials,
            hyperband_iterations=3,
            factor=2,
            **hpt_params
        )
    else:
        tuner = BayesianOptimization(
            directory="BayOpt_{}_{}".format(loss, str(date.today())),
            max_trials=hypertun_trials,
            **hpt_params
        )

    print(tuner.search_space_summary())

    Xs, ys = [X_train], [X_train]
    Xvals, yvals = [X_val], [X_val]

    if predictor > 0.0:
        Xs, ys = X_train[:-1], [X_train[:-1], X_train[1:]]
        Xvals, yvals = X_val[:-1], [X_val[:-1], X_val[1:]]

    if phenotype_class > 0.0:
        ys += [y_train]
        yvals += [y_val]

    tuner.search(
        Xs,
        ys,
        epochs=n_epochs,
        validation_data=(Xvals, yvals),
        verbose=1,
        batch_size=256,
        callbacks=callbacks,
    )

    best_hparams = tuner.get_best_hyperparameters(num_trials=1)[0]
    best_run = tuner.hypermodel.build(best_hparams)

    print(tuner.results_summary())

    return best_hparams, best_run
