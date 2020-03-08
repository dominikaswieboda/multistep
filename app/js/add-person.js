$(document).ready(function(){
    //define template
    var template = $('.add-person__wrapper .add-person__content:first').clone();

    //define counter
    var sectionsCount = 1;

    // Add person
    $('body').on('click', '.btn-add', function (e) {
        //increment
        sectionsCount++;
        //loop through each input
        var section = template.clone().find(':input').each(function(){

            //set id to store the updated section number
            var newId = this.id + sectionsCount;

            //update for label
            $(this).prev().attr('for', newId);

            //update id
            this.id = newId;

        }).end()

        //inject new section
            .appendTo('.add-person__wrapper');
        return false;
    });
    //remove section
    $('.add-person__wrapper').on('click', '.btn-cancel', function() {
        //fade out section
        $('.btn-cancel').closest('.add-person__wrapper').find('.add-person__content').not(':first').last().remove();
        return false;
    });
});
