$(document).ready(function () {
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
    $("a.nav-link").on('click', function (event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        } // End if
    });
    //    for back2top scroll
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    }); //for scroll2top end

});

//$(window).scroll(function () {
//    var height = $(window).scrollTop();
//    if (height > 100) {
//        $('#back2Top').fadeIn();
//    } else {
//        $('#back2Top').fadeOut();
//    }
//});
//$(document).ready(function () {
//    $("#back2Top").click(function (event) {
//        event.preventDefault();
//        $("html, body").animate({
//            scrollTop: 0
//        }, 2000);
//        return false;
//    });
//
//});