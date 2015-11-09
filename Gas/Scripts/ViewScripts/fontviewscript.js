// Handler of font content
// Rotate cross button / open font tab

$(".font_item_showbutton").rotate({
    bind: {
        click: function() {
            var prnt = $(this).closest("section");
            console.log("find parent " + prnt.attr("id"));

            // check angle of cross button
            var angle = $(this).getRotateAngle();
            console.log('cross angle value ' + angle);

            // in addiction of the angle rotate cross left / right
            if (angle == 0) {
                $(this).rotate({
                    angle: 0,
                    animateTo: 135
                });
                // Mark class selected 
                prnt.addClass("active");
            } else {
                $(this).rotate({
                    angle: 135,
                    animateTo: 0
                });
                // Unmark class selected
                prnt.removeClass("active");
            }

            var fontToShow = prnt.find("#font_item_content");
            console.log(fontToShow);
            // handler of the opened / closed font tab
            if (fontToShow.css("display") === "none") {
                fontToShow.animate({ height: "show" }, 500);
                
                // opened window action
                // font tab menu animation
                $('.font_menu_item').hover(
                    function() {
                        var arr = $(this).attr('class').split(' ');
                        if (arr[1] !== 'selected') {
                            $(this).css({
                                'background-color': 'black',
                                'cursor': 'pointer',
                                'color': 'white'
                            });
                            console.log('1');
                            
                        } else {
                            $(this).css({
                                'background-color': 'black',
                                'cursor': 'default'
                            });
                            console.log('3');
                            
                        }
                    },
                    function() {
                        var arr = $(this).attr('class').split(' ');
                        if (arr[1] !== 'selected') {
                            $(this).css({
                                'background-color': 'transparent',
                                'color': 'black'
                            });
                            console.log('2');
                        } else {
                            $(this).css({ 'background-color': 'black' });
                            console.log('4');
                        }
                    }
                );

                // font tab menu click handler
                $('.font_menu_item').click(
                    function(e) {
                        var arr = $(this).attr('class').split(' ');
                        if (arr[1] !== 'selected') {
                            var sblings = $(this).siblings('.selected');

                            sblings.css({
                                'background-color': 'transparent',
                                'color': 'black'
                            });
                            sblings.removeClass('selected');
                            $(this).addClass('selected');
                            console.log('click');

                            // data handler
                            var fontMenuBtnId = $(this).attr('id');
                            console.log(fontMenuBtnId);
                            var fontContentDiv = prnt.find('#font_content');
                            switch (fontMenuBtnId.toLowerCase()) {
                            case 'cyrilic_fonts':
                                $(fontContentDiv).css({ 'background-color': 'green' });
                                break;
                            case 'latin_fonts':
                                $(fontContentDiv).css({ 'background-color': 'palegoldenrod' });
                                break;
                            case 'numbers_fonts':
                                $('#font_content').css({ 'background-color': 'orange' });
                                break;
                            case 'ligatures_fonts':
                                $('#font_content').css({ 'background-color': 'lightblue' });
                                break;
                            }

                        } else {
                            e.preventDefault();
                        }
                    }
                );
                /*+++++++++++++++++++++++++++++++++++++++*/


            } else {
                fontToShow.animate({ height: "hide" }, 500);
            }
        }
    }
});
//$('#cyrilic_fonts').click(function() {

//    $.ajax({
//            url: '/Font/GetFontBlockView',
//            success: function(data) {
//                console.log("Прибыли данные: " + data);
//            }
//        })
//        .done(function(partialViewHtml) {
//            $('#font_content').html(partialViewHtml);
//        });
//});


//alert("sdsdsd");
//$.ajax({
//    url: ''@Url.Action("GetFontBlockView","Font")'',
//    type: 'GET'
//})
//.done(function (partialViewHtml) {
//    $('#font_cyr_img').html(partialViewHtml);
//})




