import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.reviews-carousel').owlCarousel({
            items: 1,
            dots: true,
            autoHeight:true,
            nav:true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ]
            //center: true,
            //loop: false,
            //margin: 24,
            //autoWidth: true,
        });
    }
}
export default ReviewsBlock;