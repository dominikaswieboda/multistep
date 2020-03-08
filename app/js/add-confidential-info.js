$(document).ready(function() {
    $('.btn-add-info').click(function(e) {
        e.preventDefault();
        addCheckbox($('#add-value').val());
    });
});

function addCheckbox(name) {
    var container = $('.confidential-information');
    var inputs = container.find('input');
    var id = inputs.length+1;

    var input = $('<div />', { class: 'custom-control custom-checkbox'});
    $('<input />', { type: 'checkbox', class: 'custom-control-input', id: 'cb'+id, value: name, checked: 'checked'}).appendTo(input);
    $('<label />', { 'for': 'cb'+id, class: 'custom-control-label', text: name }).appendTo(input);
    input.appendTo(container);
}