$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


$(document).ready(function(){
    $('.email-form-btn').click(function(){
        $('#myModal').modal('show')
    });

    $('.social-btn').click(function(){
        window.open('https://www.instagram.com/rmprioritet/', '_blank')
    });

    $('.vk-btn').click(function(){
        window.open('https://vk.com/rm_prioritet44', '_blank')
    });

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
