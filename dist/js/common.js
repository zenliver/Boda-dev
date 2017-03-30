// Code by ZHJ
$(function () {

    // 全局变量
    var screenWidth=$(window).width();

    // 给当前页的顶部导航项添加active样式
    var currentPagePath=location.pathname;
    console.log(currentPagePath);
    var navbarHrefs=new Array();
    var navbarLinks=$(".nav.navbar-nav li a");
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarHrefs[i]=navbarLinks.eq(i).attr("href");
        console.log(navbarHrefs);
    }
    for (var n = 0; n < navbarLinks.length; n++) {
        if (navbarHrefs[n].indexOf(currentPagePath)>=0) {
            // navbarHrefs[n].slice(0,-5)
            $(".nav.navbar-nav li").removeClass("active");
            $(".nav.navbar-nav li a").eq(n).parent().addClass("active");
            break;
        }
    }

    // 去除active的导航项前面的border-right
    $(".nav.navbar-nav li.active").prev().find("a").css("border-right","none");

    $(".join-process .thumbnail").mouseover(function () {
        $(".join-process .thumbnail").removeClass("active");
        $(this).addClass("active");
    });

    // 首页：手机下 #index_b2 三个圆形图片宽度自适应
    function roundImgAutoWidth() {
        var screenWidth=$(window).width();
        if (screenWidth<768) {
            $(".index_b2_round").css("width",((screenWidth-30)/3+10)+"px");
            $(".index_b2_round_center").css("left",(screenWidth-30-((screenWidth-30)/3+10))/2+"px");
        }
    }
    roundImgAutoWidth();
    $(window).resize(roundImgAutoWidth);

    // 加盟流程区域
    function lrAutoWidth() {
        var screenWidth=$(window).width();
        // console.log(screenWidth);
        $(".join-title-left, .join-title-right").css("width",((screenWidth-1-226)/2)+"px");
    }
    lrAutoWidth();
    // var screenWidth=$(window).width();
    // // console.log(screenWidth);
    // $(".join-title-left, .join-title-right").css("width",((screenWidth-1-226)/2)+"px");

    $(window).resize(lrAutoWidth);
    // $(window).resize(function () {
    //     var screenWidthNew=$(window).width();
    //     $(".join-title-left, .join-title-right").css("width",((screenWidthNew-1-226)/2)+"px");
    // });

    // 首页：手机下考虑到苹果设备的兼容性点击微信图标切换显示/隐藏微信二维码
    var screenWidth=$(window).width();
    if (screenWidth<1200) {
        $(".footer_weixin_icon").click(function () {
            $(".footer_weixin_qr").toggle();
        });
    }

    // 返回顶部
    $(".footer-backtotop img").click(function() {
        // $(window).scrollTop(0);
    });

    // 手机下折叠菜单添加动画效果
    var navbarLis=$(".navbar-nav li");
    var animationDelay=0;
    for (var i = 0; i < navbarLis.length; i++) {
        navbarLis.eq(i).css("animation-delay",animationDelay+"s");
        animationDelay=animationDelay+0.05;
    }
    $(".navbar-toggle").click(function () {
        $(".navbar-nav li").toggleClass("animated fadeInUp");
        // $(".navbar-nav li").animateCss("fadeInUp");
    });

    // 品牌页面手机下播放器尺寸自适应
    var screenWidth=$(window).width();
    function videoPlayerAutoResize() {
        var screenWidthFun=$(window).width();
        $("#brand-video-container").css("width",(screenWidthFun-30)+"px");
        $("#brand-video-container").css("height",(screenWidthFun-30)*0.5625+"px");
    }
    // function videoPlayerAutoResize(screenWidth) {
    //     // var screenWidthFun=$(window).width();
    //     $("#brand-video-container").css("width",(screenWidth-30)+"px");
    //     $("#brand-video-container").css("height",(screenWidth-30)*0.5625+"px");
    // }

    if (screenWidth<768) {
        videoPlayerAutoResize();
    }
    $(window).resize(function () {
        var screenWidthNew=$(window).width();
        if (screenWidthNew<768) {
            videoPlayerAutoResize();
        }
    });

    // 新闻列表页：手机下新闻缩略图显示高度自适应
    function newsThumbDisplayAutoHeight(imgSelector,imgDesignPercent) {
        // var screenWidth=$(window).width();
        // var imgMaxWidth=screenWidth-30;
        // console.log(imgMaxWidth);
        $(imgSelector).each(function () {
            var imgWidth=$(this).width();
            console.log(imgWidth);
            $(this).parent().css("height",imgWidth*imgDesignPercent);
        });
    }
    if (screenWidth<768) {
        newsThumbDisplayAutoHeight("#news_list .thumbnail > a > img",0.61825);
    }

    // 联系页面：职位详情切换效果
    $(".contact_jobs_btn_detail button").click(function () {
        $(".contact_jobs_btn_detail button").removeClass("active");
        $(this).addClass("active");
        if ($(this).parent().next().is(":hidden")) {
            $(this).parentsUntil($("#contact_jobs"),".col-md-4").siblings().find(".contact_jobs_detail").hide();
        }
        $(this).parent().next().slideToggle(1000);
    });

});
