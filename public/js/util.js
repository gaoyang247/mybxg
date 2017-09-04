define(['jquery'],function($){
	//工具函数: (次函数只完成一件事，一般不做DOM操作，特定的功能，给其他模块提供服务)
	return {
		setMenu : function(path){
			$('.navs a[href="'+path+'"]').addClass('active');
		},
		qs : function(key){
			var param = location.search.substring(1);
			var result = null;
			if(param){
				var kvs =param.split('&');
				$.each(kvs,function(i,item){
					var kv = item.split('=');
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