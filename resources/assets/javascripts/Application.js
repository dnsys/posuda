import $ from 'jquery';
import ReviewsBlock from './views/ReviewsBlock'

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             console.log('application ready');
             new ReviewsBlock();
        })
    }
}

new Application();
