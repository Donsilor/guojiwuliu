// 选择运货方式
$('.type_a .list').click(function () {
    if(!$(this).hasClass('select')){
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
    }else{
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else {
            $('.select').removeClass('active');
            $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
        }
    }
})

$('.type_b .list').click(function () {
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $('.type_b .list').removeClass('active');
        $(this).addClass('active');
    }
})

$('.pull-down').click(function () {
   $('.pull_r').css('display') == 'none' ? $('.pull_r').show() : $('.pull_r').hide();
})

$('.pull_r .list').click(function () {
    $('.pull-down .text').text($(this).text());
    $('.pull_r').hide();
    return false;
})
