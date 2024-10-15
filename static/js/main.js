

$(document).ready(function () {
    
    console.log("Welcome To Solar Project");

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').fadeIn();
        } else {
            $('.scroll-up-btn').fadeOut();
        }
    });

});


