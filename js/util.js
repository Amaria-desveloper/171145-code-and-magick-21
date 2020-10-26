'use strict';

(function () {
  window.util = {
    "getRandom": function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  };
})();
