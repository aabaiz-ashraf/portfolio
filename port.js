$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    //     if(this.scroll > 500){
    //         $('.scroll-up-btn').addClass("show");
    //     }else{
    //         $('.scroll-up-btn').removeClass("show");
    //     }
    // });

    // // slide-up script
    // $('.scroll-up-btn').click(function(){
    //     $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Python Developer", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Python Developer", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    // toogle menu bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});