// 添加目的地国家


// 删除目的地国家



// 选中尾端派送方式
$('.pull_down').click(function () {
    $('.pull').show();
})

$('.pull_list').click(function () {
    $('.pull_down .text_r').text($(this).text());
    $('.pull').hide();
    return false;
})


// 选中双清和退税
$('.choose_list').click(function () {
    $(this).toggleClass('active');
})