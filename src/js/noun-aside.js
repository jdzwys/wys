$(function() {
    $('.i').on('click', function() {
        var index = $('.i').index(this);
        // $(this).addClass('active').siblings().removeClass('active');
        // $('.tabs div').eq(index).addClass('show').siblings().removeClass('show').toggle();
        $('.tabs div').eq(index).toggle();
    });
});