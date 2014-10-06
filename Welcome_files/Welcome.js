// Created by iWeb 2.0.4 local-build-20090401

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),shadow_4:new IWShadow({blurRadius:15,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(1.7143,1.0301),color:'#000000',opacity:0.600000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/Playtime_waves_01.png'),IWCreateImage('Welcome_files/Playtime_waves_02.png'),IWCreateImage('Welcome_files/Playtime_waves_03.png'),IWCreateImage('Welcome_files/Playtime_waves_06.jpg'),IWCreateImage('Welcome_files/Playtime_waves_09.jpg'),IWCreateImage('Welcome_files/Playtime_waves_08.jpg'),IWCreateImage('Welcome_files/Playtime_waves_07.jpg'),IWCreateImage('Welcome_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000),shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(1.8541,5.7063),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
