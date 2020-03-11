$(document).ready(function() {
    var btnAdd = $('.btn-add-info');
    var inputAdd = $('#add-value');

    btnAdd.on('click', function (e) {
        e.preventDefault();
        if(inputAdd.val() == '') {
            $('.add-info__error').addClass('is-invalid');
        } else {
            addCheckbox(inputAdd.val());
            $('.add-info__error').removeClass('is-invalid');
            inputAdd.val('');
        }
    });

    function addCheckbox(name) {
        var container = $('.confidential-information');
        var inputs = container.find(inputAdd);
        var id = inputs.length+1;

        var input = $('<div />', { class: 'custom-control custom-checkbox'});
        $('<input />', { type: 'checkbox', class: 'custom-control-input', id: 'cb'+id, value: name, checked: 'checked'}).appendTo(input);
        $('<label />', { 'for': 'cb'+id, class: 'custom-control-label', text: name }).appendTo(input);
        input.appendTo(container);
    }

});