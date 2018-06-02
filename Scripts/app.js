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