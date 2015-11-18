var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'http://localhost:48555/Images/valeri_zaveryaev.png',
            w: 600,
            h: 400
        },
        {
            src: 'http://localhost:48555/Images/roman_shukin.png',
            w: 1200,
            h: 900
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

}


document.getElementById('btn').onclick = openPhotoSwipe;