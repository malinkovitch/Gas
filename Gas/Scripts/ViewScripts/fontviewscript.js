// Handler of font content
$("#font_item_showbutton_img").rotate({
    bind: {
        click: function () {
            var prnt = $(this).closest("section");
            console.log("find parent " + prnt.attr("id"));

            // check angle of cross button
            var angle = $(this).getRotateAngle();
            console.log(angle);
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
                $("#font_item_content").animate({ height: "show" }, 500);
                // opened window

                // handler of select type of font menu
                $('.font_menu_item').each(function () {
                    $(this).on('mouseover', function () {
                        $(this).css({
                            'background': 'white',
                            'cursor':'pointer'
                        });
                        $(this).find('a').css('color', 'black');
                    });
                    $(this).on('mouseout', function () {
                        $(this).css({
                            'background': 'transparent'
                        });
                        $(this).find('a').css('color', 'white');
                    });
                });

            } else {
                $("#font_item_content").animate({ height: "hide" }, 500);
            }
        }
    }
});

$('#cyrilic_fonts').click(function () {
    //alert("sdsdsd");
        $.ajax({
            url: '@Url.Action("GetFontBlockView","Font")',
            type: 'GET'
    })
    .done(function (partialViewHtml) {
        $('#font_cyr_img').html(partialViewHtml);
    })
});





