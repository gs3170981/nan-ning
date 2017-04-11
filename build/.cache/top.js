/*TMODJS:{"version":233,"md5":"fe6415abe4759ee7341604e450b6b1e3"}*/
template('top',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,img=$data.img,title=$data.title,$each=$utils.$each,items=$data.items,value=$data.value,index=$data.index,userName=$data.userName,$out='';$out+='<style> .nav{ background: white; min-width: 1200px; }.nav-row{ padding: 32px 0; }.nav-row-right{ line-height: 56px; margin-left: 16px; font-size: 12px; }.nav-row-title{ font-size: 28px; }.nav-row-items{ margin-left: 82px; font-size: 14px; }.nav-row-items-li{ padding: 0 20px; height: 58px; }.nav-row-items-li-a:hover{ color: #00a652; border-bottom: 2px solid #00a652; }.nav-row-right-span{ padding: 0 20px; }.nav-row-right-i{ padding-right: 8px; font-size: 18px; line-height: 57.5px; }.nav-row-right-smail{ padding-right: 5px; } </style> <div class="nav"> <div class="conter"> <dl class="nav-row"> <dt class="left"> <img class="nav-row-img" src=\'';
$out+=$escape(img);
$out+='\' /> </dt> <dd class="nav-row-right clearF"> <h1 class="nav-row-title left">';
$out+=$escape(title);
$out+='</h1> <ul class="left nav-row-items"> ';
$each(items,function(value,index){
$out+=' <li class="tx-c left nav-row-items-li"><a class="left black nav-row-items-li-a" href="#">';
$out+=$escape(value.title);
$out+='</a></li> ';
});
$out+=' </ul> <ul class="black1 clearF"> ';
if(!userName){
$out+=' <li class="right"> <i class="fa fa-user nav-row-right-i left"></i> <a class="black1" href="#">登录</a> <span class="nav-row-right-span">|</span> <small class="nav-row-right-smail">没有账号？</small> <a class="green" href="#">请注册</a> </li> ';
}else{
$out+=' <li class="right">  </li> ';
}
$out+=' </ul> </dd> </dl> </div> </div> <script> </script>';
return new String($out);
});