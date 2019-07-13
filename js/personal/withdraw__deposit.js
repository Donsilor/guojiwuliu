// 选择银行卡
$('.withdraw_detail .pull_list').click(function () {
    $('.withdraw_detail .text_r').text($(this).text());
})
$('.withdraw_detail .pull_down').click(function (){
    $('.withdraw_detail .pull').toggle();
    return false;
})

// 添加银行卡
$('.withdraw_detail .add').click(function () {
    $('.pop_up').show();
})

// 选择银行卡（弹窗）
$('.pop_up .pull_list').click(function () {
    $('.pop_up .text_r').text($(this).text());
})
$('.pop_up .pull_down').click(function (){
    $('.pop_up .pull').toggle();
    return false;
})

// 取消添加银行卡
$('.pop_up .quit').click(function () {
    $('.pop_up').hide();
})

// 确认添加银行卡
$('.pop_up .confirm').click(function () {
    $('.pop_up').hide();
})