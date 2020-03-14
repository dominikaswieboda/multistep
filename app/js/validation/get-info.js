$(document).ready(function(){
    //Validate get-info2
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
                form.action = '/multistep/otrzymujacy3a.html';
            }
            form.submit();
        }
    });
    //Validate get-info34a
    $("#get-info3a, #get-info4a").validate({
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
            inputEmail89a: {
                required: true
            },
            inputPhone: {
                required: true
            }
        },
        messages: {
            inputName: 'Podaj imię',
            inputUsername: 'Podaj nazwisko',
            inputEmail89a: 'Podaj adres e-mail',
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
    //Validate get-info3b
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
                form.action = '/multistep/otrzymujacy4b.html';
            } else {
                form.action = '/multistep/otrzymujacy4c.html';
            }
            form.submit();
        }
    });
    //Validate get-info45b
    $("#get-info4b, #get-info5b").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputNameCompany: {
                required: true
            },
            inputName89b: {
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
            inputNameCompany: 'Podaj nazwę firmy',
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
    //Validate get-info46c
    $("#get-info4c, #get-info5c, #get-info6c").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputNameCompany911c: {
                required: true
            },
            inputEmail911c: {
                required: true
            },
            inputPhone911c: {
                required: true
            },
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
            inputNameCompany911c: 'Podaj nazwę firmy',
            inputEmail911c: 'Podaj adres e-mail',
            inputPhone911c: 'Podaj numer telefonu',
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