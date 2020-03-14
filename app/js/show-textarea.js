$(document).ready(function(){
    //Show textarea
    $('[name="radioOptions12"]').on('change', function () {
        if(this.value == 'option1') {
            $('.multistep-form__section--show').addClass('active');
        } else {
            $('.multistep-form__section--show').removeClass('active');
        }
    });
});