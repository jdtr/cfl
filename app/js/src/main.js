$(function(){
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
})