window.onload=function(){
	// 网址导航选项卡
	function nb(name,box,gd){
		let span=document.getElementsByClassName(name)[0];
		// console.log(span);
		let wzdhbox=document.getElementsByClassName(box)[0];
		// console.log(wzdhbox);

		span.onmouseenter=function(){
			wzdhbox.style.height=gd;
		}
		span.onmouseleave=function(){
			wzdhbox.style.height="0";
		}
	}
	nb("wzdh","wzdhbox","242px");
	nb("sjrz","sjrzbox","124px");
	nb("khfw","khfwbox","124px");
	nb("wddd","wdddbox","127px");
	nb("wdyg","wdygbox","163px");
	nb("gwc","gwcbox","402px");
	nb("sjsn","sjsnbox","222px");

	// 测导航选项卡
	let lis=document.getElementsByClassName("li1");
	console.log(lis);
	let cdhbox=document.getElementsByClassName("cdhbox");
	console.log(cdhbox);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
			cdhbox[j].style.display="none";	
			}
			cdhbox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			cdhbox[i].style.display="none";
		}	
	}
	
	// 轮播图
	let lis1=document.querySelectorAll(".lbz2 li");
	console.log(lis1);
	let lbds=document.querySelectorAll(".hh a");
	console.log(lbds);
	let banner=document.querySelector(".lbz");
	let imgleft=document.querySelector(".fxz");
	let imgright=document.querySelector(".fxy");
	console.log(imgright);
	let index=0;
	let t=setInterval(move,2000);
	// 初始化
	lis1[0].style.zIndex=10;
	lbds[0].className="hot";

	function move(){
		index++;
		if(index==lis1.length){
			index=0;
		}
		lis1.forEach(function(element,index,obj){
			element.style.zIndex=5;
		})
		lbds.forEach(function(element,index,obj){
			element.className="";
		})
		lis1[index].style.zIndex=10;
		lbds[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lis1.length-1;
		}
		lis1.forEach(function(element,index,obj){
			element.style.zIndex=5;
		})
		lbds.forEach(function(element,index,obj){
			element.className="";
		})
		lis1[index].style.zIndex=10;
		lbds[index].className="hot";
	}
	// 移入移出
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	// 点击左右
	imgleft.onclick=function(){
		movel();
	}
	imgright.onclick=function(){
		move();
	}
	// 小点
	for(let i=0;i<lbds.length;i++){
		lbds[i].onclick=function(){
			lis1.forEach(function(element){
				element.style.zIndex=5;
			})
			lbds.forEach(function(element){
				element.className="";
			})
			lis1[i].style.zIndex=10;
			lbds[i].className="hot";
			index=i;
		}
	}
	// 滚动长条
	let lh=innerHeight;
	console.log(lh);
	let changtiao=document.querySelector(".changtiao");
	console.log(changtiao);
	window.onscroll=function(){
		let gd=document.body.scrollTop||document.documentElement.scrollTop;
		if(gd>500){
			changtiao.style.height="100px";
		}
		else{
			changtiao.style.height="0";
		}
	}
}