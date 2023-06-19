document.addEventListener("DOMContentLoaded", () => {

    (function($) {
        
        $(".nav-link").click((e) => {
            if(!$(e.target).hasClass("active")) {
                $(".nav-link.active").removeClass("active");
                $(e.target).addClass("active");
            }
        });
    
    }(jQuery));

});