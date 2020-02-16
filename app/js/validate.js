$(document).ready(function(){
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
        submitHandler: function(form) {
            form.submit();
        }
    });
    //Validate reveal-info2
    $("#reveal-info2").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            radioOptions2: {
                required: true
            }
        },
        messages: {
            radioOptions2: 'Wybierz prawidłowe pole'
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
        submitHandler: function(form) {
            if($('#radio1')[0].checked) {
                form.action = '/ujawniajacy3b.html';
            } else {
                form.action = '/ujawniajacy34a.html';
            }
            form.submit();
        }
    });
    //Validate reveal-info34a
    $("#reveal-info34a").validate({
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
        submitHandler: function(form) {
            form.submit();
        }
    });
    //Validate reveal-info3b
    $("#reveal-info3b").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            radioOptions3b: {
                required: true
            }
        },
        messages: {
            radioOptions3b: 'Wybierz prawidłowe pole'
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
        submitHandler: function(form) {
            if($('#radio3')[0].checked) {
                form.action = '/ujawniajacy45b.html';
            } else {
                form.action = '/ujawniajacy46c.html';
            }
            form.submit();
        }
    });
    //Validate reveal-info45b
    $("#reveal-info45b").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputName45b: {
                required: true
            },
            inputUsername45b: {
                required: true
            },
            inputEmail45b: {
                required: true
            },
            inputPhone45b: {
                required: true
            }
        },
        messages: {
            inputName45b: 'Podaj imię',
            inputUsername45b: 'Podaj nazwisko',
            inputEmail45b: 'Podaj adres e-mail',
            inputPhone45b: 'Podaj numer telefonu',
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    //Validate reveal-info45b
    $("#reveal-info46c").validate({
        errorClass: "is-invalid",
        errorElement : 'div',
        focusInvalid: false,
        rules: {
            inputName46c: {
                required: true
            },
            inputUsername46c: {
                required: true
            },
            inputStatus46c: {
                required: true
            }
        },
        messages: {
            inputName46c: 'Podaj imię osoby reprezentującej',
            inputUsername46c: 'Podaj nazwisko osoby reprezentującej',
            inputStatus46c: 'Podaj status osoby reprezentującej',
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});