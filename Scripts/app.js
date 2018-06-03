// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 400) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn("slow"); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut("slow"); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

$('body').on('mouseenter mouseleave', '.dropdown', function (e) {
    var _d = $(e.target).closest('.dropdown');
    _d.addClass('show');
    setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', _d.is(':hover'));
    }, 300);
});