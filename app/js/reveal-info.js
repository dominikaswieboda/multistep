var RevealInfo = $(document).ready(function(){
    // Check option in reveal-info
    //  Reveal-info2
    // $('[name="RadioOptions2"]').on('change', function (e) {
    //     var next = $('#next');
    //     if(this.value == 'option1') {
    //         next.attr('href', '/ujawniajacy3b.html')
    //     } else {
    //         next.attr('href', '/ujawniajacy34a.html')
    //     }
    // });

    //  Reveal-info3b
    // $('[name="RadioOptions3b"]').on('change', function (e) {
    //     var next = $('#next');
    //     if(this.value == 'option1') {
    //         next.attr('href', '/ujawniajacy45b.html')
    //     } else {
    //         next.attr('href', '/ujawniajacy46c.html')
    //     }
    // });

    // Add person in reveal-info46c
    $('.add-person .btn-add, .add-person .btn--cancel').click(function (e) {
        e.preventDefault();
        $(this).closest('.add-person').find('.add-person__content--expand').fadeToggle(300);
    });
});

export { RevealInfo }