$(document).ready(function () {
    $(".header__text .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            }
        },

    });
});

// $(document).ready(function () {
//     $(".reviews__block .owl-carousel").owlCarousel({
//         items: 1,
//         loop: true,
//         dots: false,
//     });
// });

$(document).ready(function () {
    $('.reviews__block .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        // autoplay: true,
        startPosition: 2,
        nav: true,
        navText:["",""],
        dotsContainer: '.reviews__block-nav .reviews__thumbs',
    })
});
$('.reviews__thumbs-item').click(function () {
    $('.reviews__block .owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
})