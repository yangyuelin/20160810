

/*=========================== 首頁 HTML INCLUDE =================================*/
var windowHeight = $(window).height();
$(document).ready(function() {
	
	


    <!--body -->
    $("#bg").css({
        opacity: 0
    }).animate({
        opacity: 1
    }, 1000, 'easeOutQuart').fadeIn();
    $("#nav").css({
        opacity: 0,
        bottom: '-300px'
    }).animate({
        opacity: 1,
        bottom: '0px'
    }, 1500, 'easeOutQuart').fadeIn();;
    $("#community").css({
        opacity: 0,
        top: -300
    }).animate({
        opacity: 1,
        top: 30
    }, 1500, 'easeOutQuart').fadeIn();;



    $("#td").css({
        opacity: 0,
        top: 480
    }).animate({
        opacity: 1,
        top: 530
    }, 1500, 'easeOutQuart').fadeIn();;
    
    
    
    
    

    <!--copyright 版權-->
    $("#footer").load("include/footer.html", function() {
        console.log(windowHeight);
        $(window).scroll(function() {
            if ($(window).scrollTop() + windowHeight >= $('#footer').offset().top) {
                $('#nav').css('bottom', -($('#footer').offset().top-$(window).scrollTop()-windowHeight) + 'px');
            } else {
                $('#nav').removeAttr('style');
            }
        });
    });

    <!--社群-->
    $("#community").load("include/community.html", function() {

    });

    <!--nav 選單-->
    $("#nav").load("include/nav.html", function() {

        <!--錨點-->
        $("#btn01").click(function() {
            $("html,body").animate({
                scrollTop: $("html").offset().top
            }, 800);
        }); //代表一個完整的執行區塊
        $("#btn02").click(function() {
            $("html,body").animate({
                scrollTop: $("#video").offset().top
            }, 800);
        }); //代表一個完整的執行區塊
        $("#btn03").click(function() {
            $("html,body").animate({
                scrollTop: $("#intro").offset().top
            }, 800);
        }); //代表一個完整的執行區塊
        $("#btn04").click(function() {
            $("html,body").animate({
                scrollTop: $("#service").offset().top
            }, 800);
        }); //代表一個完整的執行區塊




    });



});









/*=========================== 頁籤 =================================*/
$(function() {

    var widget = $('.tabs-basic');

    var tabs = widget.find('.tabs_ul a'),
        content = widget.find('.tabs-content-placeholder > div');

    tabs.on('click', function(e) {

        e.preventDefault();

        // Get the data-index attribute, and show the matching content div

        var index = $(this).data('index');

        tabs.removeClass('tab-active');
        content.removeClass('tab-content-active');


        $(this).addClass('tab-active');
        content.eq(index).addClass('tab-content-active');

    });
});


/*=========================== FB 側欄視窗 =================================*/
$(function() {
    var w = $("#mwt_slider_content").width();
    $('#mwt_slider_content').css('height', ($(window).height() - 20) + 'px'); //將區塊自動撐滿畫面高度

    $("#mwt_fb_tab").mouseover(function() { //滑鼠滑入時
        if ($("#mwt_mwt_slider_scroll").css('left') == '-' + w + 'px') {
            $("#mwt_mwt_slider_scroll").animate({
                left: '0px'
            }, 600, 'swing');
        }
    });

    $("#mwt_slider_content").mouseleave(function() {　 //滑鼠離開後
        $("#mwt_mwt_slider_scroll").animate({
            left: '-' + w + 'px'
        }, 600, 'swing');
    });
});


/*=========================== FB粉絲團 =================================*/
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.7";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




/*=========================== 影片跳窗 =================================*/
$(document).ready(function() {
    //關閉ad
    $(".ad-close").click(function(evt) {
        evt.preventDefault();
        $(".ad").fadeOut();
    });
    //rwdNav
    var navIcon = $('.navicon'),
        navBtn = $('ul.topnav li a'),
        navList = $('ul.topnav');
    navIcon.on('click', function() {
        navList.toggleClass('show');
    });
    navBtn.on('click', function() {
        navList.removeClass('show');
    });
    /** -----------------------------------------
     * @TAB URL: http://codepen.io/MightyShaban/pen/zLykK
     -------------------------------------------*/
    (function($) {
        $('.js-tabs').find('>a:eq(0)').addClass('current');

        $('.js-tabs a').click(function(g) {
            var tab = $(this).closest('.js-tab'),
                index = $(this).closest('a').index();

            tab.find('.js-tabs > a').removeClass('current');
            $(this).closest('a').addClass('current');

            tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item').not('.js-tabs-item:eq(' + index + ')').fadeOut().hide();
            tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item:eq(' + index + ')').fadeIn().show();

            g.preventDefault();
        });
    })(jQuery);

    /*判別PC or MOBILE*/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".movie-pic").find('a').removeClass('js-fancybox').addClass('js-fancybox-2');
    }

    $('.js-fancybox').fancybox({
        maxWidth: 1024,
        maxHeight: 728,
        padding: 0,
        fitToView: false,
        width: '75%',
        height: '60%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
    });

    $('.js-fancybox-2').fancybox({
        margin: 0,
        padding: 0,
        fitToView: false,
        width: '100%',
        height: '100%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
    });

});