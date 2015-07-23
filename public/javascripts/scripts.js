$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

$('.expand').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

$(window).bind('scroll', function(e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#parallax-1').css('top', 500 - (scrolled * 0.75) + 'px');
    $('#parallax-2').css('top', 1400 - (scrolled * 0.75) + 'px');
    $('#parallax-3').css('top', 1500 - (scrolled * 0.75) + 'px');
}