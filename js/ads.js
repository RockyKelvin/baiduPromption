$(function(){   
    var winHeight = $(document).scrollTop();
 
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
 
        if (scrollY > 100){ //如果滚动距离大于100px则隐藏，否则删除隐藏类
            $('.header').addClass('hiddened');
            $('.subnav').addClass('up');
            $('.header_right').addClass('header_right_up');
        } 
        else {
            $('.header').removeClass('hiddened');
            $('.subnav').removeClass('up');
            $('.header_right').removeClass('header_right_up');
        }
 
        if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
            $('.header').removeClass('showed');
            $('.subnav').removeClass('down');
            $('.header_right').removeClass('header_right_down');
        } 
        else {
            $('.header').addClass('showed');
             $('.subnav').addClass('down');
             $('.header_right').removeClass('header_right_down');
        }               
 
     });
});