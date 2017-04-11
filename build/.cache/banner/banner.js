/*TMODJS:{"version":396,"md5":"c49038687c6f8b0a3bdb0a54d17c05e6"}*/
template('banner/banner',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,h2=$data.h2,h1=$data.h1,smail_left=$data.smail_left,src=$data.src,smail_right=$data.smail_right,$each=$utils.$each,items=$data.items,value=$data.value,index=$data.index,bg_style=$data.bg_style,imgList=$data.imgList,$out='';$out+='<style> .banner{ height: 800px; }.banner-img,.banner-ul{ min-width: 1200px; }.banner-ul{ color: white; font-family: "仿宋"; }.banner-h2{ margin-top: 261px; font-size: 40px; }.banner-h1{ margin-top: 35px; line-height: 107px; font-size: 54px; font-family: "黑体"; border-top: 1px solid white; border-bottom: 1px solid white; width: 1000px; margin-left: 100px; }.banner-smail{ font-size: 29px; margin-top: 38px; width: 1000px; margin-left: 130px; line-height: 48px; }.banner-smail-img{ padding: 0 30px; width: 52px; }.banner-items{ margin-top: 122px; font-family: "微软雅黑"; margin-left: 350px; }.banner-items-li{ margin-left: 48px; }.banner-items-li-title{ margin-top: 10px; }.banner-items-li-img{ border: none; } </style> <div class="banner rel"> <div class="conter"> <ul class="banner-ul tx-c abs zindex2"> <li><h2 class="banner-h2">';
$out+=$escape(h2);
$out+='</h2></li> <li><h1 class="banner-h1 tx-c">';
$out+=$escape(h1);
$out+='</h1></li> <li class="banner-smail clearF"> <small class="left banner-smail-left">';
$out+=$escape(smail_left);
$out+='</small> <img class="left banner-smail-img " src="';
$out+=$escape(src);
$out+='"></img> <small class="left banner-smail-right">';
$out+=$escape(smail_right);
$out+='</small> </li> <li> <ul class="clearF banner-items rel"> ';
$each(items,function(value,index){
$out+=' <li class="left banner-items-li rel"> <a href="#"> <img class="banner-items-li-img" src="';
$out+=$escape(value.src);
$out+='" /> </a> <p class="banner-items-li-title">';
$out+=$escape(value.title);
$out+='</p> </li> ';
});
$out+=' </ul> </li> </ul> </div> <div class="abs h_100b w_100b zindex1" style="';
$out+=$escape(bg_style);
$out+='"></div> ';
$each(imgList,function(value,index){
$out+=' <div name=\'img\' class="abs w_100b h_100b banner-img" style="background:url(';
$out+=$escape(value.src);
$out+=') no-repeat center center;"></div> ';
});
$out+=' </div> <script> $(function(){ imgChange(); $(\'.banner-items-li-img\').hover(function(e){ var img=$(this).attr(\'src\'); switch(e.type){ case \'mouseenter\': img=img.substring(0,img.lastIndexOf(\'.png\'))+\'_org.png\'; break; default: img=img.substring(0,img.lastIndexOf(\'_org\'))+\'.png\'; } $(this).attr(\'src\',img); }); function imgChange(){ var img=$("div[name=\'img\']"); var i=0; setInterval(function(){ if(i==img.length)i=0; $(img).animate({ \'opacity\':0.2, },700); $(img[i]).animate({ \'opacity\':1, },\'slow\'); i++; },5000) } }) </script>';
return new String($out);
});