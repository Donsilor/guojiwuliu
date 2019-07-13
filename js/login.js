// 选择登录方式
$('.login_c .list').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var i = $(this).index();
    if(i){
        $('.ipt_box').eq(1).addClass('active');
        $('.ipt_box .ipt').eq(1).attr('placeholder','请输入验证码');
    }else{
        $('.ipt_box').eq(1).removeClass('active');
        $('.ipt_box .ipt').eq(1).attr('placeholder','请输入密码');
    }
})

$('.login_c .code').click(function () {
    $('.login_c').hide();
    $('.login_d').show();
})

$('.login_d .code').click(function () {
    $('.login_d').hide();
    $('.login_c').show();
})