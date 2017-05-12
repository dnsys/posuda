import $ from 'jquery';
import ReviewsBlock from './views/ReviewsBlock'
import PartnersBlock from './views/PartnersBlock'
import Rellax from 'rellax'
import './vendor/jQuery.scrollSpeed'

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             new ReviewsBlock();
             new PartnersBlock();
             new Rellax('.rellax');
            $('.header__burger').click(function(){
                $(this).toggleClass('open');
            });
            this._initSmothScroll();
        })
    }
    _initSmothScroll(){
        this._scrollSpeed = $.scrollSpeed(100, 1500);
    }
}

new Application();
