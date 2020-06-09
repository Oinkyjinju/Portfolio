$('#fadeout').on('click', function() {
    if ($('#body').css('opacity') == 1) {
        $('#body').css('opacity', 0);
    }
    else {
        $('#body').css('opacity', 1);
    }
});
