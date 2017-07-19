$(function(){  //换肤
	$('#title li').click(function(){ 
		$(this).html("√").siblings().html('');
		var color = $(this).css('backgroundColor');
		$('#title,#nav,#content .top').css("backgroundColor",color);
		$('#nav .list li').css("color",color);
	})
})
$(function(){//选项卡
	$('.left4 .btn li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.left4_c li').eq($(this).index()).addClass('show').siblings().removeClass('show');
	})
})
$(function(){
	var num = 1;
	var arr = ['蓝白','绿灰','黄白']
	$('.r4 select').change(function(){
		num =  $(this).find("option:selected").text();
		var price = num*200;
		$('.r5 span').html(price);
	})
	$('.r2 .ul2 li').click(function(){
		var i = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.r2 .ul1 .li3 span').html(arr[i]);
	})
	$('.r3 li').click(function(){
		var cc = $(this).html();
		$(this).addClass('active').siblings().removeClass('active');
		$('.r3 span').html(cc);
	})
	$('.r7 img').click(function(){
		var bh = $('.r2 .ul1 .li2').html();
		var color = $('.r2 .ul1 .li3 span').html();
		var cc = $('.r3 span').html();
		var zj = $('.r5 span').html();
		alert('商品信息：'+'\n'+'单价：200元'+'\n'+bh+'\n'+'颜色：'+color+'\n'+'尺寸：'+cc+'\n'+'数量：'+num+'\n'+'总计：'+zj+'元')
	})
	var lis = document.getElementsByClassName('r6')[0].getElementsByTagName('li');
	$('.r6 li').hover(function(){		//评分
		$('.r6 li').css('background','');
		var k = $(this).index();
		for(var i=0;i<=k;i++){
			lis[i].style.background = '#B7BCB5';
		}
	},function(){
		if($('.r6 li').css('backgroundColor')=='rgb(183, 188, 181)'){
			$('.r6 li').css('background','');
		}	
	}).click(function(){
		$('.r6 li').css('background','');
		var k = $(this).index();
		for(var i=0;i<=k;i++){
			lis[i].style.background = '#26AE42';
		}		
	})
})
$(function(){ //商品放大 路径等
	var k =0;
	$('.r2 .ul2 li').click(function(){  //右边选择颜色改变图片
		var srcs;
		var src = $(this).find('img').attr("src");
		k = $(this).index();		
		var arr = ['img/blue_1_small.jpg','img/green_1_small.jpg','img/yellow_1_small.jpg'];
		$('.left1 img').attr("src",arr[k]);		
		$('.left3 img').each(function(){
			var brr = ['img/blue_','img/green_','img/yellow_'];
			var i = $(this).index()+1;
			$(this).attr("src",brr[k]+i+".jpg");
		})
		$('.left3 img').css({'border':'1px solid #BABABA'});
		if(k==0){
			srcs = src.substr(0,8);
		}else if(k==1){
			srcs = src.substr(0,9);
		}else if(k==2){
			srcs = src.substr(0,10);
		}
		$('.big img').attr("src",srcs+'_1_big.jpg')
	})
	$('.left3 img').click(function(){ //选择小图改变图片
		var srcs;
		var src = $(this).attr("src");
		if(k==0){
			srcs = src.substr(0,10);
		}else if(k==1){
			srcs = src.substr(0,11);
		}else if(k==2){
			srcs = src.substr(0,12);
		}
		$(this).css({'border':'1px solid red'}).siblings().css({'border':'1px solid #BABABA'});
		$('.left1 img').attr("src",srcs+'_small.jpg');
		$('.big img').attr("src",srcs+'_big.jpg')
	})
	var small = $('.small')[0];
	var left1 = $('.left1')[0];
	var bigimg = $('.big img')[0];
	var big = $('.big')[0];
	$('.left1').mousemove(function(e){ //放大镜
		var left1L = $('.left1').offset().left;
		var left1T = $('.left1').offset().top;
		var smallW = $('.small')[0].offsetWidth/2;
		var smallH = $('.small')[0].offsetHeight/2;
		var L = e.pageY - left1T - smallH;
		var T = e.pageX - left1L -smallW;
		 $('.small').css({			        	
            "top": L,
            "left": T
        })
		 $('.big img').css({			        	
            "top": -L*(2.67),
            "left": -T*(2.67)
       })
		if(small.offsetLeft <= 0){
			small.style.left = 0;
		}else if(small.offsetLeft >= (left1.offsetWidth - small.offsetWidth)){
			small.style.left = left1.offsetWidth - small.offsetWidth + 'px';
		}
		if(small.offsetTop <= 0){
			small.style.top = 0;
		}else if(small.offsetTop >= (left1.offsetHeight - small.offsetHeight)){
			small.style.top = left1.offsetHeight - small.offsetHeight + 'px';
		}				
		if(bigimg.offsetLeft >= 0){
			bigimg.style.left = 0;
		}else if(bigimg.offsetLeft <= -(bigimg.offsetWidth - big.offsetWidth)){
			bigimg.style.left = -(bigimg.offsetWidth - big.offsetWidth) + 'px';
		}
		if(bigimg.offsetTop >= 0){
			bigimg.style.top = 0;
		}else if(bigimg.offsetTop <= -(bigimg.offsetHeight - big.offsetHeight)){
			bigimg.style.top = -(bigimg.offsetHeight - big.offsetHeight) + 'px';
		}
	})
	$('.left1').mouseover(function(){ //放大镜显示和隐藏
		small.style.display = 'block';
		big.style.display = 'block';
	}).mouseout(function(){
		small.style.display = 'none';
		big.style.display = 'none';		
	})
})