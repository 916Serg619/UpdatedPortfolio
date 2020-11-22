$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
});

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

//animation//
var typed = new Typed(".typing", {
strings: ["I am a Web Developer", " I am an Artist", "I am a Student"],
typeSpeed: 75,
backSpeed: 75,
loop: true,        
});