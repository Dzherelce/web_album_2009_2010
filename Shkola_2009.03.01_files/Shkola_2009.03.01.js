// Created by iWeb 2.0.4 local-build-20090401

function createMediaStream_id3()
{return IWCreatePhotocast("http://kraiany.sytes.net/%D0%9D%D0%B5%D0%B4%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0/Shkola_2009.03.01_files/rss.xml",true,true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://kraiany.sytes.net/%D0%9D%D0%B5%D0%B4%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://kraiany.sytes.net/%D0%9D%D0%B5%D0%B4%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(183,183),new IWSize(183,0),new IWSize(209,198),27,27,0,new IWSize(26,25)),new IWPhotoFrame([IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_01.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_02.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_03.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_06.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_09.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_08.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_07.jpg'),IWCreateImage('Shkola_2009.03.01_files/kid_frame-1_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,13.000000,13.000000,13.000000,12.000000,121.000000,120.000000,121.000000,120.000000,null,null,null,0.500000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_01.png'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_02.png'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_03.png'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_06.jpg'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_09.jpg'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_08.jpg'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_07.jpg'),IWCreateImage('Shkola_2009.03.01_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_3:new IWShadow({blurRadius:15,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Shkola_2009.03.01_files/Shkola_2009.03.01Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id4');applyEffects()
initializeMediaStream_id3()}
function onPageUnload()
{Widget.onunload();}
