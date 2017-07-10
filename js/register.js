//以下为隐藏国家选项卡
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




//以下为正则验证表单
function checkAll(type,value){//需要判断的类型，比如电话，邮箱，，value是需要判断值
	switch(type){//判断类型
	
	case 'Name'://名字是否中文
		if((/^[\u4e00-\u9fa5]{0,}$/g).test(value)){
			return true; 	
		}else{
			return false;
		}
		break;
	case 'Password'://密码
		if((/^[a-zA-Z]\w{5,17}$/).test(value)){
			return true;
		}else{
			return false;
		}
		break;
		
	/*case "Password" : //密码 应该由6-15位的数字字母下划线特殊字符构成
			if((/^([@#$%^&*]|\w){6,15}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;
*/
	case 'Maydate'://日期
		if((/^\d{2}|\d{4}[-\/\.]\d{2}[-\/\.]\d{2}$/).test(value)){
			return true;	
		}else{
			return false;
		}
		break;
	case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
		if((/^1[34578]\d{9}$/).test(value)&& value!=""){   //1开头后跟345678，后跟9个数字，结尾
			return true;   
		}else{  
			return false;
		}  
		break;  
	case 'Email':  //邮箱
		if((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test(value)){   
			return true;   
		}else{  
			return false;
		}  
		break; 
	case 'Postcode'://邮编
		if((/^[1-9]\d{5}$/).test(value)){
			return true;
		}else{  
			return false;
		}  
		break;
	case 'Picture'://图片格式
		if((/^\w+\.(jpg|gif|png)$/).test(value)){
			return true;
		}else{  
			return false;
		}
	} 
}



//地址验证
$("#site").blur(function(){
	let value = $("#site").val();
	let t=checkAll("Name",value);
	if(t==true){
		$("#site").css("border","1px solid #666")
		$(".sitetishi").text("√离女神又进了一步");
		$(".sitetishi").css("color","#000");
	}else{
		$(".sitetishi").text("x枣糕，快删了重写");	
		$(".sitetishi").css("color","#f00");
		$("#site").css("border","1px solid #f00")
	}
});



//邮编验证
$("#Postcode").blur(function(){
	let value = $("#Postcode").val();
	let t=checkAll("Postcode",value);
	if(t==true){
		$("#Postcode").css("border","1px solid #666")
		$(".Postcodetishi").text("√离女神又进了一步");
		$(".Postcodetishi").css("color","#000");
	}else{
		$(".Postcodetishi").text("x枣糕，快删了重写");	
		$(".Postcodetishi").css("color","#f00");
		$("#Postcode").css("border","1px solid #f00")
	}
});



//区域验证
$("#area").blur(function(){
	let value = $("#area").val();
	let t=checkAll("Name",value);
	if(t==true){
		$("#area").css("border","1px solid #666")
		$(".areatishi").text("√离女神又进了一步");
		$(".areatishi").css("color","#000");
	}else{
		$(".areatishi").text("x枣糕，快删了重写");	
		$(".areatishi").css("color","#f00");
		$("#area").css("border","1px solid #f00")
	}
});









//城市验证
$("#city").blur(function(){
	let value = $("#city").val();
	let t=checkAll("Name",value);
	if(t==true){
		$("#city").css("border","1px solid #666")
		$(".citytishi").text("√离女神又进了一步");
		$(".citytishi").css("color","#000");
	}else{
		$(".citytishi").text("x枣糕，快删了重写");	
		$(".citytishi").css("color","#f00");
		$("#city").css("border","1px solid #f00")
	}
});





//电话验证
$("#Phone").blur(function(){
	let value = $("#Phone").val();
	let t=checkAll("Phone",value);
	if(t==true){
		$("#Phone").css("border","1px solid #666")
		$(".Phonetishi").text("√离女神又进了一步");
		$(".Phonetishi").css("color","#000");
	}else{
		$(".Phonetishi").text("x枣糕，快删了重写");	
		$(".Phonetishi").css("color","#f00");
		$("#Phone").css("border","1px solid #f00")
	}
});








//邮箱验证	
$("#youxiang").blur(function(){
	let value = $("#youxiang").val();
	let t=checkAll("Email",value);
	if(t==true){
		$("#youxiang").css("border","1px solid #666")
		$(".emailTishi").text("√离女神又进了一步");
		$(".emailTishi").css("color","#000");
	}else{
		$(".emailTishi").text("x枣糕，快删了重写");	
		$(".emailTishi").css("color","#f00");
		$("#youxiang").css("border","1px solid #f00")
	}
});
$("#youxiang01").blur(function(){
	let value = $("#youxiang").val();
	let value01 = $("#youxiang01").val();
	
	if(value==value01){
		$("#youxiang01").css("border","1px solid #666")
		$(".emailQueren").text("√离女神又进了一步");
		
	}else{
		$(".emailQueren").text("x枣糕，快删了重写");	
		$(".emailQueren").css("color","#f00");
		$("#youxiang01").css("border","1px solid #f00")
	}
});



//密码验证
$("#Password").blur(function(){
	let value = $("#Password").val();
	let t=checkAll("Password",value);
	if(t==true){
		$("#Password").css("border","1px solid #666")
		$(".Passwordtishi").text("√离女神又进了一步");
		
	}else{
		$(".Passwordtishi").text("x枣糕，快删了重写");	
		$(".Passwordtishi").css("color","#f00");
		$("#Password").css("border","1px solid #f00")
	}
});
$("#Password01").blur(function(){
	let value = $("#Password").val();
	let value01 = $("#Password01").val();
	
	if(value==value01){
		$("#Password").css("border","1px solid #666")
		$(".PasswordQueren").text("√离女神又进了一步");
		
	}else{
		$(".PasswordQueren").text("x枣糕，快删了重写");	
		$(".PasswordQueren").css("color","#f00");
		$("#Password").css("border","1px solid #f00")
	}
});

var submitBtn = document.getElementById("submit");
var tagb = document.getElementsByTagName("p");
 submitBtn.onclick = function (event) {
 	for(let i=0;i<tagb.length;i++){
 		if(tagb[i].innerHTML=="x枣糕，快删了重写" || tagb[i].innerHTML==""){
 			submitBtn.innerHTML="哪里没写？再来过";
 			return false;
 		}	
 	}
 };




























