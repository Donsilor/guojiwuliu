// 闪电询价
$('.information .box_r').click(function () {
    $('.pop_up').show();
    $('.pop_up .offer').show();
})

// 取消闪电询价
$('.pop_up .offer .quit').click(function () {
    $('.pop_up').hide();
    $('.pop_up .offer').hide();
})

// 提交闪电询价
$('.pop_up .offer .confirm').click(function () {
    $('.pop_up').hide();
    $('.pop_up .offer').hide();
})

$('.pop_up .choose').click(function () {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
})

// 信息不足，无法报价
$('.information .cannot').click(function () {
    $('.pop_up').show();
    $('.pop_up .cannot').show();
})

// 取消信息不足
$('.pop_up .cannot .quit').click(function () {
    $('.pop_up').hide();
    $('.pop_up .cannot').hide();
})

// 提交信息不足
$('.pop_up .cannot .confirm').click(function () {
    $('.pop_up').hide();
    $('.pop_up .cannot').hide();
})

// 请商家打电话给我
$('.offer_list .tel_me').click(function () {
    $('.pop_up').show();
    $('.pop_up .tel_me').show();
})

// 取消商家电话
$('.pop_up .quit').click(function () {
    $('.pop_up').hide();
    $('.pop_up .tel_me').hide();
})

// 确定商家电话
$('.pop_up .confirm').click(function () {
    $('.pop_up').hide();
    $('.pop_up .tel_me').hide();
})

// 现实商家联系方式
$('.offer_list .contact .left div').mouseover(function(){
	$(this).children('span').show();
})
$('.offer_list .contact .left div').mouseout(function(){
	$(this).children('span').hide();
})
$('.offer_list .contact .left div span').mouseout(function(){
	$(this).children('span').hide();
})
$('.offer_list .contact .left div span').mouseout(function(){
	$(this).children('span').hide();
})