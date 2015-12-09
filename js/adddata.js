// JavaScript Document
//动画标签
//str+="<div class='wow bounceInLeft animated' data-wow-delay='0.4s' style='visibility: visible; -webkit-animation-delay: 0.4s;'>";
//str+="</div>";
//添加图片及动画
function UrlAnalytical(){
	var ty=getParameterByName("ty");
	var name=getParameterByName("name");
	if(ty=="jd"){
		AddImg(name);
	}else if(ty=="jsy"){
		Addjsy();
	}else if(ty=="xm"){
		Addxlxm(name);
	}else if(ty=="hdlc"){
		addTimeLine();
	}else{
		$('#sy').show();
	}

	//if()
}
function AddImg(data) {
	var img = new Array();
	var title = new Array();
	var content = new Array();
	var ttc="";
	if (data == 'qz') {
		ttc="&nbsp;&nbsp;&nbsp;泉州位于什么什么";
		title[0] = "名称";
		content[0] = "描述";
		img[0] = "images/psb.jpg";
		title[1] = "名称";
		content[1] = "描述";
		img[1] = "images/psb (1).jpg";
		title[2] = "名称";
		content[2] = "描述";
		img[2] = "images/psb (2).jpg";
		title[3] = "名称";
		content[3] = "描述";
		img[3] = "images/psb (3).jpg";
		title[4] = "名称";
		content[4] = "描述";
	}else if(data == 'fz'){
		ttc="&nbsp;&nbsp;&nbsp;福州位于什么什么";
		title[0] = "名称";
		content[0] = "描述";
		img[0] = "images/psb (4).jpg";
	}else if(data == 'xm'){
		ttc="&nbsp;&nbsp;&nbsp;厦门位于什么什么";
		title[0] = "名称";
		content[0] = "描述";
		img[0] = "images/psb (5).jpg";
	}

	var str="<div class=' pd5 centercontent1190 fl' id='img_div'>";
	for(var i=0;i<img.length;i++){
		str+=AddAnimation(i);
		str+="<a href='"+img[i]+"' class='img'>";
        str+="<div class='mg5 wh400x400 fl col-md-4 music-grids'>";
        str+="<img src='"+img[i]+"' class='wh400x400 img-responsive'>";
        str+="<div class='fltextbox'>"
        str+="<h4>"+title[i]+"</h4>"
        str+="<p>"+content[i]+"</p>"
        str+="</div>"
        str+="</div>"
		str+="</a>"
		str+="</div>";
	}
	str+="<div class='mg5 centercontent1190 fl'><h3>"+ttc+"</h3></div>";
	str+="</div>";
	var content = document.getElementById("content");
	content.innerHTML=str;
	AddImgPlay();
	//添加时间轴
	//addTimeLine();
}
function AddAnimation(data){
	if(data%4==0)
		return "<div class='wow bounceInLeft animated' data-wow-delay='0.4s' style='visibility: visible; -webkit-animation-delay: 0.4s;'>";
	else if(data%4==3)
		return "<div class='wow bounceInRight animated' data-wow-delay='0.4s' style='visibility: visible; -webkit-animation-delay: 0.4s;'>";
	else
		return "<div class='wow bounceIn animated' data-wow-delay='0.4s' style='visibility: visible; -webkit-animation-delay: 0.4s;'>";
}
//添加
function Addjsy(){
	//onMouseOut='this.start()' onMouseOver='this.stop()'
	var str="<marquee class='ct' id='affiche' align='left' behavior='scroll' direction='up' height='600' width='1150'" +
		" hspace='50' vspace='1' loop='-1' scrollamount='10' scrolldelay='100' onstart='this.firstChild.innerHTML+=this.firstChild.innerHTML;' contenteditable='true'>" +
		"<div class='title'>" +
		"<h2>拓展是石</h2>" +
		"<h2>可以敲出星星之火</h2>" +
		"<h2>拓展是火</h2>" +
		"<h2>可以点燃希望之灯</h2>" +
		"<h2>拓展是灯</h2>"+
		"<h2>可以点燃希望之灯</h2>"+
		"<h2>可以照亮前进之路</h2>"+
		"<h2>拓展是路</h2>"+
		"<h2>伴随您走向成功</h2>"+
		"</div></marquee>";
	var content = document.getElementById("content");
	content.innerHTML=str;
}
//训练项目
function Addxlxm(data) {
	var img = new Array();
	var title = new Array();
	var content = new Array();
	var tit="";
	var titcontent="";
	if (data == 'cd') {
		tit="场地训练";
		titcontent="在专门的场地上，借助于训练设施，开展各种团队课程及个人挑战。";
		title[0] = "高空跳桥";
		content[0] = "个人挑战项目。在安全保护情况下，沿着扶梯爬上8米高的断桥，从断桥一侧跳到另一侧然后再跳回。";
		img[0] = "images/gktq.png";
		title[1] = "泉州";
		content[1] = "    泉州";
		img[1] = "images/psb (6).jpg";
		title[2] = "泉州";
		content[2] = "    泉州";
		img[2] = "images/psb (7).jpg";
		title[3] = "泉州";
		content[3] = "    泉州";
		img[3] = "images/psb (8).jpg";
		title[4] = "泉州";
		content[4] = "    泉州";
		img[4] = "images/psb (9).jpg";
		title[5] = "泉州";
		content[5] = "    泉州";
		img[5] = "images/psb (10).jpg";
	}else if(data == 'yw'){
		tit="野外训练";
		titcontent="远离都市的喧嚣，感受自然的风景，体验队友的互助，熔炼团队的凝聚。";
		title[0] = "高空跳桥";
		content[0] = "个人挑战项目。在安全保护情况下，沿着扶梯爬上8米高的断桥，从断桥一侧跳到另一侧然后再跳回。";
		img[0] = "images/gktq.png";
	}else if(data == 'sn'){
		tit="室内训练";
		titcontent="拓展项目的分支，需要在相对封闭性的会议室内完成的独特性项目。";
		title[0] = "高空跳桥";
		content[0] = "个人挑战项目。在安全保护情况下，沿着扶梯爬上8米高的断桥，从断桥一侧跳到另一侧然后再跳回。";
		img[0] = "images/gktq.png";
	}

	var str="<div class=' pd5 centercontent1190 fl' id='img_div'>";
	str+="<div class='mg5 centercontent1190 fl tc'><h1 style='color: #0484cd;'>"+tit+"</h1><h3 >"+titcontent+"</h3></div>";
	for(var i=0;i<img.length;i++){
		str+=AddAnimation(i);
		str+="<a href='"+img[i]+"' class='img'>";
		str+="<div class='mg5 wh400x400 fl col-md-4 music-grids'>";
		str+="<img src='"+img[i]+"' class='wh400x400 img-responsive'>";
		str+="<div class='fltextbox'>"
		str+="<h4>"+title[i]+"</h4>"
		str+="<p>"+content[i]+"</p>"
		str+="</div>"
		str+="</div>"
		str+="</a>"
		str+="</div>";
	}
	str+="</div>";
	var content = document.getElementById("content");
	content.innerHTML=str;
	AddImgPlay();
}
//添加视频
function AddVideo()
{
	var vdo=new Array();
	vdo[0]="images/m1.jpg";
	vdo[1]="images/m2.jpg";
	vdo[2]="images/m3.jpg";
	vdo[3]="images/m4.jpg";
	vdo[4]="images/m5.jpg";
	vdo[5]="images/m6.jpg";
	var vdo_div = document.getElementById("vdo_div");
	vdo_div.innerHTML="";
	for(var i=0;i<vdo.length;i++){
		var str="";
		str+=AddAnimation(i);
		str+="<div class='pd5 wh400x400 fl work'>";
        str+="<a href='#small-dialog5' onclick='addiframe(\"http://tool.oschina.net/codeformat/\")'  class='video'>";
        str+="<div class='textbox wh400x400'>";
        str+="<img src='img/play.png' class='img-responsive' alt='/'>";
        str+="</div>";
        str+="<img src='"+vdo[i]+"' class='wh400x400 '>";
        str+="</a>";
        str+="</div>";
		vdo_div.innerHTML+=str;
	}
	AddVideoPlay();
}
function addiframe(data) 
{ 
	document.getElementById("showvideo").src=data;
}
//添加时间轴
function addTimeLine() {
	var time=new Array();
	var title=new Array();
	var content=new Array();
	time[0]="08:00";
	title[0]="前往目的地聚拢小镇";
	content[0]="由带队教练进行带领。";
	time[1]="09:00";
	title[1]="更衣上阵";
	content[1]="统一着装，建立训练气氛。";
	time[2]="09:40";
	title[2]="项目一、破冰项目，团队组建";
	content[2]="体验之一：初步形成热烈的团队氛围，为拓展培训做好心理铺垫，创造一个积极、学习与体验的心态，学员最快时间收心，融入团队.";
	time[3]="10:20";
	title[3]="项目二、鼓动人心";
	content[3]="体验之二：1、合作、合作、再合作2、快、再快、再再快3、团队中的角色定位与工作分配.";
	time[4]="11:00";
	title[4]="项目三、齐心协力";
	content[4]="体验之三：了解协作的一致性和指挥方式的作用，理解个人、小团队、大团队的相互关系.";
	time[5]="12:00";
	title[5]="午餐及休息";
	content[5]="每桌10人，每桌350元";
	time[6]="13:30";
	title[6]="项目四、火星撞地球";
	content[6]="体验之四：饭后热身项目，为下午活动做准备.";
	time[7]="14:00";
	title[7]="项目五、巧移圣塔";
	content[7]="体验之五：增加学员之间的交流，提高学员沟通的能力，让学员更加明白沟通在团队合作中的重要程度.";
	time[8]="15:00";
	title[8]="项目六、勇闯索桥、水上飞跃吊环";
	content[8]="体验之六：体会准确信息沟通的重要性，体会人力资源合理分配的重要性. ";
	time[9]="16:00";
	title[9]="项目七、浮桥特工，限时铁索穿越，童年网事";
	content[9]="体验之七：创新与风险意识，运用合理的判断，及时进行决策. ";
	time[10]="17:00";
	title[10]="项目八、总结分享";
	content[10]="体验之八：团队分享一天总结，合影留恋，愉快地返回.";
	var vdo_div = document.getElementById("content");
	vdo_div.innerHTML="";
	for(var i=0;i<time.length;i++){
		var str="";
		str+="<div class='main'>";
		str+="<ul class='cbp_tmtimeline'>";
		str+="<li>";
		str+="<time class='cbp_tmtime'>";
		str+="<span>"+time[i]+"</span></time>";
		str+="<div class='cbp_tmicon cbp_tmicon-phone'>";
		str+="</div>";
		str+="<div class='cbp_tmlabel'>";
		str+="<h2>"+title[i]+"</h2>";
		str+="<p>"+content[i]+"</p>";
		str+="</div>";
		str+="</li>";
		str+="</ul>";
		str+="</div>";
		vdo_div.innerHTML+=str;
	}
}
