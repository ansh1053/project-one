$(document).ready(function () {
    $('.search-btn').click(function () {
        $('.form-block').toggleClass('active');
    });
    $('.menu').click(function () {
        $('.secondary-nav').addClass('active');
        $('body').toggleClass('disable-scroll');

    });
    $('.close-btn').click(function () {
        $('.secondary-nav').removeClass('active');
        $('body').removeClass('disable-scroll');
    });
    $('.slider').slick({
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });
    $('.variable-slider').slick({
        slidesToShow: 2,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});