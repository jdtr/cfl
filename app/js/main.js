$(function(){$("#btn-mobile").on("click",function(a){a.preventDefault();var e=$(this);e.hasClass("active")?(e.removeClass("active"),$("#menu-main").removeClass("active"),$("html").removeClass("page-no-scroll")):(e.addClass("active"),$("#menu-main").addClass("active"),$("html").removeClass("page-no-scroll"))})});