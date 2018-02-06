var win;
$(function(){
    win = $(window);

    //Navigation
    $("#btn-mobile").on("click", function(e){
        e.preventDefault();
        var elm = $(this);
        if(elm.hasClass("active")){
            elm.removeClass("active");
            $("#menu-main").removeClass("active");
            $("html").removeClass("page-no-scroll");
        }else{ 
            elm.addClass("active");
            $("#menu-main").addClass("active");
            $("html").removeClass("page-no-scroll");
        }
    });

    //Data img
    var bg = $("[data-img]"),
        url_bg;

    bg.each(function(){
        url_bg = $(this).attr("data-img");
        $(this).css("background-image", "url(" + url_bg + ")")
    });

    //Map
    $("#btn-map").on("click", function(e){
        e.preventDefault();
        if($(this).hasClass("btn-map--active")){
            $(this).removeClass("btn-map--active");
            $("#res-map").removeClass("res-map--active");
        }else{
            $(this).addClass("btn-map--active");
            $("#res-map").addClass("res-map--active");
        }
    });
    $("#res-map-close").on("click", function(e){
        e.preventDefault();
        $("#btn-map").trigger("click");
    });

    //swiper
    var swiper_members = new Swiper ('.swiper-container--members', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination--members',
            clickable: true,
        },
        breakpoints: {
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }
    });

    var swiper_his = new Swiper ('.swiper-container--his', {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination--his',
            clickable: true,
        },
        breakpoints: {
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            575: {
              spaceBetween: 15,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
              }
          }
    });

    var swiper_allies = new Swiper ('.swiper-container--allies', {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next--allies',
            prevEl: '.swiper-button-prev--allies',
        },
        breakpoints: {
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
              }
          }
    });

    //Widget
    $(".chl-item").on("mouseover", function(e){
        e.preventDefault();
        $(".chl-item").removeClass("active");
        $(this).addClass("active");
    });

    //Scroll
    var size_mn = $(".banner-mn").innerHeight();
    win.on("scroll", function(){
        if($(this).scrollTop() > size_mn){
            $("#btn-up").addClass("active");
        }else{
            $("#btn-up").removeClass("active");
        }
    })

    //Video
    var url_video = $("#video-cfl").attr("src");

    $(".banner-mn_video").on("click", function(e){
        e.preventDefault();
        $(".cont-video").show().animate({ opacity: 1 }, 300);
        $(".f-video").delay(200).animate({ opacity: 1 }, 300);
        $("#video-cfl").attr("src", url_video + "&autoplay=1");
    });

    $("#close-video, .cont-video .overlay").on("click", function(e){
        e.preventDefault();
        $(".f-video").animate({ opacity: 0 }, 300);
        $(".cont-video").delay(200).animate({ opacity: 0 }, 300, function(){
            $(".cont-video").hide();
        });
        $("#video-cfl").attr("src", url_video);
    })

    //Up
    $("#btn-up").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop:0 }, 500);
    });
})