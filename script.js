$(function(){

    var pagetop = $('#page_top');
    var headertop = $('#header_top');

    pagetop.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 480) {
            pagetop.fadeIn();
            headertop.fadeOut();
        } else {
            pagetop.fadeOut();
            headertop.fadeIn();
        }
     });
     pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
     });

    $('#header__corporate').hover(
        function() {
          //カーソルが重なった時
            // $('#navigation__corporate').addClass('open');
            // $('.header__wrapper').addClass('open1');
            $('.header__wrapper, .navigation').on({
                'mouseenter': function() {
                    $('#navigation__corporate').addClass('open');
                    $('.header__wrapper').addClass('open1');
                },
                'mouseleave': function() {
                    // console.log('マウスが出ていった');
                    $('#navigation__corporate').removeClass('open');
                    $('.header__wrapper').removeClass('open1');
                }
            })

        }, function() {
          //カーソルが離れた
            // $('#navigation__corporate').removeClass('open');
            // $('.header__wrapper').removeClass('open1');
        }
    );
});