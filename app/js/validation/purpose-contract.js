$(document).ready(function(){
    //Validate purpose-contract
    $("#purpose-contract").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            radioOptions12: {
                required: true
            },
            formControlTextarea1: {
                required: true
            }
        },
        messages: {
            radioOptions12: 'Wybierz prawidłowe pole',
            formControlTextarea1: "Proszę uzupełnić pole tekstowe"
        },
        errorPlacement: function(error, element)
        {
            if ( element.is(":radio") )
            {
                error.appendTo( element.parents('.multistep-form__section') );
            }
            else
            { // This is the default behavior
                error.insertAfter( element );
            }
        },
        invalidHandler: function(form, validator) {

            if (!validator.numberOfInvalids())
                return;
            $('html, body').animate({
                scrollTop: $(validator.errorList[0].element).offset().top
            }, 500);

        }
    });
});