// 订单管理状态筛选
$('.status .list').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})

// 运货方式筛选
$('.way .list').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})

// 延迟收货
$('.order_list .delayed').click(function () {
    $('.pop_up').show();
    $('.pop_up .delayed').show();
})

// 确认延时重置
$('.pop_up .delayed .confirm').click(function () {
    $('.pop_up').hide();
    $('.pop_up .delayed').hide();
})

// 取消延时重置
$('.pop_up .delayed .quit').click(function () {
    $('.pop_up').hide();
    $('.pop_up .delayed').hide();
})

// 申诉
$('.order_list .appeal').click(function () {
    if($(this).text() == '我要申诉'){
        $('.pop_up').show()
        $('.pop_up .want_appeal').show();
    }else{
        $('.pop_up').show()
        $('.pop_up .appeal').show();
    }
})

// 取消申诉
$('.pop_up .want_appeal .quit').click(function () {
    $('.pop_up').hide()
    $('.pop_up .want_appeal').hide();
})

// 提交申诉
$('.pop_up .want_appeal .confirm').click(function () {
    $('.pop_up').hide();
    $('.pop_up .want_appeal').hide();
})

// 申诉结果确定
$('.pop_up .appeal .btn').click(function () {
    $('.pop_up').hide();
    $('.pop_up .appeal').hide();
})

//评论
$('.order_list .comment').click(function () {
    $('.pop_up').show();
    $('.pop_up .comment').show();
})

// 取消评论
$('.pop_up .comment .quit').click(function () {
    $('.pop_up').hide();
    $('.pop_up .comment').hide();
})

// 确认评论
$('.pop_up .comment .confirm').click(function () {
    $('.pop_up').hide();
    $('.pop_up .comment').hide();
})

// 评论点星
$('.synthesize .icon').click(function () {
    var index = $(this).index()+1;
    $('.synthesize .icon').removeClass('active');
    $('.synthesize .icon').filter(":lt("+index+")").addClass('active');
})