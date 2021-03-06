'use strict';
/*
* Открыть/закрыть попап
*/
window.popupButtonControl = (function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = window.setup.querySelector(`.setup-close`);

  const onPopupEscPress = function (evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closePopup();
    }
  };

  const openPopup = function () {
    window.setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = function () {
    window.setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      closePopup();
    }
  });
})();
