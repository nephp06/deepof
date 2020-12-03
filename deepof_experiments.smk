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

outpath = "/u/lucasmir/DLC/DLC_autoencoders/DeepOF/deepof/logs/"
losses = ["ELBO", "MMD", "ELBO+MMD"]
encodings = [2, 4, 6, 8, 12, 16]


rule deepof_experiments:
    input:
        expand(
            "/u/lucasmir/DLC/DLC_autoencoders/DeepOF/deepof/logs/dimension_and_loss_experiments/trained_weights/"
            "GMVAE_loss={loss}_encoding={encs}_run_1_final_weights.h5",
            loss=losses,
            encs=encodings,
        ),


rule explore_encoding_dimension_and_loss_function:
    input:
        data_path="/u/lucasmir/DLC/DLC_models/deepof_single_topview/",
    output:
        trained_models=os.path.join(
            outpath,
            "dimension_and_loss_experiments/trained_weights/GMVAE_loss={loss}_encoding={encs}_run_1_final_weights.h5",
        ),
    shell:
        "pipenv run python -m deepof.train_model --train-path {input.data_path} --val-num 10 --components 10 \
                --input-type coords --predictor 0 --variational True --loss {wildcards.loss} --kl-warmup 20 --mmd-warmup 20 \
                --encoding-size {wildcards.encs} --batch-size 256 --window-size 11 --window-step 11 --exclude-bodyparts \
                Tail_base,Tail_1,Tail_2,Tail_tip,Spine_2 --stability-check 3 --output-path \
                {outpath}dimension_and_loss_experiments/trained_weights"


# rule explore_number_of_components:
# 	input:
# 	output:
# 	shell:
# rule explore_phenotype_prediction:
# 	input:
# 	output:
# 	shell:
# rule explore_predictor_branch:
# 	input:
# 	output:
# 	shell:
