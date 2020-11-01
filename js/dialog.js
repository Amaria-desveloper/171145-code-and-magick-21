'use strict';

(function () {

  const dialogWindow = window.setup.querySelector(`.upload`);

  dialogWindow.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let initialCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

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

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogWindow.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogWindow.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

})();
