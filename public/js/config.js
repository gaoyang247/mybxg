require.config({
	baseUrl : '/public/assets',
	paths : {
		jquery : 'jquery/jquery.min',
		cookie : 'jquery-cookie/jquery.cookie',
		common : '../js/common',
		template : 'artTemplate/template-web',
		bootstrap : 'bootstrap/js/bootstrap.min',
		login : '../js/login',
		index : '../js/index',
		util : '../js/util',
		teacherlist : '../js/teacher-list',
		teacheradd : '../js/teacher-add'
	},
	shim : {//把非标准转
		bootstrap : {
			deps : ['jquery']
		}
	}

});