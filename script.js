$(function() {

    var pagetop = $('#page_top');
    // var headertop = $('#header_top');

    pagetop.hide();
    let prePos = 0;
    let nowPos = 0;

    $(window).scroll(function() {
        nowPos = $(this).scrollTop();
        // pageTopボタン
        if (nowPos < 480) {
            pagetop.addClass('hide1');
        } else {
            pagetop.show();
            pagetop.removeClass('hide1');
        }
        // headerTop
        // 上スクロールするとheader表示
        // ただし、480pxまでは下スクロールしてもheaderは表示のまま
        // 下スクロールするとheader非表示
        if (nowPos > prePos && nowPos > 480 && $(".navigation[style*='display: block']").length == 0) { // 下スクロール
            $('#header_top').addClass('hide');
        } else { // 上スクロール
            $('#header_top').removeClass('hide');
        }
        prePos = nowPos;
     });
     pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
     });

    $(window).resize(function() {
        if ($(window).width() < 1032) {
            $('header').css('height', 'auto');
        }
    });

    if ($(window).width() > 1032) {
        $('.header__nav-item').hover(function() {
            // navigationのリンクのIDを取得
            const id = $(this).attr('id');
            // 対象のnavigationのIDを作る
            const navigationId = id.replace('header', 'navigation');
            // 表示されてるnavigationを非表示にする
            $('.navigation').not('#' + navigationId).fadeOut(.1);
            // ホバーしてるheader__nav-itemに対応するnavigationを表示
            $('#' + navigationId).fadeIn();
            let headerHeight = '';
            switch (id) {
                case 'header__news':
                case 'header__service':
                case 'header__tech':
                    headerHeight = '500px';
                    break;
                case 'header__corporate':
                case 'header__cyberagent':
                case 'header__features':
                    headerHeight = '600px';
                    break;
                case 'header__career':
                case 'header__ir':
                    headerHeight = '700px';
                    break;
                default:
                    headerHeight = '600px';
                    break;
            }
            $('header').css({'transition': 'height 450ms cubic-bezier(0.175, 0.885, 0.57, 1.48)', 'height': headerHeight});
            $('.careers, .news, .companies, .pankuzu, .footer, #page_top').not('#' + navigationId).css({filter: 'brightness(0.8)'});
        }, function() {
        });
        $('header').hover(function() {
        }, function() {
            // navigationを非表示
            $('.navigation').fadeOut(.1);
            $('header').css({'transition': 'height 450ms', 'height': '70px'});
            $('.careers, .news, .companies, .pankuzu, .footer, #page_top').css({filter: 'brightness(1.0)'});
        });
    }

    $("#search").css("display", "none");
    $(".header__search-icon").click(function(){
        // 検索画面表示
        $("#search").fadeIn();
        // スクロール禁止にする
        $("#search").addClass('no-scroll');
        if($(".no-scroll").length) {
            $("body").css('overflow','hidden');
          } else {
            $("body").css('overflow','auto');
          }
    });
    $(".search__back").click(function(){
        // スクロール解除
        $("#search").removeClass('no-scroll');
        if($(".no-scroll").length) {
            $("body").css('overflow','auto');
        } else {
            $("body").css('overflow','hidden');
        }
        // 検索画面閉じる
        $("#search").fadeOut();
    });

    $("#search__all").click(function() {
        $(this).removeClass('search__box--text1 search__box--text2');
        $('#search__news').removeClass('search__box--text1 search__box--text2');
        $('#search__features').removeClass('search__box--text1 search__box--text2');

        $(this).addClass('search__box--text1');
        $('#search__news').addClass('search__box--text2');
        $('#search__features').addClass('search__box--text2');
    });
    $("#search__news").click(function() {
        $('#search__all').removeClass('search__box--text1 search__box--text2');
        $(this).removeClass('search__box--text1 search__box--text2');
        $('#search__features').removeClass('search__box--text1 search__box--text2');

        $('#search__all').addClass('search__box--text2');
        $(this).addClass('search__box--text1');
        $('#search__features').addClass('search__box--text2');
    });
    $("#search__features").click(function() {
        $('#search__all').removeClass('search__box--text1 search__box--text2');
        $('#search__news').removeClass('search__box--text1 search__box--text2');
        $(this).removeClass('search__box--text1 search__box--text2');

        $('#search__all').addClass('search__box--text2');
        $('#search__news').addClass('search__box--text2');
        $(this).addClass('search__box--text1');
    });
});