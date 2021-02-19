$(document).ready(function(){
    $('.catalog__slider').slick({
        dots: true,
        dotsClass: "my-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        arrows: false
    });
    $('.services__slider').slick({
        dots: true,
        dotsClass: "my-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        arrows: false
    });
    $('.team__slider').slick({
        dots: true,
        dotsClass: "my-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        arrows: false
    });
    $('.news__slider').slick({
        dots: true,
        dotsClass: "my-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        arrows: false
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 370) {
            $('.header_menu').addClass('fixed');
        } else {
            $('.header_menu').removeClass('fixed');
        }
    });

    $(".about__img").click(function (event) {
        $(".about__text").toggleClass("full");
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.top').addClass('dark-bg');
        } else {
            $('.top').removeClass('dark-bg');
        }
    });


    $("a.nav_link").click(function () {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, {
            duration: 2000,
            aesing: 'swing'
        });
        return false;
    });

    $(".header_burger, .nav_link").click(function (event) {
        $(".header_burger, .mobile_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

function PrevSlideCatalog() {
    $(".catalog__slider").slick('slickPrev');
}
function NextSlideCatalog() {
    $(".catalog__slider").slick('slickNext');
}

function PrevSlideService() {
    $(".services__slider").slick('slickPrev');
}
function NextSlideService() {
    $(".services__slider").slick('slickNext');
}

function PrevSlideTeam() {
    $(".team__slider").slick('slickPrev');
}
function NextSlideTeam() {
    $(".team__slider").slick('slickNext');
}

function PrevSlideNews() {
    $(".news__slider").slick('slickPrev');
}
function NextSlideNews() {
    $(".news__slider").slick('slickNext');
}