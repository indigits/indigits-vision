Search.setIndex({docnames:["image_processing/index","image_processing/nb_effects","index","nb_basic_image_operations","source/cr.vision","source/cr.vision.apps","source/cr.vision.concurrent","source/cr.vision.core","source/cr.vision.edits","source/cr.vision.filters","source/cr.vision.geom_transform","source/cr.vision.io","source/cr.vision.misc","source/cr.vision.motion","source/cr.vision.noise","source/cr.vision.object_detection","source/cr.vision.object_tracker","source/cr.vision.saliency","source/cr.vision.video","source/modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["image_processing/index.rst","image_processing/nb_effects.ipynb","index.rst","nb_basic_image_operations.ipynb","source/cr.vision.rst","source/cr.vision.apps.rst","source/cr.vision.concurrent.rst","source/cr.vision.core.rst","source/cr.vision.edits.rst","source/cr.vision.filters.rst","source/cr.vision.geom_transform.rst","source/cr.vision.io.rst","source/cr.vision.misc.rst","source/cr.vision.motion.rst","source/cr.vision.noise.rst","source/cr.vision.object_detection.rst","source/cr.vision.object_tracker.rst","source/cr.vision.saliency.rst","source/cr.vision.video.rst","source/modules.rst"],objects:{"cr.vision":{apps:[5,0,0,"-"],colors:[7,0,0,"-"],concurrent:[6,0,0,"-"],contour:[7,0,0,"-"],cvt_color:[7,0,0,"-"],edits:[8,0,0,"-"],effects:[7,0,0,"-"],errors:[4,0,0,"-"],filters:[9,0,0,"-"],geom_transform:[10,0,0,"-"],histogram:[7,0,0,"-"],io:[11,0,0,"-"],misc:[12,0,0,"-"],motion:[13,0,0,"-"],object_detection:[15,0,0,"-"],object_tracker:[16,0,0,"-"],plot:[7,0,0,"-"],saliency:[17,0,0,"-"],template:[7,0,0,"-"],threshold:[7,0,0,"-"],types:[7,0,0,"-"],video:[18,0,0,"-"]},"cr.vision.apps":{capture:[5,0,0,"-"],ipcam:[5,0,0,"-"]},"cr.vision.apps.capture":{webcam_capture:[5,1,1,""]},"cr.vision.apps.ipcam":{IPCamera:[5,2,1,""],IPCameraDetails:[5,2,1,""],ipcam_capture:[5,1,1,""],test_ipcamera:[5,1,1,""]},"cr.vision.apps.ipcam.IPCamera":{get_frame:[5,3,1,""],release:[5,3,1,""]},"cr.vision.apps.ipcam.IPCameraDetails":{country:[5,4,1,""],get_url:[5,3,1,""],ip_address:[5,4,1,""],path:[5,4,1,""],place:[5,4,1,""],protocol:[5,4,1,""]},"cr.vision.concurrent":{base:[6,0,0,"-"],graph:[6,0,0,"-"],motion_detection:[6,0,0,"-"],on_screen_display:[6,0,0,"-"],video_stream:[6,0,0,"-"],webcam_stream:[6,0,0,"-"]},"cr.vision.concurrent.base":{ActiveMap:[6,2,1,""],ActiveNode:[6,2,1,""]},"cr.vision.concurrent.base.ActiveNode":{name:[6,4,1,""],start:[6,3,1,""],stop:[6,3,1,""]},"cr.vision.concurrent.graph":{ActiveGraph:[6,2,1,""]},"cr.vision.concurrent.graph.ActiveGraph":{start:[6,3,1,""],stop:[6,3,1,""]},"cr.vision.concurrent.motion_detection":{SimpleMotionDetectionNode:[6,2,1,""]},"cr.vision.concurrent.motion_detection.SimpleMotionDetectionNode":{first_frame:[6,4,1,""]},"cr.vision.concurrent.on_screen_display":{OnScreenDisplay:[6,2,1,""]},"cr.vision.concurrent.video_stream":{VideoReadStream:[6,2,1,""]},"cr.vision.concurrent.video_stream.VideoReadStream":{current_frame:[6,4,1,""],dropped_frame_count:[6,4,1,""],frame_count:[6,4,1,""],get_current_frame:[6,3,1,""]},"cr.vision.concurrent.webcam_stream":{WebcamReadStream:[6,2,1,""]},"cr.vision.edits":{border:[8,0,0,"-"],logo:[8,0,0,"-"],placement:[8,0,0,"-"]},"cr.vision.edits.border":{add_border:[8,1,1,""],add_letter_box_pattern:[8,1,1,""],add_multiple_borders:[8,1,1,""],add_pillar_box_pattern:[8,1,1,""],add_window_box_pattern:[8,1,1,""]},"cr.vision.edits.logo":{add_logo:[8,1,1,""]},"cr.vision.edits.placement":{place_image_at:[8,1,1,""]},"cr.vision.errors":{IVError:[4,5,1,""],InvalidNumChannelsError:[4,5,1,""],InvalidNumDimensionsError:[4,5,1,""],NotU8C1Error:[4,5,1,""],NotU8C3Error:[4,5,1,""],check_nchannels:[4,1,1,""],check_ndim:[4,1,1,""],check_u8c1:[4,1,1,""],check_u8c3:[4,1,1,""]},"cr.vision.filters":{filter:[9,0,0,"-"],kernels:[9,0,0,"-"]},"cr.vision.filters.filter":{filter_2d:[9,1,1,""],gaussian_blur:[9,1,1,""],laplacian:[9,1,1,""],sobel_energy_l1:[9,1,1,""],sobel_energy_l2:[9,1,1,""],sobel_x:[9,1,1,""],sobel_y:[9,1,1,""]},"cr.vision.geom_transform":{projective2d_actions:[10,0,0,"-"],projective2d_matrices:[10,0,0,"-"],scaling:[10,0,0,"-"]},"cr.vision.geom_transform.projective2d_actions":{rotate:[10,1,1,""],translate:[10,1,1,""]},"cr.vision.geom_transform.projective2d_matrices":{Identity:[10,2,1,""],Transform:[10,2,1,""],Translation:[10,2,1,""]},"cr.vision.geom_transform.projective2d_matrices.Identity":{matrix:[10,3,1,""]},"cr.vision.geom_transform.projective2d_matrices.Transform":{matrix:[10,3,1,""]},"cr.vision.geom_transform.projective2d_matrices.Translation":{matrix:[10,3,1,""]},"cr.vision.geom_transform.scaling":{resize:[10,1,1,""],resize_by_height:[10,1,1,""],resize_by_width:[10,1,1,""]},"cr.vision.io":{display:[11,0,0,"-"],interfaces:[11,0,0,"-"],videocapture:[11,0,0,"-"],videowriter:[11,0,0,"-"]},"cr.vision.io.display":{DisplayManager:[11,2,1,""]},"cr.vision.io.display.DisplayManager":{select_roi:[11,3,1,""],show:[11,3,1,""],show_all:[11,3,1,""],stop:[11,3,1,""]},"cr.vision.io.interfaces":{FrameSequence:[11,2,1,""]},"cr.vision.io.interfaces.FrameSequence":{is_done:[11,3,1,""],is_open:[11,3,1,""],stop:[11,3,1,""]},"cr.vision.io.videocapture":{VideoCaptureSequence:[11,2,1,""],VideoFileSequence:[11,2,1,""],WebcamSequence:[11,2,1,""]},"cr.vision.io.videocapture.VideoCaptureSequence":{is_done:[11,3,1,""],is_open:[11,3,1,""],stop:[11,3,1,""],stream:[11,4,1,""]},"cr.vision.io.videowriter":{VideoWriter:[11,2,1,""]},"cr.vision.io.videowriter.VideoWriter":{is_open:[11,3,1,""],stop:[11,3,1,""],write:[11,3,1,""]},"cr.vision.motion":{simple_motion_detector:[13,0,0,"-"]},"cr.vision.motion.simple_motion_detector":{SimpleMotionDetector:[13,2,1,""]},"cr.vision.motion.simple_motion_detector.SimpleMotionDetector":{begin:[13,3,1,""],current_frame:[13,4,1,""],end:[13,3,1,""],first_frame:[13,4,1,""],gray_frame:[13,4,1,""],process:[13,3,1,""]},"cr.vision.object_detection":{nms:[15,0,0,"-"]},"cr.vision.object_detection.nms":{bb_areas:[15,1,1,""],non_maximum_suppression:[15,1,1,""]},"cr.vision.object_tracker":{object_tracker:[16,0,0,"-"]},"cr.vision.object_tracker.object_tracker":{ObjectTracker:[16,2,1,""],create_object_tracker:[16,1,1,""]},"cr.vision.object_tracker.object_tracker.ObjectTracker":{bounding_box:[16,4,1,""],initialize:[16,3,1,""],tracker:[16,4,1,""],update:[16,3,1,""]},"cr.vision.saliency":{saliency:[17,0,0,"-"]},"cr.vision.saliency.saliency":{Saliency:[17,2,1,""],create_static_saliency_fine_grained:[17,1,1,""],create_static_saliency_spectral_residual:[17,1,1,""]},"cr.vision.saliency.saliency.Saliency":{compute_saliency:[17,3,1,""],compute_saliency_mask:[17,3,1,""],compute_saliency_uint8:[17,3,1,""]},"cr.vision.video":{frame:[18,0,0,"-"]},"cr.vision.video.frame":{Frame:[18,2,1,""],frame_sequence_map:[18,1,1,""]},"cr.vision.video.frame.Frame":{frame:[18,4,1,""],frame_number:[18,3,1,""],tick:[18,3,1,""]},cr:{vision:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:exception"},terms:{"case":[9,10],"class":[4,5,6,7,10,11,13,16,17,18],"float":15,"function":[5,7,8,10,13,17,18],"import":[1,3],"return":[5,6,10,11,15,17,18],"static":17,"true":11,For:15,One:[8,9],about:10,abs_uint8:1,absolut:9,activ:6,activegraph:6,activemap:6,activenod:6,actual_channel:4,actual_ndim:4,add:8,add_bord:8,add_letter_box_pattern:8,add_logo:8,add_multiple_bord:8,add_pillar_box_pattern:8,add_window_box_pattern:8,adding:[7,8],adjust:10,after:18,algorithm:[6,13],all:[6,11,15],amount:10,analysi:[7,13],anoth:[8,18],api:9,app:[4,19],appli:18,applic:[2,5],area:15,arg:15,arrai:15,aspect:10,assum:[8,9],automat:10,azimuth:7,b_i:15,b_j:15,back:9,background:8,barbara:1,base:[4,5,10,11,13,16,17,18,19],basi:15,basic:[2,8],bb_area:15,begin:13,being:6,between:7,bgr:8,binar:17,bit:[4,17],black:[3,8],blank_imag:3,blue:[0,8],blur:0,border:[4,19],both:10,bottom:15,bound:[10,15,16],bounding_box:[15,16],box:[8,10,15,16],calcul:[7,10],cam:5,camera:5,can:[8,9],captur:[4,11,19],cartoon:0,center:10,channel:[0,4],chceck:4,check:4,check_nchannel:4,check_ndim:4,check_u8c1:4,check_u8c3:4,cleanup:13,clock:18,color:[4,8,19],com:7,common:[7,9],compon:8,comput:[2,5,9,17],compute_sali:17,compute_saliency_mask:17,compute_saliency_uint8:17,concurr:[4,19],confid:15,consid:15,construct:16,consum:6,contain:[10,15],content:[0,2,19],contour:[0,4,19],convers:7,convert:7,convmatrix:7,coordin:15,correct:4,countri:5,cover:[9,15],creat:[5,7,17,18],create_object_track:16,create_static_saliency_fine_grain:17,create_static_saliency_spectral_residu:17,current:[6,18],current_fram:[6,13],cv2:[1,3,11],cvt_color:[4,19],data:[1,5,6,7],ddepth:9,definit:10,depth:[1,7,9],deriv:9,describ:15,detail:5,detect:[6,13,15],diagon:0,differer:1,dimens:4,direct:9,displai:[4,5,6,19],displaymanag:11,doc:7,down:0,draw:7,driver:5,dropped_frame_count:6,dyclassroom:7,each:[6,8,15],edit:[4,19],effect:[0,2,4,19],emboss3d:1,emboss:[0,7],end:13,energi:9,enhance_contrast:1,error:19,estim:[10,17],etc:7,exampl:[0,7],except:4,execut:6,expected_channel:4,expected_max_ndim:4,expected_min_ndim:4,fall:9,fals:1,feed:5,few:1,fighter_jet:1,file:11,filepath:11,filter:[4,7,19],filter_2d:9,find:7,fine:17,first:13,first_fram:[6,13],flexibl:9,format:[7,8],fourcc:11,fps:11,frame:[4,5,6,11,13,16,19],frame_count:6,frame_numb:18,frame_r:5,frame_s:11,frame_sequence_map:18,framesequ:11,from:[1,3,5,6,10,11],fulli:10,gap_x:11,gaussian:[4,9,19],gaussian_blur:9,geom_transform:[4,19],geometr:10,get_current_fram:6,get_fram:5,get_url:5,gimp:7,gimp_advanced_guid:7,gimp_guide_node74:7,github:7,given:[9,11],gradient:9,grai:9,grain:17,graph:[4,19],graphics_tool:7,gray_fram:13,grayscal:4,green:[0,8],handl:13,height:10,helper:7,histogram:[4,19],horz:1,how:7,html:7,http:7,ident:10,identifi:8,ignor:5,imag:[2,4,6,7,8,9,10,11,16,17],image_modifi:1,img:[8,10],implement:9,imread:1,imshow:3,imshow_multiple_in_row:1,independ:6,index:2,indic:6,indigit:[1,3,4],initi:16,inlin:[1,3],input:6,input_queu:6,input_sequ:18,insid:[8,10],integ:17,interest:11,interfac:[4,19],interoper:7,interpol:10,invalid:4,invalidnumchannelserror:4,invalidnumdimensionserror:4,ip_address:5,ipcam:[4,19],ipcam_captur:5,ipcamera:5,ipcameradetail:5,is_color:11,is_don:11,is_open:11,its:[9,10,15],iverror:4,jmhobb:7,jpg:1,kernel:[4,19],kernel_s:[1,9],ksize:9,kwarg:15,laplacian:9,left:[0,15],left_width:8,let:1,letter:8,level:9,lib:7,libcvfx:7,librari:[1,4],linuxtopia:7,list:[7,15],locat:[8,10],logo:[4,19],logo_imag:8,low:9,magnitud:9,manag:11,map:[6,17,18],map_funct:6,mask:17,mask_threshold:8,match:7,matplot:7,matplotlib:[1,3],matrix:[9,10],max:1,maximum:15,method:[1,9,15,17],minimum_contour_area:13,mirror:0,mirror_lr:1,mirror_ud:1,mirror_x:1,misc:[4,19],miscellan:[7,12],model:17,modul:[2,19],monochrom:0,more:[9,11,15],motion:[0,4,6,19],motion_blur:1,motion_detect:[4,19],mountain:1,move:10,multipl:[8,11],name:6,nearbi:15,need:[9,15],next:16,nms:[4,19],node:6,nois:[4,19],non:15,non_maximum_suppress:15,none:[4,5,6,8,10,11,13,15,16,18],notu8c1error:4,notu8c3error:4,now:5,number:[4,18],numpi:[1,3],nx4:15,object:[5,6,10,11,13,15,16,17,18],object_detect:[4,19],object_track:[4,19],objecttrack:16,on_screen_displai:[4,19],one:[4,8,11],onli:[10,15],online_book:7,onscreendisplai:6,open:11,opencv:[4,7,9,11,17,19],oper:[2,4,6,12,19],org:7,otherwis:10,otsu:17,output:[6,10,11],output_queu:6,over:11,overlap:15,overlap_threshold:15,overwrit:8,packag:[2,19],packtpublish:7,page:2,particular:10,password:5,patch:8,path:5,pattern:8,per:10,pil:7,pillar:8,pixel:[0,8],place:[5,8],place_image_at:8,placement:[4,19],plai:1,plot:[4,19],plug:7,png:1,pocket_watch:1,posit:8,preserv:10,previou:10,process:[2,7,9,13,18],processor:5,produc:6,project:[7,10],projective2d_act:[4,19],projective2d_matric:[4,19],properti:18,protocol:5,provid:15,puppi:1,python:7,question:7,queue:6,ratio:10,read:[1,5,6,11],rectangl:15,red:[0,8],refer:7,region:11,relat:[10,17,18],releas:5,relev:1,repres:10,residu:17,resiz:10,resize_by_height:10,resize_by_width:10,retain:9,right:[0,15],roi:8,roi_mask:8,rose:1,rotat:10,routin:[5,7],salienc:[4,19],scale:[4,9,19],score:15,screen:[6,11],search:2,select:[0,11,15],select_blu:1,select_green:1,select_r:1,select_roi:11,separ:8,sepia:[0,7],sequenc:[11,18],serv:11,set:10,setup:0,sharpen:0,should:6,show:11,show_al:11,sigma:9,signed_subtract:1,simpl:[6,7,12,13],simple_motion_detector:[4,19],simplemotiondetectionag:6,simplemotiondetectionnod:6,simplemotiondetector:13,size:[9,10],smaller:15,snp:[4,19],sobel:9,sobel_energy_l1:9,sobel_energy_l2:9,sobel_i:9,sobel_x:9,some:6,sourc:[4,5,6,8,9,10,11,13,15,16,17,18],specifi:[8,10,11],spectral:17,src_imag:8,stackoverflow:7,standard:9,start:6,step:10,stop:[6,11],stream:[6,11],submodul:19,subpackag:19,subsequ:13,sum:9,suppress:15,surround:15,symmetr:9,t_x:10,t_y:10,take:9,target:[8,10],target_height:10,target_imag:8,target_s:10,target_width:10,templat:[4,19],test:[0,5],test_ipcamera:5,than:15,theta:10,thi:[5,8],those:15,thread:6,threshold:[4,15,19],tick:18,titl:5,tool:2,top:15,top_width:8,tracker:16,tracker_typ:16,transform:10,translat:10,two:10,type:[4,19],underli:18,unsign:4,updat:16,url:5,use:9,user:5,using:[6,9,13,17],util:7,video:[4,5,6,11,13,19],video_stream:[4,19],videocaptur:[4,19],videocapturesequ:11,videofilesequ:11,videoreadstream:6,videostream:6,videowrit:[4,19],vignett:[0,7],vision:[1,3,19],visual:[0,2,7],watch:1,webcam:[6,11],webcam_captur:5,webcam_stream:[4,19],webcamp:11,webcamreadstream:6,webcamsequ:11,webcamstream:6,were:15,when:18,where:9,which:[6,15],width:[8,10],window:[8,11],window_nam:11,window_num:11,work:[6,7],wrapper:[5,7,11,17],write:11,writer:11,www:7,x_po:8,xvid:11,y_po:8},titles:["Image Processing","Visual Effects on Images","InDigits.Vision","Basic Image Operations","cr.vision package","cr.vision.apps package","cr.vision.concurrent package","cr.vision package","cr.vision.edits package","cr.vision.filters package","cr.vision.geom_transform package","cr.vision.io package","cr.vision.misc package","cr.vision.motion package","cr.vision.noise package","cr.vision.object_detection package","cr.vision.object_tracker package","cr.vision.saliency package","cr.vision.video package","cr"],titleterms:{app:5,base:6,basic:3,blue:1,blur:1,border:8,captur:5,cartoon:1,channel:1,color:7,concurr:6,content:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],contour:[1,7],cvt_color:7,diagon:1,displai:11,down:1,edit:8,effect:[1,7],emboss:1,error:4,exampl:1,filter:9,frame:18,gaussian:14,geom_transform:10,graph:6,green:1,histogram:7,imag:[0,1,3],indic:2,indigit:2,interfac:11,ipcam:5,kernel:9,left:1,logo:8,mirror:1,misc:[7,12],modul:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],monochrom:1,motion:[1,13],motion_detect:6,nms:15,nois:14,object_detect:15,object_track:16,on_screen_displai:6,opencv:12,oper:[3,7],packag:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],pixel:1,placement:8,plot:7,process:0,projective2d_act:10,projective2d_matric:10,red:1,right:1,salienc:17,scale:10,select:1,sepia:1,setup:1,sharpen:1,simple_motion_detector:13,snp:14,submodul:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],subpackag:4,tabl:2,templat:7,test:1,threshold:7,todo:15,type:7,video:18,video_stream:6,videocaptur:11,videowrit:11,vignett:1,vision:[2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],visual:1,webcam_stream:6}})