<?php
//路由：根据URL的不同导航到不痛的页面
//var_dump($_SERVER);
//判断数组中是否包含指定属性 array_key_exists('PATH_INFO',$_SERVER)
/*
规定好url格式，从而方便页面的导航
/main/index
/main/login
/tercher/list
 */
$dir='main';//默认文件夹名称
$filename='index';//默认文件名称
//判断路径是否存在
if(array_key_exists('PATH_INFO',$_SERVER)){
	//判断路径是否存在
	$path=$_SERVER['PATH_INFO'];
	//  /main/index
	//  去掉第一个斜杠
	$str=substr($path,1);
	//按照斜杠分割目录名称和文件夹名称
	$arr=explode('/',$str);
	if(count($arr)==2){
		//覆盖默认的目录名称
		$dir=$arr[0];
		//覆盖默认文件名称
		$filename=$arr[1];
	}else{
		//跳转到登陆页面
		$filename='login';
	}
}
  include('./views/'.$dir.'/'.$filename.'.html');//.$path. 点是字符串拼接


 //在当前页面嵌入另外一个页面
 // include("./views/main/login.html");

?>
