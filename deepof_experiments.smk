# @authors lucasmiranda42
# encoding: utf-8
# deepof_experiments

"""

Snakefile for data and imputation.
Execution: sbatch snakemake
Plot DAG: snakemake --snakefile deepof_experiments.smk --forceall --dag | dot -Tpdf > deepof_experiments_DAG.pdf
Plot rule graph: snakemake --snakefile deepof_experiments.smk --forceall --rulegraph | dot -Tpdf > deepof_experiments_RULEGRAPH.pdf

"""

import os

outpath = "/u/lucasmir/Projects/DLC/DeepOF/deepof/"

embedding_model = ["VQVAE", "GMVAE"]
warmup_epochs = [15]
warmup_mode = ["sigmoid"]
automatic_changepoints = ["rbf"]  # [None, "rbf", "linear"]
animal_to_preprocess = ["B"]  # [None, "B", "W"]
losses = ["ELBO"]  # , "MMD", "ELBO+MMD"]
overlap_loss = [0.0, 0.25]  # [0.1, 0.2, 0.5, 0.75, 1.]
encodings = [4, 8, 16]  # [2, 4, 6, 8, 10, 12, 14, 16]
cluster_numbers = list(range(5, 21))  # [1, 5, 10, 15, 20, 25]
latent_reg = ["categorical+variance"]
entropy_knn = [10]
next_sequence_pred_weights = [0.0]
phenotype_pred_weights = [0.0]
supervised_pred_weights = [0.0]
input_types = ["coords"]
run = list(range(1, 4))


rule deepof_experiments:
    input:
        # Elliptical arena detection
        # "/u/lucasmir/Projects/DLC/DeepOF/deepof/supplementary_notebooks/recognise_elliptical_arena.ipynb",
        #
        # Hyperparameter tuning
        # expand(
        #     os.path.join(
        #         outpath,
        #         "coarse_hyperparameter_tuning/trained_weights/GMVAE_loss={loss}_k={k}_encoding={enc}_final_weights.h5",
        #     ),
        #     loss=losses,
        #     k=cluster_numbers,
        #     enc=encodings,
        # ),
        #
        # Train a variety of models
        expand(
            outpath + "train_models/trained_weights/"
            "deepof_"
            "GMVAE_input_type={input_type}_"
            "NSPred={nspredweight}_"
            "PPred={phenpredweight}_"
            "SupPred={supervisedweight}_"
            "loss={loss}_"
            "overlap_loss={overlap_loss}_"
            "loss_warmup={warmup}_"
            "warmup_mode={warmup_mode}_"
            "encoding={encs}_"
            "k={k}_"
            "latreg={latreg}_"
            "entknn={entknn}_"
            "run={run}_"
            "final_weights.h5",
            input_type=input_types,
            loss=losses,
            overlap_loss=overlap_loss,
            warmup=warmup_epochs,
            warmup_mode=warmup_mode,
            encs=encodings,
            k=cluster_numbers,
            latreg=latent_reg,
            entknn=entropy_knn,
            nspredweight=next_sequence_pred_weights,
            phenpredweight=phenotype_pred_weights,
            supervisedweight=supervised_pred_weights,
            run=run,
        ),


rule elliptical_arena_detector:
    input:
        to_exec="/u/lucasmir/Projects/DLC/DeepOF/deepof/supplementary_notebooks/recognise_elliptical_arena_blank.ipynb",
    output:
        exec="/u/lucasmir/Projects/DLC/DeepOF/deepof/supplementary_notebooks/recognise_elliptical_arena.ipynb",
    shell:
        "papermill {input.to_exec} "
        "-p vid_path './supplementary_notebooks/' "
        "-p log_path './logs/' "
        "-p out_path './deepof/trained_models/' "
        "{output.exec}"


rule coarse_hyperparameter_tuning:
    input:
        data_path="/u/lucasmir/Projects/DLC/DeepOF/Projects/DeepOF_Stress_paper/Tagged_videos/Data_for_deepof_SI/JB08_files_SI",
    output:
        trained_models=os.path.join(
            outpath,
            "coarse_hyperparameter_tuning/trained_weights/GMVAE_loss={loss}_k={k}_encoding={enc}_final_weights.h5",
        ),
    shell:
        "pipenv run python -m deepof.deepof_train_unsupervised "
        "--train-path {input.data_path} "
        "--val-num 10 "
        "--components {wildcards.k} "
        "--input-type coords "
        "--next-sequence-prediction {wildcards.nspredweight} "
        "--phenotype-prediction {wildcards.phenpredweight} "
        "--supervised-prediction {wildcards.supervisedweight} "
        "--loss {wildcards.loss} "
        "--kl-warmup 30 "
        "--mmd-warmup 30 "
        "--encoding-size {wildcards.enc} "
        "--batch-size 512 "
        "--window-size 24 "
        "--window-step 12 "
        "--output-path {outpath}coarse_hyperparameter_tuning "
        "--hyperparameter-tuning hyperband "
        "--hpt-trials 1"


rule train_models:
    input:
        data_path=ancient(
            "/u/lucasmir/Projects/DLC/DeepOF/Projects/DeepOF_Stress_paper/Tagged_videos/Data_for_deepof_SI/JB08_files_SI"
        ),
    output:
        trained_models=outpath + "train_models/trained_weights/"
        "deepof_"
        "GMVAE_input_type={input_type}_"
        "NSPred={nspredweight}_"
        "PPred={phenpredweight}_"
        "SupPred={supervisedweight}_"
        "loss={loss}_"
        "overlap_loss={overlap_loss}_"
        "loss_warmup={warmup}_"
        "warmup_mode={warmup_mode}_"
        "encoding={encs}_"
        "k={k}_"
        "latreg={latreg}_"
        "entknn={entknn}_"
        "run={run}_"
        "final_weights.h5",
    shell:
        "pipenv run python -m deepof.deepof_train_unsupervised "
        "--train-path {input.data_path} "
        "--val-num 5 "
        "--animal-id B,W "
        "--animal-to-preprocess B "
        "--exclude-bodyparts Tail_1,Tail_2,Tail_tip "
        "--components {wildcards.k} "
        "--input-type {wildcards.input_type} "
        "--next-sequence-prediction {wildcards.nspredweight} "
        "--phenotype-prediction {wildcards.phenpredweight} "
        "--supervised-prediction {wildcards.supervisedweight} "
        "--latent-reg {wildcards.latreg} "
        "--loss {wildcards.loss} "
        "--overlap-loss {wildcards.overlap_loss} "
        "--kl-annealing-mode {wildcards.warmup_mode} "
        "--kl-warmup {wildcards.warmup} "
        "--mmd-annealing-mode {wildcards.warmup_mode} "
        "--mmd-warmup {wildcards.warmup} "
        "--montecarlo-kl 10 "
        "--encoding-size {wildcards.encs} "
        "--entropy-knn {wildcards.entknn} "
        "--batch-size 64 "
        "--window-size 5 "
        "--window-step 1 "
        "--run {wildcards.run} "
        "--output-path {outpath}train_models"
