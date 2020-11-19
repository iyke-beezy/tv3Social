import imagesLoaded from 'imagesloaded'
var WebFont = require('webfontloader')

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(selector, { background: true }, resolve);
    });
};

// Preload images
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

export {
    preloadImages,
    preloadFonts
};