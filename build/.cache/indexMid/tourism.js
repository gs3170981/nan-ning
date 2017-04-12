/*TMODJS:{"version":135,"md5":"c4a69bb3ad5c870589e54e6ec8a82a9a"}*/
template('indexMid/tourism',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,src=$data.src,$each=$utils.$each,items=$data.items,value=$data.value,index=$data.index,bottom=$data.bottom,$out='';$out+='<style> .mid-tourism{ margin-top: 48px; }.mid-tourism-title{ font-size: 40px; font-weight: 100; margin-bottom: 2px; }.mid-tourism-ul{ margin: 8px 0 10px; }.mid-tourism-li{ width: 380px; height: 270px; margin: 30px 28px 0 0; text-align: justify; }.mid-tourism-li-mask{ opacity:0.3; filter:alpha(opacity=30); }.mid-tourism-li-dl{ padding: 140px 0 0 28px; line-height: 35px; color: white; }.mid-tourism-li-dt{ font-size: 24px; }.mid-tourism-li-bottom{ padding: 0 17px; } </style> <div> <div class="conter mid-tourism tx-c"> <h1 class="mid-tourism-title">';
$out+=$escape(title);
$out+='</h1> <img src="';
$out+=$escape(src);
$out+='" /> <ul class="clearF mid-tourism-ul"> ';
$each(items,function(value,index){
$out+=' <li name=\'li\' class="mid-tourism-li rel left"> <dl class="abs mid-tourism-li-dl zindex2"> <dt class="mid-tourism-li-dt">';
$out+=$escape(value.title);
$out+='</dt> <dd>';
$out+=$escape(value.details);
$out+='</dd> <dd> <a href="#" class="mid-tourism-li-bottom bg-green left white">';
$out+=$escape(bottom);
$out+='</a> </dd> </dl> <span class="abs bg-hei zindex1 w_100b h_100b mid-tourism-li-mask"></span> <img class="abs" src="';
$out+=$escape(value.src);
$out+='" /> </li> ';
});
$out+=' </ul> </div> </div> <script> $(function(){ /* 图片/3==0对齐，tips：用css兼容ie8操纵数据的话很麻烦 */ pic_3(); function pic_3(){ var li=$("li[name=\'li\']"); for(var i=1;i<=li.length;i++) if(i/3%1===0) $(li[i-1]).css(\'margin-right\',\'0px\'); } }) </script>';
return new String($out);
});