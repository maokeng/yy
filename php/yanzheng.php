<?php
	//1、接收用户的输入
	$email = $_GET['email'];
	
	//2、在数据库中查询
	//1)、连接数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败".mysql_error());
	}else{
		//2)、执行SQL语句
		mysql_select_db("luojie",$con);
		$str="select * from kehu where email='".$email."'";
		$result = mysql_query($str,$con); 
		$rowCount = mysql_num_rows($result);
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应根据查询结果给前端响应对应的（1：用户名已经被使用，0：用户名没有注册）
		echo $rowCount;
				
	}
	
?>