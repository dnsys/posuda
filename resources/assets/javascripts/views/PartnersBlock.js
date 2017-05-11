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
            margin:10,
            autoplay:true,
            autoplayTimeout:500,
            autoplayHoverPause:true,
            autoplaySpeed: 5000
        });
    }
}
export default ReviewsBlock;