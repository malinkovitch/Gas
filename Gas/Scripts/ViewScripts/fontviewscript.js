// Handler of font content
$("#font_item_showbutton_img").rotate({
    bind: {
        click: function () {
            var prnt = $(this).closest("section");
            console.log("find parent " + prnt.attr("id"));
            // check angle of cross button
            var angle = $(this).getRotateAngle();
            console.log('cross angle value ' + angle);

            if (angle == 0) {
                $(this).rotate({
                    angle: 0,
                    animateTo: 135
                });
                // Mark class selected 
                prnt.addClass("selected");
            } else {
                $(this).rotate({
                    angle: 135,
                    animateTo: 0
                });
                // Unmark class selected
                prnt.removeClass("selected");
            }
            if ($("#font_item_content").css("display") == "none") {
                // opened window
                $("#font_item_content").animate({ height: "show" }, 500);
                $('.font_menu_item').first().css({
                    'background': 'white'
                }).addClass('choosen');
                // Open firstmenu tab with content


                // Menu
                // animation handler of select type of font menu
                $('.font_menu_item').each(
                    function() {
                        
                        var className = $(this).attr('class').split(' ')[1];

                        // handler of menu button click

                        $(this).click(function (e) {
                            if (className === 'choosen') {
                                e.preventDefault();
                                console.log('click function disable');
                            } else {
                                var fontMenuBtnId = $(this).attr('id');
                                console.log(fontMenuBtnId);
                                switch (fontMenuBtnId.toLowerCase()) {
                                case 'cyrilic_fonts':
                                    alert(fontMenuBtnId);
                                    break;
                                    case 'latin_fonts':
                                        {
                                            $(this).css({ 'background': 'green' }).addClass('choosen');
                                            
                                        }
                                        break;
                                case 'numbers_fonts':
                                    alert(fontMenuBtnId);
                                    break;
                                case 'ligatures_fonts':
                                    alert(fontMenuBtnId);
                                    break;
                                }
                            }
                        });
                        if (className !== 'choosen') {
                            $(this).on('mouseover', function() {
                                $(this).css({
                                    'background': 'white',
                                    'cursor': 'pointer'
                                });
                                $(this).find('a').css('color', 'black');
                            });
                            $(this).on('mouseout', function() {
                                $(this).css({
                                    'background': 'transparent'
                                });
                                $(this).find('a').css('color', 'white');
                            });
                        }
                    });

                // Font

            } else {
                $("#font_item_content").animate({ height: "hide" }, 500);
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




