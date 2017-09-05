define(['jquery'],function($){
	//工具函数: (次函数只完成一件事，一般不做DOM操作，特定的功能，给其他模块提供服务)
	return {
		setMenu : function(path){
			$('.navs a[href="'+path+'"]').addClass('active');
		},
		qs : function(key){
			// qs 获取URL参数中指定的参数值
			// param 是URL地址 ？号后面所有的参数（uname=lisi&age=12 参数的格式）
			var param = location.search.substring(1);//删除参数的第一个问号
			var result = null;
			if(param){
				var kvs =param.split('&');//将多个参数用&分割 kvs就是分割后的数组
				$.each(kvs,function(i,item){
					var kv = item.split('=');//数组是有多个键值对组成，用 = 分割
					if(key == kv[0]){
						//找到对应的参数
						result = kv[1];
						return false;// 终止循环
					}
				});
			}
			return result;
		}
	}
});