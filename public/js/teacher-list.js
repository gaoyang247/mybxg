define(['jquery','template','bootstrap'],function($,template){
//请求后台接口获取列表数据
	$.ajax({
		type : 'get',
		url : '/api/teacher',
		dataType : 'json',
		success :function(data){
			//解析数据渲染页面
			var html = template('teacherTpl',{list : data.result});
			$('#teacherInfo').html(html);
			//绑定预览点击事件
			$('.preveiw').click(function(){
		      var tcId=$(this).closest('td').attr('data-tcId');//closest 指向直接父元素(离td最近的父元素)
		      $.ajax({
		      	type : 'get',
		      	url : '/api/teacher/view',
		      	data : {tc_id : tcId},
		      	datatype : 'json',
		      	success : function(data){
		      		//解析数据渲染页面
		      		var html =template('modalTpl',data.result);
		      		$('#modalInfo').html(html);

		      		//显示弹窗
		      		$('#teacherModal').modal(); //bootstrap 的方法（modal()）他有两种控制方法(js 和 类)
		      	}
		      });
	      })
		}
	});

	
});