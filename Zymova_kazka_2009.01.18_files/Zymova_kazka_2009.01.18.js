// Created by iWeb 2.0.4 local-build-20090401

function createMediaStream_id4()
{return IWCreatePhotocast("http://kraiany.sytes.net/%D0%9D%D0%B5%D0%B4%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0/Zymova_kazka_2009.01.18_files/rss.xml",false,true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://kraiany.sytes.net/%D0%9D%D0%B5%D0%B4%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://kraiany.sytes.net/%D0%9D%D0%B5%D0%B4%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,0),new IWSize(229,206),27,27,0,new IWSize(12,18)),new IWPhotoFrame([IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_01.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_02.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_03.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_06.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_12.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_11.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_10.png'),IWCreateImage('Zymova_kazka_2009.01.18_files/FormalShadow_04.png')],null,2,0.400000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_2:new IWShadow({blurRadius:15,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Zymova_kazka_2009.01.18_files/Zymova_kazka_2009.01.18Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
