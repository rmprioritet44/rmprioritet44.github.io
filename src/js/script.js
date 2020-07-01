$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        navigation: true,
        navText: ["<img src='images/leftBtn.png'>", "<img src='images/rightBtn.png'>"],
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

    $('.email-form-btn').click(function(){
        $('#myModal').modal('show')
    });

    $('.social-btn').click(function(){
        window.open('https://www.instagram.com/rmprioritet/', '_blank')
    });

    $('.vk-btn').click(function(){
        window.open('https://vk.com/rm_prioritet44', '_blank')
    });

    // $('[name="phone"]').keyup(function(e)
    // {
    //     if(e.keyCode > 36 && e.keyCode < 41)
    //     {
    //         return true;
    //     }
    //     if ((e.keyCode > 47 && e.keyCode <58) || (e.keyCode < 106 && e.keyCode > 95))
    //     {
    //         // this.value = this.value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})$/);
    //         this.value = this.value.replace(/()(\d{3})\-?/g,'$1-');
    //         return true;
    //     }
    //     this.value = this.value.replace(/[^\-0-9]/g,'');
    // });

    function phoneMask() {
        var num = $(this).val().replace(/\D/g,'');
        var result = '';
        if (num.length === 1) {
            result = num
        }
        else if (num.length === 2) {
            result = num.substring(0,1) + ' (' + num.substring(1,2);
        }
        else if (num.length === 3) {
            result = num.substring(0,1) + ' (' + num.substring(1,3);
        }
        else if (num.length === 4) {
            result = num.substring(0,1) + ' (' + num.substring(1,4);
        }
        else if (num.length === 5) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,5);
        }
        else if (num.length === 6) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,6);
        }
        else if (num.length === 7) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7);
        }
        else if (num.length === 8) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7) + '-' + num.substring(7,8);
        }
        else if (num.length === 9) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7) + '-' + num.substring(7,9);
        }
        else if (num.length === 10) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7) + '-' + num.substring(7,9) + '-' + num.substring(9, 10);
        }
        else if (num.length === 11) {
            result = num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7) + '-' + num.substring(7,9) + '-' + num.substring(9, 11);
        }

        if (num.substring(0,1) === '7') {
            result = '+' + result;
        }

        $(this).val(result);
    }
    $('[name="phone"]').keyup(phoneMask);
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

