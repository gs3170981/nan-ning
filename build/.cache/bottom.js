/*TMODJS:{"version":66,"md5":"dba75d307b55e0ed4ddd85b09f94d3a8"}*/
template('bottom',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,items=$data.items,value=$data.value,index=$data.index,$escape=$utils.$escape,src=$data.src,title=$data.title,copy=$data.copy,company=$data.company,$out='';$out+='<style> .bottom{ background: #171819; font-size: 12px; color: #aaaaaa; min-width: 1200px; }.bottom-hr{ border:0; background-color:#2b2c2f; height:1px; }.bottom-top-row{ padding: 35px 0 23px; }.bottom-bottom-row{ padding: 25px 0; line-height: 20px; }.bottom-top-row-ul{ padding-bottom: 17px; line-height: 16px; }.bottom-top-row-items-li{ margin-right: 25px; }.bottom-top-row-items-li:first-child{ font-size: 14px; border-left: 2px solid #00a652; padding-left: 10px; } </style> <div class="bottom"> <div class="conter"> <ul class="bottom-top-row clearF"> <li class="left"> ';
$each(items,function(value,index){
$out+=' <ul class="bottom-top-row-ul clearF"> ';
$each(value.list,function(value,index){
$out+=' <li class="bottom-top-row-items-li left"> <a href="#" class="hui">';
$out+=$escape(value.title);
$out+='</a> </li> ';
});
$out+=' </ul> ';
});
$out+=' </li> <li class="right tx-c"> <img src="';
$out+=$escape(src);
$out+='" /> <p><br />';
$out+=$escape(title);
$out+='</p> </li> </ul> </div> <hr class="bottom-hr" /> <div class="conter"> <div class="bottom-bottom-row tx-c"> <p>';
$out+=$escape(copy);
$out+='</p> <p>';
$out+=$escape(company);
$out+='</p> </div> </div> </div> <script> </script>';
return new String($out);
});