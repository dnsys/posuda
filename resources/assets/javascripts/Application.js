import $ from 'jquery';
import ReviewsBlock from './views/ReviewsBlock'
import PartnersBlock from './views/PartnersBlock'
import Rellax from 'rellax'
import './vendor/jQuery.scrollSpeed'
import Headhesive from 'headhesive'

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {

             new ReviewsBlock();
             new PartnersBlock();
             new Rellax('.rellax');
            $('.header__burger').on('click', function(){
                let $this = $(this);
                let $mobileMenu = $('.header__main-menu--mobile');
                $this.toggleClass('open');
                $mobileMenu.toggleClass('open animated fadeInBottom');
            });
            this._initSmothScroll();
            this._initStickyHeader();
        })
    }
    _initSmothScroll(){
        this._scrollSpeed = $.scrollSpeed(100, 1500);
    }

    _initStickyHeader() {
        //let $header = $("header");
        //     $clone = $header.before($header.clone().addClass("clone"));
        //
        // $(window).on("scroll", function() {
        //     let fromTop = $("body").scrollTop();
        //     $('body').toggleClass("down", (fromTop > 200));
        // });
        let options = {
            offset: 200,
            classes: {

                // Cloned elem class
                clone: 'header--clone',

                // Stick class
                stick: 'header--stick',

                // Unstick class
                unstick: 'header--unstick'
            }
        }
        let header = header = new Headhesive('.header', options);
        if(screen.width < 880){
            header.destroy();
        }
    }
}

new Application();
