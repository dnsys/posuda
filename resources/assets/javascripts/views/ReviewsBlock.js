import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.reviews-carousel').owlCarousel({
            //items: 1,
            dots: true,
            center: true,
            loop: false,
            margin: 24,
            autoWidth: true,
            //autoHeight:true
        });
    }
}
export default ReviewsBlock;