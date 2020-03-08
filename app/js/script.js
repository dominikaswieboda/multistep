import  "./add-person";
import "./validation/reveal-info";
import "./validation/get-info";

// Nodelist Foreach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

$(document).ready(function(){
  // Tooltip info
  $('[data-toggle="tooltip"]').tooltip();

  // Datapicker
  $('[data-toggle="datepicker"]').datepicker({
    language: 'pl-PL'
  });

  // Save document
  $(' .multistep-form__action--save .btn-save').on('click', function(e){
    e.preventDefault();
    var btnSave = $(this);
    var changeText = $('.change-text');
    var changeIcon = $('.icon-save');
    $(this).toggleClass('sending');
    changeText.text('zapisywanie');
    changeIcon.toggleClass('hidden');

    setTimeout(function(){
      btnSave.removeClass('sending');
      changeText.text('zapisano');
      btnSave.addClass('success');
      setTimeout(function () {
        btnSave.removeClass('success');
        changeText.text('zapisz i dokończ później');
        changeIcon.removeClass('hidden');
      }, 1000);
    },3000);

  })
});