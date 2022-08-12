
$(document).ready(function(){
    $('.projects__carousel').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive : [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    $('.feedback__carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1200,
        adaptiveHeight: true,
        arrows: false,
        responsive : [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
});