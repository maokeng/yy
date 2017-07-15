<?php
	//字符编码使用utf-8；
	header("Content-type: text/html; charset=utf-8");

	//1、接收客户端的输入的数据
	$chengwei = $_POST['chengwei'];//$_POST:针对post请求方法。
	$ming = $_POST['ming'];
	$xing = $_POST['xing'];
	$ri = $_POST['ri'];
	$yue = $_POST['yue'];
	$nian = $_POST['nian'];
	$guojia = $_POST['guojia'];
	$site = $_POST['site'];
	$postcode = $_POST['postcode'];
	$area = $_POST['area'];
	$city = $_POST['city'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	

	//2、保存到数据库$xing
	//1)、连接数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql.error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("luojie",$con);
		$str="insert into kehu1(chengwei,ming,xing,ri,yue,nian,guojia,site,postcode,area,city,phone,email,password) values('".$chengwei."','".$ming."','".$xing."','".$ri."','".$yue."','".$nian."','".$guojia."','".$site."','".$postcode."','".$area."','".$city."','".$phone."','".$email."','".$password."')";
		//echo $str;
		

		$count = mysql_query($str,$con); 
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应
		if($count==1){
			//echo "注册成功";
			echo '<script>window.location.href="Login.html"</script>';
			
		}else{
			echo "注册失败";
			//echo '<script">location.href="Login.html";</script>';
			
		}	
	}	
?>