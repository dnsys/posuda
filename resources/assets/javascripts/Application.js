import $ from 'jquery';
import ReviewsBlock from './views/ReviewsBlock'
import PartnersBlock from './views/PartnersBlock'
import Rellax from 'rellax'
import './vendor/jQuery.scrollSpeed'

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             this._initStickyHeader();
             new ReviewsBlock();
             new PartnersBlock();
             new Rellax('.rellax');
            $('.header__burger').click(function(){
                let $this = $(this);
                $this.toggleClass('open');
                $('.header__main-menu--mobile').each(function () {
                    if( $this.hasClass('clone') !== true ){
                        $this.toggleClass('open');
                    }
                });
            });
            this._initSmothScroll();
        })
    }
    _initSmothScroll(){
        this._scrollSpeed = $.scrollSpeed(100, 1500);
    }

    _initStickyHeader() {
        let $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));

        $(window).on("scroll", function() {
            let fromTop = $("body").scrollTop();
            $('body').toggleClass("down", (fromTop > 200));
        });
    }
}

new Application();
