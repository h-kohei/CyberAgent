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
            $('#navigation__corporate').addClass('open');
            $('.header__wrapper').addClass('open1');
        //     $('#navigation__corporate').on('mousemove', function(){
        //     $('.header__wrapper').addClass('open');
        // });
        }, function() {
          //カーソルが離れた時
            $('#navigation__corporate').removeClass('open');
            $('.header__wrapper').removeClass('open1');
        }
    );

    // $(function() {
    //     $('.nav-button-wrap').on('click', function() {
    //       if ($(this).hasClass('active')) {
    //         // スマホ用メニューが表示されていたとき
    //         $(this).removeClass('active');
    //         $('.globalnav').addClass('close');
    //         $('.globalnav-wrap , body').removeClass('open');
    //       } else {
    //         // スマホ用メニューが非表示の時
    //         $(this).addClass('active');
    //         $('.globalnav').removeClass('close');
    //         $('.globalnav-wrap , body').addClass('open');
    //       }
    //     });
    // });
});