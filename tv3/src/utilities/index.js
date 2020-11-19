import { preloadImages, preloadFonts } from './utils';
import LocomotiveScroll from 'locomotive-scroll'
import { EventEmitter } from 'events'


// Preload  images and fonts

export default class Logic extends EventEmitter {
    constructor(el) {
        super();

        this.DOM = { el: el };
        this.DOM.dataScrollContainer = this.DOM.el.querySelector('[data-scroll-container]')
        this.DOM.images = this.DOM.el.querySelectorAll('.tiles__line-img')

        this.DOM.backtopEl = this.DOM.el.querySelector('.backtop')
        this.DOM.headerEl = this.DOM.el.querySelector('#header')

        this.loadImages()
    }

    loadImages = async () => {
        Promise.all([preloadImages(this.DOM.images), preloadFonts('rmd7deq')]).then(() => {
            // Remove loader (loading class)
            this.DOM.el.classList.remove('loading');

            // Initialize the Locomotive scroll
            const scroll = new LocomotiveScroll({
                el: this.DOM.dataScrollContainer,
                smooth: true
            });

            this.DOM.backtopEl.addEventListener('click', () => scroll.scrollTo(this.DOM.headerEl));
        });
    }

    render() {
        console.log('sucess')
        this.loadImages()
    }

}


