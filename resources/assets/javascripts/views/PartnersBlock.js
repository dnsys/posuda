import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.partners-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            center: true,
            items:7,
            loop:true,
            margin:24
        });
    }
}
export default ReviewsBlock;