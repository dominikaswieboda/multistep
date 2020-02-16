import {RevealInfo} from "./reveal-info";
import "./validate";

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
  //Tooltip info
  $('[data-toggle="tooltip"]').tooltip();

  //Datepicker
  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap4',
  });
});