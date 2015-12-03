$(document).ready(function () {

    //
    $('.logo_content ').on('click', function() {
        $('.phgl_img_wrapper').slideDown('slow', function () {
            $('.phgl_exit').css('display', 'block');
        });
    });

    $('.phgl_exit').on('click', function () {
        $(this).css('display', 'none');
        $('.phgl_img_wrapper').slideUp('slow', function () {
        });
    });

    $('.stepbutton').on('mouseover', function() {
        $(this).animate({ 'opacity': '0.9' }, 300); 
        $(this).find('.logos_block_btn').animate({ 'background-color': 'grey', 'opacity': '0.8' },300);
    });
    $('.stepbutton').on('mouseout', function() {
        $(this).animate({ 'opacity': '1' },300);
        $('.logos_block_btn').animate({ 'background-color': 'white', 'opacity': '1' },300);
    });



    //// анимация 
    //$('.next').click(function () {
    //    var wrapWidth = $('.logo_img_wrap').width();
    //    var imgWidth = $('.logos_centred').width();
    //    var motion = (wrapWidth - imgWidth) / 2;
    //    var motionNext = motion + 40;
    //    console.log(motion, motionNext);
        
    //    $('.logos_centred').animate({
    //        left: '+=' + motion,
    //        opacity: 0.01
    //    },1500, function () {
    //        $(this).css({ 'display': 'none' });
    //        $(this).remove();

    //    });
    //    $('.logos_centred_next').animate({
    //        left: '+=' + motionNext,
    //        opacity: 1
    //    }, 1500, function () {
    //        $(this).removeClass('logos_centred_next').addClass('logos_centred');
    //        $(this).css({
    //            'position': absolute,
    //            'left': motion,
    //            'top':'22px',
    //            width: '400px',
    //            height: '400px' 
    //        });

    //    });
    //});

});






var openPhotoSwipe = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // Здесь список картинок с их длиной, шириной и путем
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

    // Здесь список опций
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

}
