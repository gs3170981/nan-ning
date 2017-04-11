/*TMODJS:{"version":2,"md5":"5783fd9a7cf8606c96608a0573137131"}*/
template('tpl/top',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,img=$data.img,title=$data.title,$each=$utils.$each,items=$data.items,value=$data.value,index=$data.index,$out='';$out+='<link href="../JQ-智慧乡村-Demo/css/top/Mycss.css" rel="stylesheet" type="text/css" /> <div class="main"> <div class="conter"> <dl class="row ceshi clearF"> <dt class="left"> <img class="row-img" src=';
$out+=$escape(img);
$out+=' /> </dt> <dd class="row-right left"> <h1 class="row-title left">';
$out+=$escape(title);
$out+='</h1> <ul class="left row-items"> ';
$each(items,function(value,index){
$out+=' <li class="tx-c left row-items-li ceshi"><a class="left black row-items-li-a" href="#">';
$out+=$escape(value.title);
$out+='</a></li> ';
});
$out+=' </ul> </dd> </dl> </div> </div> <script src="../JQ-智慧乡村-Demo/js/top/Myjs.js"></script>';
return new String($out);
});