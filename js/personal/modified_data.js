$('.modification .tab .list').click(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.modification .choose').children().eq(i).show().siblings().hide();
})

$('.verify .next').click(function () {
    // 第一步确认,如果验证码，
    if($('.verify .ipt_two').val()){
        if ($('.c_two').hasClass('active') == false){
            $('.btn_b .last').show();
            $('.verify .list:eq(0) .left').text('新手机号');
            $('.c_two').addClass('active');
            $('.line_two').addClass('active');
            $('.ipt_one').val('');
            $('.verify .ipt_two').val('');
        }else{
            if($('.c_three').hasClass('active')){
                $('.verify .list').show();
                $('.finish').hide();
                $('.btn_b .next').text('下一步');
                $('.verify .list:eq(0) .left').text('原手机号');
                $('.c_two').removeClass('active');
                $('.line_two').removeClass('active');
                $('.c_three').removeClass('active');
                $('.ipt_one').val('');
                $('.ipt_two').val('');
                return;
            };
            $('.btn_b .last').hide();
            $('.verify .list').hide();
            $('.btn_b .next').text('完成');
            $('.finish').show();
            $('.c_three').addClass('active');
        }
    }
})


// 第一步返回
$('.verify .last').click(function () {
    $('.verify .list').show();
    $('.btn_b .last').hide();
    $('.verify .list:eq(0) .left').text('原手机号');
    $('.c_two').removeClass('active');
    $('.line_two').removeClass('active');
    $('.ipt_one').val('');
    $('.ipt_two').val('');
})