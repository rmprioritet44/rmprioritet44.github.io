$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoWidth: true,
        items: 3,
        margin: 45,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            }
        }
    });
});

// $(document).ready(function(){
//     $('.my-own-class').slick({
//         variableWidth: true,
//         slidesToShow: 3
//     })
// });

// $(document).ready(function(){
//     $('.my-own-class').slick({
//         // variableWidth: true,
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         responsive: [
//             {
//                 breakpoint: 2000,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 1000,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//         ]
//     });
// });

// $(document).ready(function(){
//     $('.my-own-class').slick({
//         variableWidth: true,
//         // centerMode: true,
//         // centerPadding: '120px',
//         slidesToShow: 3,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     arrows: false,
//                     centerMode: true,
//                     centerPadding: '40px',
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// });

// function setSlideVisibility() {
//     //Find the visible slides i.e. where aria-hidden="false"
//     var visibleSlides = $('.slick-slide[aria-hidden="false"]');
//     //Make sure all of the visible slides have an opacity of 1
//     $(visibleSlides).each(function() {
//         $(this).css('opacity', 1);
//     });
//     //Set the opacity of the first and last partial slides.
//     $(visibleSlides).first().prev().css('opacity', 0);
//     $(visibleSlides).last().next().css('opacity', 0);
// }
//
// $(setSlideVisibility());
//
// $('.my-own-class').on('beforeChange', function() {
//     $('.slick-slide').each(function() {
//         $(this).css('opacity', 1);
//     });
// });
//
// $('.my-own-class').on('afterChange', function() {
//     setSlideVisibility();
// });

