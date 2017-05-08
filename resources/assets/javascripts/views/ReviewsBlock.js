import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.nonloop').owlCarousel({
            center: true,
            dots: true,
            items:1,
            loop:false,
            margin:10,
            responsive:{
                600:{
                    items:4
                }
            }
        });
    }
}
export default ReviewsBlock;