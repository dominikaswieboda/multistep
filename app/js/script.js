import  "./add-person";
import "./validation/datepicker";
import "./validation/reveal-info";
import "./validation/get-info";
import "./validation/expand-info";
import "./add-confidential-info";
import "./tooltip";
import "./save-document";
import "./show-textarea";

// Nodelist Foreach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}