//以下为隐藏国家选项卡
$(function(){
	var f;
$("#guojia").click(function(){
	 f = $("#lguojia").css("display")
	if(f=="block"){
		$("#lguojia").css("display","none");
	     $("#lkefu").css("display","none");
	}else{
		$("#lguojia").css("display","block");
	    $("#lkefu").css("display","none");
	    $("#xinyuan").css("display","none");
	    $("#cha").css("display","none");
	    $("#shopping").css("display","none");
	    $("#cha_img01").attr("src","img/t1.png");
		$("#cha_img02").attr("src","img/t2.png");
		$("#cha_img03").attr("src","img/t3.png");
	}
});
//以下为隐藏客服选项卡
$("#kefu").click(function(){
	 f = $("#lkefu").css("display")
	if(f=="block"){
		$("#lguojia").css("display","none");
	     $("#lkefu").css("display","none");
	}else{
		$("#lkefu").css("display","block");
		$("#lguojia").css("display","none");
	    $("#xinyuan").css("display","none");
	    $("#cha").css("display","none");
	    $("#shopping").css("display","none");
	    $("#cha_img01").attr("src","img/t1.png");
		$("#cha_img02").attr("src","img/t2.png");
		$("#cha_img03").attr("src","img/t3.png");
	}
	
});

//以下为隐藏查找选项卡
$("#chazhao").click(function(){
	 f = $("#cha").css("display")
	if(f=="block"){
		$("#xinyuan").css("display","none");
	    $("#cha").css("display","none");
	    $("#shopping").css("display","none");
	    $("#cha_img01").attr("src","img/t1.png");
	}else{
		$("#xinyuan").css("display","none");
	    $("#cha").css("display","block");
	    $("#shopping").css("display","none");
	    $("#lguojia").css("display","none");
	    $("#lkefu").css("display","none");
		$("#cha_img01").attr("src","img/t18.png");
		$("#cha_img02").attr("src","img/t2.png");
		$("#cha_img03").attr("src","img/t3.png");
	}	
});
//以下为隐藏心愿选项卡
$("#xinyuanbtn").click(function(){
	 f = $("#xinyuan").css("display")
	if(f=="block"){
		$("#cha").css("display","none");
	    $("#xinyuan").css("display","none");
	    $("#cha_img02").attr("src","img/t2.png");
	    
	}else{
		$("#xinyuan").css("display","block");
	    $("#shopping").css("display","none");
		$("#cha").css("display","none");
		$("#lguojia").css("display","none");
	    $("#lkefu").css("display","none");
		$("#cha_img03").attr("src","img/t3.png");
		$("#cha_img02").attr("src","img/t18.png");
		$("#cha_img01").attr("src","img/t1.png");
	}	
});

//以下为隐藏购物车选项卡
$("#gouwuche").click(function(){
	 f = $("#shopping").css("display")
	if(f=="block"){
		$("#cha").css("display","none");
	    $("#xinyuan").css("display","none");
	    $("#shopping").css("display","none");
	    $("#cha_img03").attr("src","img/t3.png");
	    
	}else{
		$("#shopping").css("display","block");
		$("#xinyuan").css("display","none");
		$("#cha").css("display","none");
		$("#lguojia").css("display","none");
	    $("#lkefu").css("display","none");
		$("#cha_img03").attr("src","img/t18.png");
		$("#cha_img02").attr("src","img/t2.png");
		$("#cha_img01").attr("src","img/t1.png");
	}	
});


//顶部吸附效果
$(window).scroll(function(){
var juli=$(document).scrollTop();
	if(juli>131){
		//吸附
		$('.xifuxiaoguo').addClass('xifu');
		//logo显示
		$('.te').css("display","block");
		//右侧图标显示
		$('#texi').addClass('te01');
		$('#cha').css({"top":"3.1rem",
						"left":"-70.5rem"});
		$("#cha_img03").attr("src","img/t22.png");
		$("#cha_img02").attr("src","img/t21.png");
		$("#cha_img01").attr("src","img/t17.png");
	}else{
		//移除吸附
		$('.xifuxiaoguo').removeClass('xifu');
		//logo隐藏
		$('.te').css("display","none");
		//右侧图标影藏
		$('#texi').removeClass('te01');
		$('#cha').css({	"top":"4rem",
						"left":"0rem",
						"width":"79rem",
						"height":"8rem",
						});
		$("#cha_img03").attr("src","img/t3.png");
		$("#cha_img02").attr("src","img/t2.png");
		$("#cha_img01").attr("src","img/t1.png");
	}
});




$("#h_a1").mouseover(function(){
    $("#none").css("display","block");
    $("#h_a1").css({"color":"#a91e34",
    				"border-bottom":"2px solid #a91e34"
    				});
});
$("#h_a1").mouseout(function(){
   $("#none").css("display","none");
   $("#h_a1").css({"color":"#000",
    				"border-bottom":"0px"
    				});
});
$("#none").mouseover(function(){
  $("#none").css("display","block");
  $("#h_a1").css({"color":"#a91e34",
    				"border-bottom":"2px solid #a91e34"
    			});
});
$("#none").mouseout(function(){
  $("#none").css("display","none");
  $("#h_a1").css({"color":"#000",
    				"border-bottom":"0px"
    				});
});

//以上为显示隐藏
$("#techeng").mouseover(function(){
	$("#dtu").attr("src","img/FW16.jpg");	
});
$("#xiezi").mouseover(function(){
	$("#dtu").attr("src","img/bloc_3_bridal.jpg");	
});
$("#baobao").mouseover(function(){
	$("#dtu").attr("src","img/bloc5_bags.jpg");	
});
$("#peijian").mouseover(function(){
	$("#dtu").attr("src","img/accessories.jpg");	
});
//以上为0改变图片

$("#h_a2").mouseover(function(){
    $("#none01").css("display","block");
    $("#h_a2").css({"color":"#a91e34",
    				"border-bottom":"2px solid #a91e34"
    				});
});
$("#h_a2").mouseout(function(){
   $("#none01").css("display","none");
   $("#h_a2").css({"color":"#000",
    				"border-bottom":"0px"
    				});
});
$("#none01").mouseover(function(){
  $("#none01").css("display","block");
  $("#h_a2").css({"color":"#a91e34",
    				"border-bottom":"2px solid #a91e34"
    			});
});
$("#none01").mouseout(function(){
  $("#none01").css("display","none");
  $("#h_a2").css({"color":"#000",
    				"border-bottom":"0px"
    		});				
});

//以上为01显示隐藏

$("#l01").mouseover(function(){
	$("#dtu01").attr("src","img/FW16.jpg");	
});
$("#l02").mouseover(function(){
	$("#dtu01").attr("src","img/SS17.jpg");	
});
$("#l03").mouseover(function(){
	$("#dtu01").attr("src","img/collection_menu_bridal.jpg");	
});
$("#l04").mouseover(function(){
	$("#dtu01").attr("src","img/shoes.jpg");	
});

//以上为01跟换图片


var goods = window.localStorage? localStorage.getItem("goodsId"): Cookie.read("goodsId");	
	var	 obj;
	var	 str="";
	var goodsId,beiyong2,beiyong3,beiyong4,beiyong5,beiyong6,beiyong7,beiyong8,beiyong9,beiyong10,beiyong11,goodsName,goodsPrice;
	$.ajax({
		url:"php/productDetails.php",
		async:false,
		type:"get",
		data:{goodsId:goods},
		success:function(data){
			 obj=eval("("+data+")");
			 goodsId=obj.goodsId;
			 beiyong2=obj.beiyong2;
			 beiyong3=obj.beiyong3;
			 beiyong4=obj.beiyong4;
			 beiyong5=obj.beiyong5;
			 beiyong6=obj.beiyong6;
			 beiyong7=obj.beiyong7;
			 beiyong8=obj.beiyong8;
			 beiyong9=obj.beiyong9;
			 beiyong10=obj.beiyong10;
			 beiyong11=obj.beiyong11;
 			 goodsName=obj.goodsName;
 			 goodsPrice=obj.goodsPrice;
			str = "<li id='yangshi01'><img src='img/"+beiyong2+".jpg' /></li><li id='yangshi02'><img src='img/"+beiyong3+".jpg' /></li><li id='yangshi03'><img src='img/"+beiyong4+".jpg' /></li><li id='yangshi04'><img src='img/"+beiyong5+".jpg' /></li><li id='yangshi05'><img src='img/"+beiyong6+".jpg' /></li>"
			$("#ul").append(str);
			var strr = "<img src='img/"+beiyong7+".jpg' id='xianshi'/>"
			$(".c_l_right").append(strr);
			$("#shangpingming").append(goodsName);
			$("#jiage").append(goodsPrice);
		}
	});


//setTimeout($("#yangshi01").css("opacity","0.5"),1000);
$("#yangshi01").css("opacity","0.5");
$("#yangshi01").click(function(){
	$("#xianshi").attr('src',"img/"+beiyong7+".jpg");
	$("#yangshi01").css("opacity","0.5");
	$("#yangshi02").css("opacity","1");
	$("#yangshi03").css("opacity","1");
	$("#yangshi04").css("opacity","1");
	$("#yangshi05").css("opacity","1");
});
$("#yangshi02").click(function(){
	$("#xianshi").attr('src',"img/"+beiyong8+".jpg");
	$("#yangshi01").css("opacity","1");
	$("#yangshi02").css("opacity","0.5");
	$("#yangshi03").css("opacity","1");
	$("#yangshi04").css("opacity","1");
	$("#yangshi05").css("opacity","1");	
});
$("#yangshi03").click(function(){
	$("#xianshi").attr('src',"img/"+beiyong9+".jpg");
	$("#yangshi01").css("opacity","1");
	$("#yangshi02").css("opacity","1");
	$("#yangshi03").css("opacity","0.5");
	$("#yangshi04").css("opacity","1");
	$("#yangshi05").css("opacity","1");
});
$("#yangshi04").click(function(){
	$("#xianshi").attr('src',"img/"+beiyong10+".jpg");
	$("#yangshi01").css("opacity","1");
	$("#yangshi02").css("opacity","1");
	$("#yangshi03").css("opacity","1");
	$("#yangshi04").css("opacity","0.5");
	$("#yangshi05").css("opacity","1");
	
});
$("#yangshi05").click(function(){
	$("#xianshi").attr('src',"img/"+beiyong11+".jpg");
	$("#yangshi01").css("opacity","1");
	$("#yangshi02").css("opacity","1");
	$("#yangshi03").css("opacity","1");
	$("#yangshi04").css("opacity","1");
	$("#yangshi05").css("opacity","0.5");
	
});










	
	
})
