/*TMODJS:{"version":1,"md5":"45342637126277d593283e466382fda5"}*/
template('banner/mid',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$out='';$out+='<div> <h3>';
$out+=$escape(title);
$out+='</h3> </div>';
return new String($out);
});