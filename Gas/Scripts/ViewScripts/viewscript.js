$('.main_menu_item').each(function () {
    var linkArray = window.location.pathname.split('/');
    var pageName = linkArray[2];

    console.log($(this).attr("id"));
    console.log(pageName);

    if ($(this).attr("id").toLowerCase() === pageName.toLowerCase()) {
        $(this).find('a').click(function (e) {
            e.preventDefault();
        });
        $(this).css({ 'background': 'white' });
        $(this).find('a').css('color', 'black');
    }
    else {
        $(this).on('mouseover', function () {
            $(this).css({
                'background': 'white'
            });
            $(this).find('a').css('color', 'black');
        });
        $(this).on('mouseout', function () {
            $(this).css({
                'background': 'black'
            });
            $(this).find('a').css('color', 'white');
        });
    }
});