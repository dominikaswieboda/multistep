$(document).ready(function () {
    // Tooltip info
    $(function () {
        $('.multistep-form__tooltip-parent').myTooltip();
    });

    $.fn.myTooltip = function () {

        var $this = $(this),
            $tooltip = $this.find('.tooltip');

        $('.trigger').mouseenter(function () {
            $('.tooltip').addClass('show');
        });
        $this.mouseleave(function () {
            $('.tooltip').removeClass('show');
        });
        $tooltip.click(function () {
            $('.tooltip').stop(true, true).toggleClass('show');
        });
    };
});