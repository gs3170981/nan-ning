$(function(){
	var data={
		img:'img/index/logo.png',
		title:'南宁智慧乡村扶贫网',
		items:[
			{
				title:'网站首页',
				is:1,
			},{
				title:'动态·关注',
				is:0,
			},{
				title:'预定·游玩',
				is:0,
			},{
				title:'服务·指南',
				is:0,
			},{
				title:'美图·美景',
				is:0,
			}//多个“逗号”IE8识别不出Fuck
		],
		userName:''
	};
    var str = template('top', data);
    $('.top').html(str);
    
    
    data={}
    //什么奇葩的设定，还必须要传变量，否则显示不出
    str = template('mid',data);
    $('.mid').html(str);
    
    
    data={
    	src:'img/index/qrCode.png',
    	title:'官方微信',
    	copy:'Copyright©2017 www.nanning.gov.cn All Rights Reserved. 版权所有',
    	company:'主办单位：南宁旅游发展委员会 技术支持：浙江卓锐科技股份有限公司',
		items:[
			{
				list:[
					{
						title:'地图导航'
					},{
						title:'票务预定'
					},{
						title:'酒店住宿'
					},{
						title:'特色餐饮'
					}
				]
			},{
				list:[
					{
						title:'关于我们'
					},{
						title:'公司介绍'
					},{
						title:'法律声明'
					}
				]
			},{
				list:[
					{
						title:'客户服务'
					},{
						title:'常见问题'
					},{
						title:'联系我们'
					}
				]
			},{
				list:[
					{
						title:'友情链接'
					},{
						title:'阿联酋旅游局'
					},{
						title:'台湾旅游局'
					},{
						title:'澳大利亚旅游局'
					},{
						title:'日本旅游局'
					},{
						title:'新加坡旅游局'
					}
				]
			}
		]
	};
    str = template('bottom', data);
    $('.bottom').html(str);
})