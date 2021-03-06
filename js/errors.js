'use strict';
/*
* В случае ошибки: формируется окно с сообщением
* @param {String} errorMessage. errorMessage - на выбор в load.js
*/
(function () {
  const errorHandler = function (errorMessage) {
    const closeCard = window.util.closeCard;

    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;


    const p = document.createElement(`p`);
    p.style = `display: inherit`;
    p.textContent = errorMessage;

    const button = document.createElement(`button`);
    button.style = `display: block; width: 40px; height: 20px; border-radius: 4px; border-color: SkyBlue; background-color: seashell`;
    button.style.position = `absolute`;
    button.style.bottom = `2px`;
    button.style.fontSize = `12px`;
    button.textContent = `OK`;

    node.appendChild(p);
    node.appendChild(button);

    document.body.insertAdjacentElement(`afterbegin`, node);

    const buttonClickHandler = function () {
      closeCard(node);
    };

    const buttonEscHandler = function (evt) {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        closeCard(node);
      }
      document.removeEventListener(`keydown`, buttonEscHandler);
    };

    button.addEventListener(`click`, buttonClickHandler);
    document.addEventListener(`keydown`, buttonEscHandler);
  };


  window.errors = {
    errorHandler
  };

})();
