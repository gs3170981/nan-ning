/*TMODJS:{"version":1,"md5":"f331dc6d3083557e21e5a1b6aaccc01f"}*/
template('tpl/bottom',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$out='';$out+='<div> <h3>';
$out+=$escape(title);
$out+='</h3> </div>';
return new String($out);
});