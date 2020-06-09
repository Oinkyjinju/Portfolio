$('#submit').on('click', function() {
    if ($('#next-fade').css('opacity') == 1) {
        $('#next-fade').css('opacity', 0);
    }
    else {
        $('#next-fade').css('opacity', 1);
    }
});
