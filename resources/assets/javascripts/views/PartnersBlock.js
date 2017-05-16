import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.partners-carousel').owlCarousel({
            // center: true,
            // items: 7,
            // loop: true,
            // margin: 24,
            // autoplay: true,
            // autoplayTimeout: 500,
            // autoplaySpeed: 5000
            items:7,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:0,
            //autoplayHoverPause:true,
            autoplaySpeed: 5000,
            slideTransition: 'linear'
        });
    }
}
export default ReviewsBlock;