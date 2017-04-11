/*TMODJS:{"version":114,"md5":"1a04cf09727e2b0007aed200ac56a2f5"}*/
template('indexMid/bar',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,bottom=$data.bottom,bg_style=$data.bg_style,src=$data.src,$out='';$out+='<style> .mid-bar{ min-width: 1200px; height: 260px; }.mid-bar-ul{ font-size: 36px; margin-top: 83px; font-family: "仿宋"; min-width: 1200px; }.mid-bar-ul-bottom{ font-size: 14px; width: 120px; line-height: 40px; font-family: "微软雅黑"; margin: 30px; margin-left: 550px; } </style> <div class="mid-bar rel"> <div class="conter"> <ul class="mid-bar-ul abs zindex2 tx-c white"> <li>';
$out+=$escape(title);
$out+='</li> <li class="clearF"> <a href="#" class="mid-bar-ul-bottom bg-green left white">';
$out+=$escape(bottom);
$out+='</a> </li> </ul> </div> <div class="w_100b h_100b zindex1 abs" style="';
$out+=$escape(bg_style);
$out+='"></div> <div class="w_100b h_100b abs" style="background:url(';
$out+=$escape(src);
$out+=') no-repeat center center;" /> </div> <script> </script>';
return new String($out);
});