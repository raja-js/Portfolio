$(document).ready(function(){
$(".nav-link").click(function (e){

    e.preventDefault();
    target = $(this.hash).offset().top;
    $("html, body").animate({
        scrollTop: target
    }, 800);
   
});
});

