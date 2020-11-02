'use strict';
/*
* Условия валидации и отправки формы.
*/
(function () {
  const save = window.backend.save;
  const userNameInput = document.querySelector(`.setup-user-name`);
  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`.setup-wizard-form`);
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  userNameInput.addEventListener(`input`, function () {
    let valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
    } else {
      userNameInput.setCustomValidity(``);
    }

    userNameInput.reportValidity();
  });


  const submitHandler = function (evt) {
    save(new FormData(form), function () {
      userDialog.classList.add(`hidden`);
    });
    evt.preventDefault();
  };

  form.addEventListener(`submit`, submitHandler);
})();
