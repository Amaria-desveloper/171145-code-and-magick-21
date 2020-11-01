'use strict';
/*
* Окно настроек персонажа
*/
(function () {
  const setup = window.setup;
  const wizardCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
  const wizardEyes = setup.querySelector(`.setup-wizard .wizard-eyes`);
  const fireball = setup.querySelector(`.setup-fireball-wrap`);

  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const createWizardFromTemplate = window.createWizardFromTemplate;

  const load = window.backend.load;
  const errorHandler = window.errors.errorHandler;
  const setWizardCoat = window.colorize.wizardCoat;
  const setWizardEyes = window.colorize.wizardEyes;
  const setFireballColor = window.colorize.fireballColor;

  setWizardCoat(wizardCoat);
  setWizardEyes(wizardEyes);
  setFireballColor(fireball);


  const successHandler = function (wizards) {
    similarListElement.appendChild(createWizardFromTemplate(similarWizardTemplate, wizards));
    document.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  load(successHandler, errorHandler);

})();
