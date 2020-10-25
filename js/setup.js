'use strict';

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

similarListElement.appendChild(window.createWizardFromTemplate(similarWizardTemplate, window.getHeroes()));

window.colorize.wizardCoat(window.setup.querySelector(`.setup-wizard .wizard-coat`));
window.colorize.wizardEyes(window.setup.querySelector(`.setup-wizard .wizard-eyes`));
window.colorize.fireballColor(window.setup.querySelector(`.setup-fireball-wrap`));
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
