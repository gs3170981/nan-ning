/*TMODJS:{"version":80,"md5":"891fd735dc128961e851bf3e32308628"}*/
template('mid',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},data=$data.data,$out='';$out+=' <div> <!--';
include('./banner/banner',data);
$out+='这样的方法传不进当前的值--> <div class="banner"></div> <div class="banner"></div> <div class="banner"></div> <div class="banner"></div> <div class="banner"></div> <div class="banner"></div> <div class="banner"></div> </div> <script> var data={ h2:\'一座历史悠久的边陲古镇\', h1:\'满城皆绿 四季常青 有 “绿城” 的美荣\', smail_left:\'一年一度的南宁国际民歌艺术节享誉中外\', smail_right:\'让南宁成为了“天下民歌眷恋的地方”\', src:\'./img/index/logo_white.png\', bg_style:\'background: url(../../JQ-智慧乡村-Demo/img/index/bg_black.png);opacity: 0.3;min-width:1200px;\', items:[ { title:\'景区简介\', src:\'../../JQ-智慧乡村-Demo/img/index/introduce.png\' },{ title:\'美图欣赏\', src:\'../../JQ-智慧乡村-Demo/img/index/appreciate.png\' },{ title:\'旅游预订\', src:\'../../JQ-智慧乡村-Demo/img/index/personal.png\' },{ title:\'个人中心\', src:\'../../JQ-智慧乡村-Demo/img/index/introduce.png\' } ], imgList:[ { src:\'../../JQ-智慧乡村-Demo/img/index/banner01.jpg\' },{ src:\'../../JQ-智慧乡村-Demo/img/index/banner01.jpg\' },{ src:\'../../JQ-智慧乡村-Demo/img/index/banner01.jpg\' } ] }; var str = template(\'./banner/banner\', data); $(\'.banner\').html(str); </script>';
return new String($out);
});