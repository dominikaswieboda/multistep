$(document).ready(function(){
    //Validate purpose-contract
    $("#expand-info, #expand-info2, #expand-info3, #expand-info4").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            radioOptions12: {
                required: true
            },
            formControlTextarea1: {
                required: true
            },
            inputAmount: {
                required: true
            },
            inputAmountWords: {
                required: true
            },
            currencyType: {
                required: true
            },
            currencyType2: {
                required: true
            },
            inputPeriod: {
                required: true
            }
        },
        messages: {
            radioOptions12: 'Wybierz prawidłowe pole',
            formControlTextarea1: "Proszę uzupełnić pole tekstowe",
            inputAmount: "Proszę wpisać kwotę",
            inputAmountWords: "Proszę wpiasć kwotę słownie",
            currencyType: "Proszę wybrać rodzaj waluty",
            currencyType2: "Proszę wybrać miesiąc lub rok",
            inputPeriod: "Proszę wpisać liczbę"
        },
        errorPlacement: function(error, element)
        {
            if ( element.is(":radio") )
            {
                error.appendTo( element.closest('.multistep-form__section') );
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