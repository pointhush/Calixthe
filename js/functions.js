$(document).ready(function() {
    $(function() {
        $(".faddingheader").addClass("load");
    });

    function navi() {
        $(".primenave").addClass("load");
    };
    setTimeout(navi, 1500);

    $('a[href^="#"]').click(function() {
        var id = $(this).attr("href");
        if (id === '#') {
            return;
        }
        $('html, body').animate({ scrollTop: $(id).offset().top }, 'slow');
    });
});