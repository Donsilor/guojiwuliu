$(function () {
    // 询价筛选
    $('.filter .list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 询价不同状态的颜色
    $('.table tr td').each(function(o){
        if($('.table tr td').eq(o).text() == '待审核'){
            $('.table tr td').eq(o).addClass('wait');
        }else if($('.table tr td').eq(o).text() == '未通过'){
            $('.table tr td').eq(o).addClass('no');
        }
    })

})