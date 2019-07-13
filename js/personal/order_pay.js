// 货运保险
$('.insurance .fr').click(function () {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
})

// 选择支付方式
$('.way_list .select').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
})

$('.way_list .icon').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
})

// 确定支付
$('.pay_way .btn').click(function () {
    // 选择账户余额
    if($('.way_list').eq(0).hasClass('active')){
        alert('请用微信支付')
    }
    // 选择微信支付
    if($('.way_list').eq(1).hasClass('active')){
        $('.pop_up').show();
    }
    // 选择支付宝支付
    if($('.way_list').eq(2).hasClass('active')){
        alert('不是说了，用微信嘛')
    }
})

// 关闭微信支付弹窗
$('.pop_up .iconGroupx').click(function () {
    $('.pop_up').hide();
})