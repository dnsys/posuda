import $ from 'jquery';
import ReviewsBlock from './views/ReviewsBlock'
import PartnersBlock from './views/PartnersBlock'

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             console.log('application ready');
             new ReviewsBlock();
             new PartnersBlock();
        })
    }
}

new Application();
