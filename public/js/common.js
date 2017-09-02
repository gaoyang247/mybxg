define(['jquery','template','cookie'],function($,template){ //cookie 不用接收 cookie的而方法扩展到jquery里 $ 就能接收
    // NProgress.start();
    // NProgress.done(); 
    // 控制住左侧导航栏菜单折叠展开
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });


    $('#logoutBtn').click(function(){
            $.ajax({
                type :'post',
                url :'/api/logout',
                dataType :'json',
                success : function(data){
                    if(data.code==200){
                        // 退出成功
                        location.href ='/main/login';
                    }
                }
            });
            return false;
        });
    //验证是否登录
    var seesionId =$.cookie('PHPSESSID');
    if(!seesionId && location.pathname != '/main/login'){
        location.href='main/login';
    }
    //获取用户登录信息并填充页面
    var cookie = $.cookie('loginInfo');
    var loginInfo = cookie?JSON.parse(cookie):{};
    // $('.profile img').attr('src',loginInfo.tc_avatar);
    // $('.profile h4').html(loginInfo.tc_name);
     var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
            
     // var render=template.compile(tpl);
     // var html=render(loginInfo)
     // $('#profileId').html(html);
     var html = template.render(tpl,loginInfo);
     $('#profileId').html(html);

});
	

	 