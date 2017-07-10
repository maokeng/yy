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
//以上为公用部分 小改即可

$('youxiang').keyup(function(){
             var $parent = $(this).parent();
             $parent.find("#youxiang").remove();
             //验证用户名
             
             if( $(this).is('#youxiang') ){
             		var reg = /^1[35784][0-9]{9}$/;								
                    if( reg.test(this.value)==false  ){                   	
                        var errorMsg = '请输入电话号码';
                        $parent.append('<span style="color:red;" class="formtips onError">*'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确';
                        $parent.append('<span style="color:green;" class="formtips onSuccess">*'+okMsg+'</span>');
                    }
             }

});


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
		if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟345678，后跟9个数字，结尾
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

//邮箱验证	
$("#youxiang").blur(function(){
	let value = $("#youxiang").val();
	let t=checkAll("Email",value);
	if(t==true){
		$("#youxiang").css("border","1px solid #666")
		
		$(".emailTishi").css("color","#000");
	}else{
		
		$(".emailTishi").css("color","#f00");
		$("#youxiang").css("border","1px solid #f00")
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

/*
	功能：设置cookie
	参数1：键名
	参数2：值
	参数3：过期值（天数）
	返回值：true:false
	**/	
function setCookie(key,value,time){
	if(isCookie()){
		var date=new Date();
		date.setDate(date.getDate()+time);
		document.cookie=key+"="+value+"; expires="+date.toGMTString();
		return true;
	}else{
		return false;
	}
}//key+"="+key+"="+document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();

/*
功能：获取cookie
参数1：键名
返回值：string:null:undefined
**/	
function getCookie(key){
	if(isCookie()){
		var arr=document.cookie.split("; ");
		for(var i in arr){
			var item=arr[i].split("=");
			if(item[0]==key){
				return item[1];
			}
		}
		return null;
	}else{
		return undefined;
	}
 }
/*
功能：判断浏览器是否禁用cookie
返回值：true:false
**/	
 function isCookie(){
	return navigator.cookieEnabled?true:false;
 }
 /*
功能：删除cookie
参数1：键名
返回值：true:false
**/	
function delCookie(key){
	if(isCookie()){
		var date=new Date();
		date.setDate(date.getDate()-1);
		document.cookie=key+"=1; expires="+date.toGMTString();
		return true;
	}else{
		return false;
	}	
}