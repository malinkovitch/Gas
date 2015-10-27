//
//$('#font_item_showbutton_img').on('click', function () {
    
//    $(this).rotate({
//            bind: {
//                click: function () {
//                    $(this).rotate({
//                        angle: 0,
//                        animateTo: 180,
//                        easing: $.easing.easeInOutElastic
//                    });
//                }
//            }
//        });
//    //$('#font_item_content').css({ 'display': 'block' });
//});

$("#font_item_showbutton_img").rotate({
    bind: {
        click: function () {
            $(this).rotate({
                angle: 0,
                animateTo: 135
            })
        }
    }
});


//$("#font_item_showbutton_img").rotate({
//    bind: {
//        click: function() {
//            $(this).rotate({
//                angle: 0,
//                animateTo: 135,
//                callback: function() {
//                    $('#font_item_content').toggle("slow", function() {
//                        // Animation complete.
//                    });
//                }
//            })
//        }
//    }
//});


//$('#font_item_showbutton_img').click(function () {
//    $("#cross_btn").rotate(45);
//});
//$('#font_item_showbutton_img').rotate(45);

//$("#font_item_showbutton_img").rotate({
//    bind: {
//        click: function () {
//            $("#cross_btn").rotate({
//                duration: 6000,
//                angle: 0,
//                animateTo: 100
//            })
//        }
//    }
//});

//$("#cross_btn").rotate({
//    bind: {
//        click: function () {
//            $(this).rotate({
//                angle: 0,
//                animateTo: 180,
//                easing: $.easing.easeInOutElastic
//            });
//        }
//    }
//});




/*jQueryRotate.js*/