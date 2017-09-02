require.config({
	baseUrl : '/public/assets',
	paths : {
		jquery : 'jquery/jquery.min',
		cookie : 'jquery-cookie/jquery.cookie',
		common : '../js/common',
		template : 'artTemplate/template-web',
		bootstrap : 'bootstrap/js/bootstrap.min',
		login : '../js/login',
		teacherlist : '../js/teacher-list'
	},
	shim : {//把非标准转
		bootstrap : {
			deps : ['jquery']
		}
	}

});