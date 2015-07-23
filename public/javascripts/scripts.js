$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

$('.expand').click(function() {
    $(this).parent().toggleClass('active');
});