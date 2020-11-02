'use strict';
/*
* Работа с сервером данных.
*/
(function () {
  const URL_POST = `https://21.javascript.pages.academy/code-and-magick`;
  const URL_DATA = `https://21.javascript.pages.academy/code-and-magick/data`;
  const TIMEOUT = 10000;

  const StatusCode = {
    OK: 200
  };

  function save(data, onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      onSuccess(xhr.response);
    });

    xhr.open(`POST`, URL_POST);
    xhr.send(data);
  }


  function load(onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      let error = ``;
      switch (xhr.status) {
        case StatusCode.OK:
          onSuccess(xhr.response);
          break;

        case 400:
          error = `Неверный запрос`;
          break;
        case 404:
          error = `Ничего не найдено. (По этому URL пусто)`;
          break;

        default:
          onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }

      if (error) {
        onError(error);
      }
    });


    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });

    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + TIMEOUT + `мс`);
    });

    xhr.open(`GET`, URL_DATA);
    xhr.send();
  }

  window.backend = {
    save,
    load
  };

})();
