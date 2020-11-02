'use strict';
/*
* возвращает цвет из констант
*/
(function () {
  window.setColorFor = {
    "coat": function (element) {
      element.style.fill = window.util.getRandom(window.constants.COLORS_FOR_CLOACKS);
    },
    "eyes": function (element) {
      element.style.fill = window.util.getRandom(window.constants.COLORS_FOR_EYES);
    },
    "fireball": function (element) {
      let color = window.util.getRandom(window.constants.COLORS_FOR_FIREBALL);
      element.style.background = color;
      return color;
    }
  };
})();
