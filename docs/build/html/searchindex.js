Search.setIndex({docnames:["deepof","deepof.data","deepof.hypermodels","deepof.model_utils","deepof.models","deepof.pose_utils","deepof.train_utils","deepof.utils","deepof.visuals","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["deepof.rst","deepof.data.rst","deepof.hypermodels.rst","deepof.model_utils.rst","deepof.models.rst","deepof.pose_utils.rst","deepof.train_utils.rst","deepof.utils.rst","deepof.visuals.rst","index.rst","modules.rst"],objects:{"":[[0,0,0,"-","deepof"]],"deepof.data":[[1,1,1,"","Coordinates"],[1,1,1,"","Project"],[1,1,1,"","TableDict"]],"deepof.data.Coordinates":[[1,2,1,"","__init__"],[1,2,1,"","deep_unsupervised_embedding"],[1,2,1,"","get_angles"],[1,3,1,"","get_arenas"],[1,2,1,"","get_coords"],[1,2,1,"","get_distances"],[1,3,1,"","get_exp_conditions"],[1,2,1,"","get_quality"],[1,2,1,"","get_videos"],[1,2,1,"","supervised_annotation"]],"deepof.data.Project":[[1,2,1,"","__init__"],[1,3,1,"","angles"],[1,3,1,"","distances"],[1,3,1,"","ego"],[1,2,1,"","get_angles"],[1,2,1,"","get_arena"],[1,2,1,"","get_distances"],[1,2,1,"","load_tables"],[1,2,1,"","run"]],"deepof.data.TableDict":[[1,2,1,"","__init__"],[1,2,1,"","filter_id"],[1,2,1,"","filter_videos"],[1,2,1,"","get_training_set"],[1,2,1,"","merge"],[1,2,1,"","pca"],[1,2,1,"","plot_heatmaps"],[1,2,1,"","preprocess"],[1,2,1,"","random_projection"],[1,2,1,"","tsne"]],"deepof.hypermodels":[[2,1,1,"","GMVAE"],[2,1,1,"","VQVAE"]],"deepof.hypermodels.GMVAE":[[2,2,1,"","__init__"],[2,2,1,"","build"],[2,2,1,"","get_hparams"]],"deepof.hypermodels.VQVAE":[[2,2,1,"","__init__"],[2,2,1,"","build"],[2,2,1,"","get_hparams"]],"deepof.model_utils":[[3,1,1,"","ClusterOverlap"],[3,1,1,"","DenseTranspose"],[3,1,1,"","GaussianMixtureLatent"],[3,1,1,"","KLDivergenceLayer"],[3,1,1,"","MCDropout"],[3,1,1,"","MMDiscrepancyLayer"],[3,1,1,"","MeanVarianceRegularizer"],[3,1,1,"","VectorQuantizer"],[3,4,1,"","compute_kernel"],[3,4,1,"","compute_mmd"],[3,4,1,"","compute_shannon_entropy"],[3,1,1,"","exponential_learning_rate"],[3,4,1,"","find_learning_rate"],[3,4,1,"","get_k_nearest_neighbors"],[3,4,1,"","get_neighbourhood_entropy"],[3,4,1,"","log_loss"],[3,1,1,"","one_cycle_scheduler"],[3,4,1,"","plot_lr_vs_loss"]],"deepof.model_utils.ClusterOverlap":[[3,2,1,"","__init__"],[3,2,1,"","call"],[3,2,1,"","get_config"]],"deepof.model_utils.DenseTranspose":[[3,2,1,"","__init__"],[3,2,1,"","build"],[3,2,1,"","call"],[3,2,1,"","compute_output_shape"],[3,2,1,"","get_config"]],"deepof.model_utils.GaussianMixtureLatent":[[3,2,1,"","__init__"],[3,2,1,"","call"],[3,3,1,"","model"]],"deepof.model_utils.KLDivergenceLayer":[[3,2,1,"","__init__"],[3,2,1,"","call"],[3,2,1,"","get_config"]],"deepof.model_utils.MCDropout":[[3,2,1,"","call"]],"deepof.model_utils.MMDiscrepancyLayer":[[3,2,1,"","__init__"],[3,2,1,"","call"],[3,2,1,"","get_config"]],"deepof.model_utils.MeanVarianceRegularizer":[[3,2,1,"","__init__"],[3,2,1,"","get_config"]],"deepof.model_utils.VectorQuantizer":[[3,2,1,"","__init__"],[3,2,1,"","call"],[3,2,1,"","get_code_indices"],[3,2,1,"","update_posterior_variances"]],"deepof.model_utils.exponential_learning_rate":[[3,2,1,"","__init__"],[3,2,1,"","on_batch_end"]],"deepof.model_utils.one_cycle_scheduler":[[3,2,1,"","__init__"],[3,2,1,"","on_batch_begin"],[3,2,1,"","on_epoch_end"]],"deepof.models":[[4,1,1,"","GMVAE"],[4,1,1,"","VQVAE"],[4,4,1,"","get_deepof_decoder"],[4,4,1,"","get_deepof_encoder"],[4,4,1,"","get_gmvae"],[4,4,1,"","get_vqvae"]],"deepof.models.GMVAE":[[4,2,1,"","__init__"],[4,2,1,"","call"],[4,3,1,"","hparams"],[4,3,1,"","metrics"],[4,3,1,"","posterior"],[4,3,1,"","prior"],[4,2,1,"","test_step"],[4,2,1,"","train_step"]],"deepof.models.VQVAE":[[4,2,1,"","__init__"],[4,2,1,"","call"],[4,2,1,"","get_vq_posterior"],[4,3,1,"","hparams"],[4,3,1,"","metrics"],[4,3,1,"","posterior"],[4,2,1,"","test_step"],[4,2,1,"","train_step"]],"deepof.pose_utils":[[5,4,1,"","annotate_video"],[5,4,1,"","climb_wall"],[5,4,1,"","close_double_contact"],[5,4,1,"","close_single_contact"],[5,4,1,"","dig"],[5,4,1,"","following_path"],[5,4,1,"","frame_corners"],[5,4,1,"","get_hparameters"],[5,4,1,"","huddle"],[5,4,1,"","look_around"],[5,4,1,"","max_behaviour"],[5,4,1,"","outside_ellipse"],[5,4,1,"","rotate"],[5,4,1,"","sniff_object"],[5,4,1,"","supervised_tagging"],[5,4,1,"","tag_annotated_frames"]],"deepof.train_utils":[[6,1,1,"","CustomStopper"],[6,4,1,"","autoencoder_fitting"],[6,4,1,"","get_callbacks"],[6,4,1,"","load_treatments"],[6,4,1,"","log_hyperparameters"],[6,4,1,"","tune_search"]],"deepof.train_utils.CustomStopper":[[6,2,1,"","__init__"],[6,2,1,"","get_config"],[6,2,1,"","on_epoch_end"]],"deepof.utils":[[7,4,1,"","align_trajectories"],[7,4,1,"","angle"],[7,4,1,"","angle_trio"],[7,4,1,"","bp2polar"],[7,4,1,"","bpart_distance"],[7,4,1,"","circular_arena_recognition"],[7,4,1,"","cluster_transition_matrix"],[7,4,1,"","compute_dist"],[7,4,1,"","connect_mouse_topview"],[7,4,1,"","filter_columns"],[7,4,1,"","full_outlier_mask"],[7,4,1,"","gmm_compute"],[7,4,1,"","gmm_model_selection"],[7,4,1,"","interpolate_outliers"],[7,4,1,"","likelihood_qc"],[7,4,1,"","mask_outliers"],[7,4,1,"","moving_average"],[7,4,1,"","recognize_arena"],[7,4,1,"","rolling_speed"],[7,4,1,"","rolling_window"],[7,4,1,"","rotate"],[7,4,1,"","rupture_per_experiment"],[7,4,1,"","smooth_boolean_array"],[7,4,1,"","smooth_mult_trajectory"],[7,4,1,"","split_with_breakpoints"],[7,4,1,"","str2bool"],[7,4,1,"","tab2polar"]],"deepof.visuals":[[8,4,1,"","model_comparison_plot"],[8,4,1,"","plot_heatmap"],[8,4,1,"","plot_projection"]],deepof:[[1,0,0,"-","data"],[2,0,0,"-","hypermodels"],[3,0,0,"-","model_utils"],[4,0,0,"-","models"],[5,0,0,"-","pose_utils"],[6,0,0,"-","train_utils"],[7,0,0,"-","utils"],[8,0,0,"-","visuals"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:function"},terms:{"0":[1,2,3,4,5,6,7,9],"001":2,"00937":4,"01186":3,"03700":3,"05":3,"1":[1,3,4,5,6,7,8,9],"10":[1,2,3,4,5,7],"100":[1,6,7],"11":7,"128":4,"15":[1,4],"1506":3,"1509":3,"16":4,"1711":4,"1d":7,"1e":3,"2":[1,4,5,6,7,9],"20":[4,5],"200":8,"20style":[],"25":[3,4,9],"256":1,"2d":[1,7],"3":[1,4,7,9],"30":[1,6],"32":[3,4],"33965265":4,"36":4,"380":9,"3d":[1,7],"4":[1,4,7],"4415":4,"5":7,"50":1,"500":7,"6":[2,4],"64":[4,6],"7":6,"85":1,"9":7,"95":9,"99":9,"abstract":9,"boolean":[4,5,7,9],"break":7,"case":[1,4,9],"class":[1,2,3,4,6,7,9],"default":[1,4,5,7,8,9],"do":9,"export":3,"final":[3,4],"float":[1,2,3,4,5,6,7,8],"function":[1,2,3,4,5,6,7,8,9],"import":9,"int":[1,2,3,4,5,6,7,8],"new":4,"null":4,"return":[1,3,4,5,6,7,8,9],"static":1,"true":[1,3,4,5,7,9],"try":7,"while":[3,9],A:[1,4,9],As:9,But:9,For:[1,5,6,7],If:[1,3,5,7,8,9],In:[1,4,9],It:[1,4],One:[3,9],That:9,The:[1,3,4,9],There:[1,9],These:9,To:[4,9],_:[],__call__:4,__init__:[1,2,3,4,6],_video:5,ab:4,about:[5,7],abov:[7,9],absolut:7,academ:4,acc:4,acceler:[1,7,9],accept:7,access:[3,4],account:6,accur:7,accuraci:6,acquisit:7,across:[1,3,7,8],act:[1,3],action:6,activ:[3,4],actual:[1,4],ad:4,adam:[3,4],adapt:[4,7],add:[1,3,4],add_metr:4,addit:[3,4],adjac:1,advanc:1,ae:[],affect:[],aforement:1,after:[3,4,6],aggreg:4,algorithm:[1,7],align:[1,5,7,9],align_inplac:[1,9],align_trajectori:7,aligned_traj:7,all:[1,3,4,5,7,8,9],allow:[1,3],along:7,alpha:7,alreadi:[1,5],alt:[],altern:9,although:[],alwai:4,among:[1,7],an:[1,3,4,5,6,7,8,9],analis:7,analys:[5,9],analysi:[1,7,8],ang:[5,7],ang_trio:7,angl:[1,5,7,9],angle_trio:7,ani:[1,3,6,7,9],anim:[1,5,7,8,9],animal_id:[1,5,7],anneal:[1,3,4,6],annealing_mod:3,annot:[1,4,5,9],annotate_video:5,anoth:[1,9],api:4,appear:7,appil:1,appli:[1,3,7,9],applic:5,approach:7,approxim:[],ar:[1,3,4,5,6,7,8,9],architectur:[3,4],architecture_hparam:4,arena:[1,5,7,8,9],arena_ab:[5,7],arena_detect:1,arena_dim:[1,5,9],arena_param:1,arena_rel:[5,7],arena_typ:[5,7,9],arg:[1,3,4,6],argument:[3,4,6],aris:7,around:5,arrai:[1,3,5,6,7,9],articl:4,arxiv:[3,4],assign:[3,7],associ:[1,7,8],attempt:7,attent:1,attribut:5,autocorr:7,autocorrel:7,autodetect:1,autoencod:[1,2,3,4,6],autoencoder_fit:6,automat:[1,7,8,9],automatic_changepoint:[1,7],auxiliar:5,auxiliari:9,avail:[1,4,7,8],averag:[7,9],awar:9,ax:7,axi:[1,3,7,8,9],b:7,backward:4,badg:[],bar:8,base:[1,2,3,4,5,6,7,9],base_lay:3,basic:[],batch:[1,2,3,4,6],batch_input_shap:3,batch_siz:[1,2,3,4,6],bayesian:6,bayopt:[],been:4,befor:[1,6],behavior:[1,9],behaviour:5,behaviour_dfram:5,belong:9,below:[7,9],best:[6,7],best_bic_gmm:7,best_hparam:6,best_run:6,beta:[3,4],between:[1,3,5,7,9],bi:7,bic:[7,8],bidirectional_merg:4,big:1,bioinformat:4,bit:9,bivari:7,blablabla:[],black:[],block:9,blueprint:6,bodi:[1,5,7,9],bodypart:[1,5,7,8],bool:[1,3,4,5,6,7],bootstrap:[7,8],both:[4,5,6,7,9],box:8,bp2polar:7,bp:7,bpart:7,bpart_arrai:7,bpart_dist:7,branch:4,breakpoint:7,btaa293:4,build:[2,3,4],built:9,c57bl6:9,c:7,calcul:7,call:[3,4,6,7,9],callabl:[],callback:[3,6],camera:7,can:[1,3,4,5,7,9],capabl:[1,4,9],captur:7,care:9,carlo:[1,3,4,6],cartesian:[7,9],cartesian_df:7,categor:[1,6],categori:1,cd1:9,cd57bl6:[],center:[1,5,7,9],centered_data:5,certain:5,chang:7,changepoint:[1,7],character:9,characterist:8,charg:1,check:9,checkpoint:[1,3,6],chunk:1,circl:7,circular:[1,5,7,9],circular_arena_recognit:7,climb:[5,9],climb_wal:5,climbind:[],clone:3,close:9,close_contact_tol:5,close_double_contact:5,close_single_contact:5,closer:5,cluster:[1,3,4,6,7,9],cluster_sequ:7,cluster_transition_matrix:7,clusteroverlap:[3,4],cm:7,cnn:[1,7],cnn_model:7,coars:[],coarser:7,code:[3,9],codebook:[3,4],codefactor:[],coeffici:9,colour:8,column:[1,5,7],com:4,combin:7,come:1,command:9,common:5,compar:9,comparison:8,compat:[4,9],compil:4,compile_model:[],complet:4,complic:9,compon:[1,2,3,4,6,7,8,9],comput:[1,3,4,5,7,9],compute_dist:7,compute_kernel:3,compute_mmd:3,compute_output_shap:3,compute_shannon_entropi:3,concat:4,concaten:7,condit:[1,5,7,8],confid:7,config:3,configur:[1,3],connect:[4,7],connect_mouse_topview:7,consecut:7,consequ:7,consid:[3,7],consist:5,constant:7,constrain:9,constraint:3,contact:5,contact_arrai:5,contain:[1,3,5,6,7,8,9],content:10,control:9,conv_filt:[1,4],conveni:9,convers:7,convert:1,convert_to_tensor:[],convolut:[1,4,7],convolv:[],coord:[1,5,7],coord_object:5,coordin:[1,5,6,7,9],core:[3,5,7,8],corner:5,correl:1,correspond:[4,7,8,9],count:4,cov:8,cov_plot:8,covari:[3,7,8],coverag:[],cp:6,cp_callback:[],creat:[7,9],criteria:7,csd:9,csv:[1,9],current:[1,3,4,9],current_table_dict:1,custom:6,customstopp:6,cv_type:[7,8],cycl:3,d:4,data:[0,3,4,5,6,7,8,9,10],datafram:[1,5,7,8,9],dataset:[1,6,7],dataset_op:6,datasetv2:6,datetim:7,datetimeindex:7,de:[],debug:[1,5],decid:6,decim:7,decod:[3,4,6,9],decreas:[1,3],deep:[1,2,4,9],deep_unsupervised_embed:[1,6,9],deeplabcut:[5,7,9],deepof_coordin:[1,5],deepof_logo_w_text:[],deepof_table_dict:[1,5,7],deepof_train_unsupervis:[],defin:[3,6,9],degre:[1,7],denot:5,dens:[3,4],dense_activ:4,dense_lay:4,dense_units_1:4,dense_units_2:4,densetranspos:3,depend:9,deriv:[1,7,9],describ:[1,3,4],desir:[],detail:[1,3,5],detect:[1,4,5,7,9],detection_mod:7,determin:7,deviat:[1,7],dframe:[7,8],diag:[7,8],diamet:[1,5,7,9],dict:[1,3,4,5,6,7],dictionari:[1,3,4,5,6,7,9],differ:[1,3,7],differenti:1,dig:5,dig_estim:5,digraph:7,dimens:[1,2,3,4,7],dimension:[3,4],diment:1,directli:[4,5],directori:[3,6,7],discrep:3,disk:[],displai:5,dist:[1,5],distanc:[1,5,7,9],distance_dfram:5,distribut:[1,3,4,6,7,9],distribute_lib:[1,6],distribution_a:3,distribution_b:[],distribution_lay:3,div:[],diverg:[1,3,4],dlc:[1,5,7,9],docker:9,document:[1,5],don:[5,9],dot:8,double_contact:5,download:9,downstream:7,dpi:[1,8],dropout:[3,4],dropout_r:4,dure:[1,3,5,6],e:4,e_angl:5,e_ax:5,e_cent:5,each:[1,3,4,5,7,8,9],ear:5,earli:6,earlystop:6,easiest:9,effect:3,ego:1,either:[1,3,4,9],elbo:[1,2,3,4,6],element:7,ellips:[5,7],elucid:4,emb:9,embed:[1,3,4,6],embedd:4,embedding_dim:3,embedding_model:[1,6],emploi:[],empti:1,en:[],enabl:[3,4],enable_iterative_imput:1,enable_iterative_imputatuion:[],encod:[3,4,6,9],encoding_dim:3,encoding_indic:3,encoding_s:[1,6],end:[4,6,7],engin:[2,3,4,7],enhanc:1,enough:7,entir:[7,8],entropi:[1,3,6],entropy_knn:[1,6],epoch:[1,2,3,4,6],equal:[1,7],equival:[3,7,9],error:7,estim:[1,5,7,9],etc:[1,7,9],eu:[],evalu:[4,7,8],everi:7,exactli:[],exampl:[1,3,4,6,9],exclud:[1,7],exclude_bodypart:1,execut:[3,9],exp_condit:1,experi:[1,5,7,9],experiment:[1,9],explor:9,exponenti:[3,9],exponential_learning_r:3,express:1,extra:[1,7,9],extract:[7,9],factor:3,fals:[1,2,3,4,5,6,7,8,9],far:[1,3,9],fast:7,faster:[],featur:[1,2,4,5,7,9],fed:4,feed:1,few:9,fidel:1,figur:[1,8,9],file:[1,8],film:9,filt_mask:7,filter:[1,4,7],filter_column:7,filter_id:1,filter_video:1,filtered_column:7,find_learning_r:3,first:[1,4,5,7,9],fit:[4,7],fix:[3,7,9],flatten:3,flattened_input:3,fnum:5,folder:[1,9],follow:[1,5,9],follow_fram:5,follow_tol:5,following_path:5,font:5,forc:3,forecast:4,format:[1,3,9],former:9,forward:[4,5],found:[7,9],four:7,fp:5,frame:[1,5,7,8,9],frame_corn:5,frame_limit:[1,5],frame_r:[1,9],frame_spe:5,framework:3,free:9,freeli:9,frequent:5,from:[1,3,4,5,6,7,9],fulfil:5,full:[4,6,7,8],full_api_doc:[],full_mask:7,full_outlier_mask:7,fulli:1,fund:[],further:[],futur:9,g:4,gaussian:[1,3,4,7,8,9],gaussianmixturelat:3,gener:[1,3,4,5,6,7,8,9],get:7,get_angl:[1,9],get_arena:1,get_callback:6,get_code_indic:3,get_config:[3,6],get_coord:[1,9],get_deepof_decod:4,get_deepof_encod:4,get_dist:[1,9],get_exp_condit:1,get_gmva:4,get_hparam:2,get_hparamet:5,get_k_nearest_neighbor:3,get_lay:[],get_neighbourhood_entropi:3,get_prior:[],get_qual:1,get_training_set:1,get_video:1,get_vq_posterior:4,get_vqva:4,getter:[1,3],github:[],gitlab:[],give:[],given:[3,4,5,7,9],gm:4,gmm:7,gmm_comput:7,gmm_eval:7,gmm_model_select:7,gmvae:[1,2,4,6],gmvae_embed:9,goe:1,golai:7,got:9,graph:[4,7],greater:7,group:9,grouper:[4,6],grow:3,gru:4,gru_units_1:4,gru_units_2:4,gru_unrol:4,guid:1,h5:[1,9],h:[5,7],ha:[4,5],handl:[1,9],have:[1,7,9],hdf5:3,heatmap:[1,8],heavili:9,height:[5,7],helper:5,henc:7,here:[1,9],high:1,high_fidel:7,high_fidelity_arena:1,higher:[1,7],histori:[1,6],hit:5,hood:9,how:[1,4,9],hp:2,hparam:[1,4,5,6],hpm:[],hpt_type:6,html:8,http:[3,4,8],hub:1,huddl:5,huddle_estim:5,huddle_forward:5,huddle_spe:5,hyperband:6,hypermodel:[0,6,9,10],hyperparamet:[1,2,4,5,6,9],hypertun:6,hypertun_tri:6,hz:9,i:[1,4,9],ib:4,id:[1,7,9],ident:3,identifi:[5,7],identyfi:7,ignor:[1,4],ignore_index:1,imag:[7,8,9],img:[],implement:[3,6,7],imprint:[],imput:1,inch:8,includ:[1,4],increas:3,independ:7,index:[1,3,5,6,7],indic:[1,3,4,5,7,8,9],individu:[1,6,7],inf:[1,5],infer:[1,4],info:8,inform:[1,4,5,7,9],init:4,initi:[1,3,4,6,7],inplac:9,input:[2,3,4,5,6,7],input_shap:[2,3,4],input_typ:[1,6],insid:9,instal:[],instanc:[1,3,4,5,7,9],instanci:[],instead:9,integ:6,intend:[1,7],intens:1,interact:9,intermediari:1,intern:[1,5,7],interpol:[1,7],interpolate_outli:[1,7],interpolated_exp:7,interpolation_limit:1,interpolation_std:1,introduct:9,io:3,isol:7,issu:7,iter:[1,3,7],its:1,jerk:[1,7,9],job:1,json:3,jump:1,just:[3,4],k:[3,6],keep:[1,7,9],kei:[1,6,9],kera:[3,4,6,7],keras_tun:2,kernel:[1,3],keyword:[3,4,6],kl:[1,2,3,4,6],kl_annealing_mod:[1,3,4,6],kl_diverg:[],kl_warmup:[1,3,4,6],kl_warmup_epoch:[2,4,6],kldivergenceaddloss:3,kldivergencelay:3,known:1,kwarg:[3,4,6],l1:7,l2:[3,7],l:7,label:[1,3,4,5,7,8,9],lag:7,lalalala:[],last:[3,5],last_iter:3,last_rat:3,latent:[1,2,3,4,6,9],latent_dim:[2,3,4],later:[1,3,7],latest:9,latter:9,layer:[3,4,6],lear:3,learn:[2,3,8],learn_rat:2,least:[8,9],leav:1,left1:5,left2:5,left:[3,5],length:[5,7],less:5,let:9,level:[1,9],light:[1,7,9],like:1,likelihhod:[],likelihood:[1,3,5,7],likelihood_dfram:5,likelihood_qc:7,likelihood_tol:1,likelihood_toler:7,limb:5,limit:[1,5,7,8],linear:[1,3,4,6,7],linearli:[],list:[1,4,6,7,8],ll:9,load:[1,3,6,9],load_tabl:1,load_treat:6,local:3,locat:5,log:[1,3,6],log_dir:3,log_histori:[1,6],log_hparam:[1,6],log_hyperparamet:6,log_loss:3,logo:[],logparam:6,look:5,look_around:5,lookaround:5,loop:[],loos:4,loss:[1,2,3,4,6],loss_warmup:6,loss_weight:3,lot:9,lower:8,lowest:3,lucasmir:9,lucasmiranda42:[],m:[4,7],m_bic:[7,8],mae:4,main:[1,4,9],major:7,make:9,mark:7,mask:[4,7],mask_outli:7,master:[],matplotlib:[1,8],matric:[7,8],matrix:[4,5,7,8],max_arrai:5,max_behaviour:5,max_rat:3,maximum:[1,3,5,6,7],mc_kl:[3,4],mcdropout:3,mean:[3,4],meaning:9,meant:4,meanvarianceregular:3,measur:3,median:7,member:5,membership:[3,4,9],mention:9,merg:[1,4],metadata:[3,6],method:[1,2,3,4,7,9],metric:[4,6,7],mice:[5,9],might:1,milimet:9,min_rat:3,minimum:[1,3,5,7,8],minmax:1,minor:7,mirror:3,mirrored_strategi:1,miss:1,mixtur:[3,4,7,8,9],mlfpm:[],mm:[1,3,5],mmd:[1,2,3,4,6],mmd_annealing_mod:[1,3,4,6],mmd_warmup:[1,3,4,6],mmd_warmup_epoch:[2,4,6],mmdiscrep:3,mmdiscrepancylay:3,mode:[1,3,4,6,7],mode_util:[3,4],model:[0,1,2,3,5,6,7,8,9,10],model_comparison_plot:8,model_to_estim:3,model_util:[0,9,10],modelcomp:8,modul:[9,10],momentarili:5,mont:[1,3,4,6],montecarlo:3,montecarlo_kl:[1,4,6],more:[1,4,7,8,9],most:5,mostli:1,motif:[4,9],motion:[3,4,9],motiv:5,mous:[5,7],mouse_topview:1,mousemotorlab:[],move:[7,9],movement:[8,9],moving_averag:7,moving_avg:7,mp4:1,mpcdf:[],mpg:[],mse:4,much:9,multi:[1,5],multiindex:7,multipl:1,multipli:3,multivari:9,must:[1,3,4,5,6,7],my_project:9,my_project_angl:9,my_project_coord:9,my_project_dist:9,n:7,n_compon:[1,2,3,4,6,7],n_components_rang:[7,8],n_core:7,n_epoch:6,n_job:1,n_replica:6,n_run:7,n_std:7,nadam:4,name:[1,4,5,6,8,9],nclust:7,ndarrai:[1,3,6,7],nearest:[1,3,6],necessari:9,need:[3,4],neg:3,neighbor:[1,3,6],neighborhood:[],neighbour:3,neighbourhood:3,network:[3,4],networkx:7,neural:[3,4],next:[1,2,4,6],next_sequence_predict:[1,2,4,6],noisi:9,non:1,none:[1,3,4,5,6,7],norm:3,nose2tail:5,nose:[5,9],note:[1,4,7,9],now:9,np:[1,3,4,5,6,7],number:[1,2,3,4,5,6,7,8],number_of_compon:[],numpi:[1,5,6,7],nx:7,object:[1,3,4,5,6,7,9],obtain:[5,7,9],occlud:[1,5],occur:5,occurr:5,off:1,on_batch_begin:3,on_batch_end:3,on_epoch_end:[3,6],onc:9,one:[1,3,4,5,6,7,8,9],one_cycle_schedul:3,one_devic:[1,6],onecycl:[],ones:9,onli:[1,3,4,5,6,7,9],op:[3,4,6],optim:[2,3,4,6],optimizer_v2:[3,4],optimizerv2:[3,4],option:[1,3,4,5,6,7,9],order:[3,4,5,7],org:[3,4,8],origin:[1,4,5,7,9],other:[7,9],otherwis:[1,5],oup:4,our:9,out:[4,9],out_1_acc:4,out_1_loss:4,out_1_ma:4,out_acc:4,out_loss:4,out_ma:4,outlier:[1,7],outpath:6,output:[1,3,4,5,6,7,9],output_1:4,output_2:4,output_dim:3,output_path:[1,6],outsid:5,outside_ellips:5,over:[1,5,6,7],overal:7,overlap:[1,2,3,4,5,6],overlap_loss:[1,2,3,4,6],overlar:[],overrid:[2,3,6],overridden:4,overwrit:5,overwriten:5,overwritten:5,p:7,p_x_q_given_z:3,packag:[3,7,8,9,10],pai:1,pair:7,pair_arrai:7,panda:[1,5,7,8,9],panel:8,parallel:1,param:[1,5],paramet:[1,2,3,4,5,6,7,8,9],parent:3,part:[1,5,7,9],part_siz:7,partner:5,pass:[1,3,4,5,6,7,8],path:[1,5,6,7,9],pattern:5,paus:[],pca:1,pd:7,pdf:[3,4],peep:9,pelt:1,penal:[1,3,4],penalti:3,per:[1,5,6,7,8,9],perform:[1,3,4,6],perplex:1,perspect:9,pheno:1,phenotyp:[1,2,4,6],phenotype_class:6,phenotype_predict:[1,2,4,6],pick:1,pip:9,pipelin:[1,2,5,9],pitch:[],pivot:5,pixel:[5,7],place:5,placehold:[],plai:1,plethora:1,plot:[1,3,5,7,8],plot_heatmap:[1,8],plot_lr_vs_loss:3,plot_project:8,plottinh:7,plt:[1,8],png:[],point:[1,5,7,8,9],polar:[1,7,9],polynomi:7,poor:7,pos_dfram:5,pos_dict:5,pose:[1,4,5,9],pose_util:[0,9,10],posit:[1,3,5,7,9],position_dfram:5,possibl:7,posterior:[3,4],postprocess:9,potenti:[5,7],practic:9,pre:[5,9],predict:[1,2,3,4,5,6,7],predictor:[],prefix:6,preprocess:[1,5,6],preprocessed_object:[1,6],presum:[],pretrain:[1,5,6,7],prevent:6,previou:[],print:1,prior:[3,4],probabilist:3,probabl:9,process:[1,3,5,7,9],produc:[5,7],progress:1,project:[1,5,6,8,9],project_nam:6,projection_scatt:8,prone:[],propag:[1,8],propagate_annot:1,propagate_label:1,properti:[1,3,4],provid:[1,3,4,7],psf:[],pull:9,purpos:[1,6],pypi:[],pypidownload:[],pyplot:[1,8],python:[1,3,6,9],qualiti:1,quantiz:[2,3,4],quit:9,radian:[1,7],radiu:[5,7],rais:7,ran:1,randint:4,random:[1,4],random_project:1,randomli:1,rang:[7,8],rate:[1,2,3,4,7,9],raw:[1,5],raw_coord:5,rbf:[1,7],re:9,readi:[1,4],readthedoc:[],real:[5,7],reappli:4,reason:1,rec:6,recoglimit:7,recogn:9,recognis:[1,5,7],recognit:7,recognize_arena:7,recommend:[1,9],reconstruct:[3,4],record:[6,7],reduc:[],reduce_:[],reduce_mean:[],reduce_sum:4,reduct:[],ref:[],reg_cat_clust:[1,3,4,6],reg_cluster_vari:[1,3,4,6],regard:9,regist:5,regular:[1,3,4,6],regularis:1,reinstanti:3,rel:7,relat:1,releas:9,relev:[],reli:[4,9],reliabl:7,relu:4,render:5,replac:7,replica:6,report:[1,5,7],repositori:9,repres:[3,5,7,8,9],requir:[3,9],resnet50:7,resolut:1,respect:[8,9],rest:1,result:[1,3,6,7,9],retain:5,retriev:[1,2,3,4],retuen:1,return_graph:7,rev:5,revers:5,right1:5,right2:5,right:[3,5],robust:[],rodent:9,roll:[5,7],rolled_a:7,rolling_spe:7,rolling_window:7,rotat:[5,7],round:[1,7,9],row:[5,7],rst:[],rtype:[],rule:[1,5,7],run:[1,4,6,7,8,9],run_dir:[],run_id:[],ruptur:[1,7],rupture_indic:7,rupture_per_experi:7,ruptured_dataset:7,s:[2,3,4,5,6,9],s_object:5,same:[3,5,9],sampl:[1,3,4,6,7,9],save:[1,3,6,8],save_checkpoint:[1,6],save_weight:[1,6],savedmodel:3,savitzki:7,scalar:4,scale:[1,7],scatter:8,schedul:[3,9],scikit:8,scratch:1,screen:5,script:[],search:6,second:[4,5],section:1,see:[1,3,5,9],segment:[],select:[1,5,7],selected_id:[1,7],self:3,seq_2_seq_gmva:2,seq_2_seq_vqva:2,sequenc:[1,2,4,5,6,7,9],seri:[1,4,7,9],serializ:3,serv:1,set:[1,4,7,9],setter:1,sever:[5,9],shannon:3,shape:[1,2,3,4,5,7],shield:[],shift:[1,7],shorter:1,should:[4,6,8,9],show:8,shown:9,shuffl:1,side_contact_tol:5,sigma:1,sigmoid:[1,3,4,6],significantli:[],silent:1,similar:[8,9],simpl:[3,5],simpler:7,singl:[1,4,5,7],situat:[],size:[1,2,3,4,5,6,7],skeleton:[],sklearn:[5,7],slide:[1,5,7],sliding_window_s:1,slot:5,slow:[1,7],slower:[],smooth:[1,7,9],smooth_alpha:[1,9],smooth_boolean_arrai:7,smooth_mult_trajectori:7,smoothed_seri:7,smoothen:7,sne:1,snif:5,sniff_object:5,so:[1,3,9],social:9,soft:4,solv:7,some:[3,9],soon:9,space:[1,2,3,4,6,7,9],specif:[1,7,8],specifi:[1,3,5,6,7,8],speed:[1,5,7,9],speed_dfram:5,speed_paus:5,spheric:[7,8],split:[1,7],split_a:7,split_with_breakpoint:7,src:[],stabl:8,stand:5,standard:[1,7],standard_norm:[],star:[],start:[3,4],start_epoch:6,start_rat:3,state:[1,3,4],statist:8,step:[1,4,5,7],stick:9,still:5,stop:[1,6],store:[1,9],str2bool:7,str:[1,2,3,4,5,6,7,8],strategi:[1,6],strength:3,stride:7,string:[1,5,7],stronger:9,structur:[1,3,4],studi:9,subclass:[3,4,6],subdirectori:9,subject:1,submodul:10,subplot:8,subset:1,suit:9,supervis:[1,2,4,5,6,9],supervised_annot:[1,9],supervised_featur:[2,4],supervised_predict:[1,2,4,6],supervised_tag:5,support:[1,3],sure:9,svg:[],t:[1,5,7,9],tab2polar:7,tab:[1,7],tab_dict:1,tabl:[1,5,7,9],table_dict:[1,5,7,8,9],table_format:1,tabledict:[1,6,7,9],tag:[1,5,7,9],tag_annotated_fram:5,tag_df:5,tag_dict:5,take:[1,7,9],taken:[3,6],target:3,tensor:[2,3,4],tensorboard:[1,3,6],tensorboard_callback:[],tensorboard_metric_log:[],tensorflo:1,tensorflow:[1,3,6],tensorflow_prob:3,term:1,test:[1,4,7],test_points_fn:[],test_points_reduce_axi:[],test_step:4,test_video:1,tf:[1,3,4,6,7],tfd:3,tfp:[],than:[4,5,7,8],thei:[1,9],them:[1,7],thi:[1,3,4,6,7,9],thing:9,third:7,thorough:9,those:[1,5,7,9],three:[1,7],threshold:[1,5,7],through:1,throughout:7,ti:[7,8],tidi:1,time:[1,3,5,7,9],time_seri:7,to_ruptur:7,toggl:1,tol:5,tol_likelihood:5,tol_spe:5,toler:[5,7],too:9,top:9,topview:7,toward:1,track:[1,3,4,5,9],tracker:5,train:[1,2,3,4,5,6,7,9],train_path:6,train_step:4,train_util:[0,9,10],train_vari:[],trained_model_path:[1,5],trait:[1,5],trajectori:[1,7,8,9],trans_norm:7,transform:[3,7],transit:7,transpos:3,treatment:6,tri:[],trial:6,trio:1,tsne:1,tune:[2,6,9],tune_search:6,tuner:6,tupl:[1,2,3,4,6,7,8],turn:1,tutori:1,two:[3,4,5,7,9],typ:[1,7],type:[1,3,4,5,6,7,8,9],under:[1,9],undercond:5,underli:4,underlin:[],uneven:[1,3,4],unfit:7,uni:7,union:[6,7],unit:4,univari:[],unrol:4,unsupervis:[1,3,4,9],unsupervised_trained_model:1,unsupervised_tuner_search:6,unsur:1,up:[1,3,4],updat:[3,6,9],update_posterior_vari:3,upper:8,us:[1,2,3,4,5,6,7,8,9],usabl:[],usag:[1,5,7],use_exact_kl:[],user:[1,9],util:[0,3,5,6,9,10],v0:[],v:7,vae:4,val_:6,valid:[1,6,9],valu:[1,3,5,6,7,8,9],varianc:[1,3,4,6],variat:[4,7],vector:[1,3,4,7],vectorquant:3,verbos:[1,9],veri:9,version:[5,7],versu:3,via:[],vid_index:[5,7],video:[1,5,7,9],video_format:1,video_output:1,video_resolut:1,view:9,visual:[0,1,3,9,10],vq:[1,3,4],vq_vae:3,vqvae:[1,2,4,6],w:[5,7],w_length:7,wai:[3,7,9],walk:5,wall:5,want:9,warm:[1,3,4],warm_up_it:3,warmup:[2,3,4,6],warmup_mod:6,warn:7,we:9,weight:[1,2,3,4,6,9],whatev:9,when:[1,4,5,6,7,8],where:[5,7],whether:[1,3,4,5,6,7],which:[1,3,4,5,6,7,8,9],who:5,whole:[1,7],width:[5,7],window:[1,5,7],window_length:7,window_s:[1,5,7],window_step:[1,7],within:[3,9],without:3,won:7,work:[7,9],worri:9,wors:7,wrangl:[1,9],www:[],x:[1,3,4,5,7,8],x_test:1,x_train:[1,6],x_true:3,x_val:[],xlim:[1,8],y:[1,3,4,5,7,8,9],y_huddl:5,y_test:1,y_train:1,y_val:[],yeah:9,yield:7,ylim:[1,8],you:3,your:9,yourself:9,z:3,zero:7,zone:9},titles:["deepof package","deepof.data module","deepof.hypermodels module","deepof.model_utils module","deepof.models module","deepof.pose_utils module","deepof.train_utils module","deepof.utils module","deepof.visuals module","Welcome to DeepOF!","deepof"],titleterms:{advanc:9,api:9,basic:9,content:0,data:1,deeper:[],deepof:[0,1,2,3,4,5,6,7,8,9,10],deepof_train_unsupervis:[],delv:[],document:9,format:[],full:9,get:9,hypermodel:2,instal:9,model:4,model_util:3,modul:[0,1,2,3,4,5,6,7,8],need:9,packag:0,pose_util:5,start:9,submodul:0,train_util:6,tutori:9,underlin:[],usag:9,util:7,visual:8,welcom:9,what:9,you:9,your:[]}})