$(document).ready(function(){
    //Validate reveal-info2
    $("#get-info2").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            radioOptions7: {
                required: true
            }
        },
        messages: {
            radioOptions7: 'Wybierz prawidłowe pole'
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

        },
        submitHandler: function(form) {
            if($('#radio7')[0].checked) {
                form.action = '/multistep/otrzymujacy3b.html';
            } else {
                form.action = '/multistep/otrzymujacy34a.html';
            }
            form.submit();
        }
    });
    //Validate reveal-info34a
    $("#get-info34a").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputName: {
                required: true
            },
            inputUsername: {
                required: true
            },
            inputEmail4: {
                required: true
            },
            inputPhone: {
                required: true
            }
        },
        messages: {
            inputName: 'Podaj imię',
            inputUsername: 'Podaj nazwisko',
            inputEmail4: 'Podaj adres e-mail',
            inputPhone: 'Podaj numer telefonu',
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
    //Validate reveal-info3b
    $("#get-info3b").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            radioOptions7b: {
                required: true
            }
        },
        messages: {
            radioOptions7b: 'Wybierz prawidłowe pole'
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

        },
        submitHandler: function(form) {
            if($('#radio7b')[0].checked) {
                form.action = '/multistep/otrzymujacy45b.html';
            } else {
                form.action = '/multistep/otrzymujacy46c.html';
            }
            form.submit();
        }
    });
    //Validate reveal-info45b
    $("#get-info45b").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputName45b: {
                required: true
            },
            inputUsername89b: {
                required: true
            },
            inputEmail89b: {
                required: true
            },
            inputPhone89b: {
                required: true
            }
        },
        messages: {
            inputName89b: 'Podaj imię',
            inputUsername89b: 'Podaj nazwisko',
            inputEmail89b: 'Podaj adres e-mail',
            inputPhone89b: 'Podaj numer telefonu',
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
    //Validate reveal-info45b
    $("#get-info46c").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputName911c: {
                required: true
            },
            inputUsername911c: {
                required: true
            },
            inputStatus911c: {
                required: true
            }
        },
        messages: {
            inputName911c: 'Podaj imię osoby reprezentującej',
            inputUsername911c: 'Podaj nazwisko osoby reprezentującej',
            inputStatus911c: 'Podaj status osoby reprezentującej',
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