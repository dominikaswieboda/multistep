$(document).ready(function(){

    // Datapicker
    $('[data-toggle="datepicker"]').datepicker({
        language: 'pl-PL',
        autoHide: true,
    }).on('change', function () {
        $(this).valid()
    });

    //Validate datapicker
    $("#validate-data").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            datepicker: 'required',
        },
        messages: {
            datepicker: "Wybierz datę umowy",
        },
        invalidHandler: function(form, validator) {

            if (!validator.numberOfInvalids())
                return;
            $('html, body').animate({
                scrollTop: $(validator.errorList[0].element).offset().top
            }, 500);

        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});