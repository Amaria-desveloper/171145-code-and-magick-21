'use strict';

(function () {

  const dialogWindow = window.setup.querySelector(`.setup-title`);

  dialogWindow.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let initialCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      const shift = {
        x: initialCoordinates.x - moveEvt.clientX,
        y: initialCoordinates.y - moveEvt.clientY
      };

      initialCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.style.top = (window.setup.offsetTop - shift.y) + `px`;
      window.setup.style.left = (window.setup.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

})();
