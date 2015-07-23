$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});

$('.expand').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});