$('.arrange .select').click(function () {
    $(this).children('.pull_r').show();
})

$('.pull_r .list').click(function () {
    $(this).parent().hide();
    $(this).parent().siblings('.text').text($(this).text());
    return false;
})

$('.choice').click(function () {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
})