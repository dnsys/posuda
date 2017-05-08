import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.reviews-carousel').owlCarousel({
            dots: true,
            center: true,
            loop: false,
            margin: 24,
            autoWidth: true
        });
        $('.partners-carousel').owlCarousel({
            center: true,
            items:7,
            loop:true,
            margin:24
        });
    }
}
export default ReviewsBlock;