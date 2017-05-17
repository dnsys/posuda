import $ from 'jquery';
import ReviewsBlock from './views/ReviewsBlock'
import PartnersBlock from './views/PartnersBlock'
import Rellax from 'rellax'
import './vendor/jQuery.scrollSpeed'
//import Headhesive from 'headhesive'
import './vendor/anchor'
import magnificPopup from 'magnific-popup'

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
            // $(function() {
            //     $('a[href*=\\#]').anchor({
            //         transitionDuration : 1000,
            //         topOffsetPosition: 200
            //     });
            // });
             new ReviewsBlock();
             new PartnersBlock();
             new Rellax('.rellax');
            $('.header__burger').on('click', function(){
                let $this = $(this);
                let $mobileMenu = $('.header__main-menu--mobile');
                $this.toggleClass('open');
                $mobileMenu.toggleClass('open animated fadeInBottom');
            });
            //this._initSmothScroll();
            this._initPopup();
            this._ajaxSendForm();
            this._initStickyHeader();
        })
    }
    // _initSmothScroll(){
    //     this._scrollSpeed = $.scrollSpeed(100, 1500);
    // }

    _initStickyHeader() {
        let $header = $('.header');
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 150) $header.addClass('header--stick animated slideInDown').removeClass('slideInUp');
            //else if ($(window).scrollTop() > 150 ) $header.addClass('header--stick');
            else $header.removeClass('header--stick slideInDown').addClass('slideInUp');
        });
    }

    _initPopup() {
        $('.link-popup-call-manager').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
            mainClass: 'modal-window'
        });

        $('.link-get-price-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#email',
            mainClass: 'modal-window'
        });
    }

    _ajaxSendForm() {
        $('.call-back-form').submit(function(e) {
            let $form = $(this);
            $.ajax({
                type: $form.attr('method'),
                url: '../call-to-manager.php',
                data: $form.serialize()
            }).done(function() {
                $form.find('.sent-success').show('fast');
                $form.find('input[type=submit]').prop('disabled', true);
                setTimeout(function () {
                    $form.find('input[type=submit]').prop('disabled', false);
                    $form.find('.sent-success').hide('fast');
                }, 3000);
            }).fail(function() {
                console.log('fail');
            });
            //отмена действия по умолчанию для кнопки submit
            e.preventDefault();
        });
        $('#getPriceForm').submit(function(e) {
            let $form = $(this);
            $.ajax({
                type: $form.attr('method'),
                url: '../get-price.php',
                data: $form.serialize()
            }).done(function() {
                $form.find('.sent-success').show('fast');
                $form.find('input[type=submit]').prop('disabled', true);
                setTimeout(function () {
                    $form.find('input[type=submit]').prop('disabled', false);
                    $form.find('.sent-success').hide('fast');
                }, 3000);
            }).fail(function() {
                console.log('fail');
            });
            //отмена действия по умолчанию для кнопки submit
            e.preventDefault();
        });
    }
}

new Application();
