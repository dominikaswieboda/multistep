$(document).ready(function(){
    // Save document
    $(' .multistep-form__action--save .btn-save').on('click', function(e){
        e.preventDefault();
        var btnSave = $(this);
        var changeText = $('.change-text');
        var changeIcon = $('.icon-save');
        $(this).toggleClass('sending');
        changeText.text('zapisywanie');
        changeIcon.toggleClass('hidden');

        setTimeout(function(){
            btnSave.removeClass('sending');
            changeText.text('zapisano');
            btnSave.addClass('success');
            setTimeout(function () {
                btnSave.removeClass('success');
                changeText.text('zapisz i dokończ później');
                changeIcon.removeClass('hidden');
            }, 1000);
        },3000);
    });
});