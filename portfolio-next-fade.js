$('#submit').on('click', function() {
    if ($('#next-fade').css('opacity') == 0) {
        $('#next-fade').css('opacity', 1);
    }
    else {
        $('#next-fade').css('opacity', 0);
    }
});
