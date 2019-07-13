$('.change .tab .list').click(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.change').children().eq(i).show().siblings().hide();
})