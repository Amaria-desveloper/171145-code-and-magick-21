'use strict';
/*
* Отвечает за смену цвета плаща, глаз, файербола
*/
(function () {
  const setup = document.querySelector(`.setup`);
  window.setup = setup;

  window.colorize = {
    "wizardCoat": function (element) {
      element.addEventListener(`click`, function () {
        window.setColorFor.coat(element);
        setup.querySelector(`input[name='coat-color']`).value = element.style.fill;
      });
    },

    "wizardEyes": function (element) {
      element.addEventListener(`click`, function () {
        window.setColorFor.eyes(element);
        setup.querySelector(`input[name='eyes-color']`).value = element.style.fill;
      });
    },

    "fireballColor": function (element) {
      element.addEventListener(`click`, function () {
        setup.querySelector(`input[name='fireball-color']`).value = window.setColorFor.fireball(element);
      });
    }
  };
})();
