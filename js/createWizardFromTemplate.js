'use strict';
/*
* Шаблон для похожего волшебника
*
*/
(function () {
  window.createWizardFromTemplate = function (template, data) {
    const MAX_SIMILAR_WIZARD_COUNT = 4;

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      let element = template.cloneNode(true);
      element.querySelector(`.setup-similar-label`).textContent = data[i].name;
      element.querySelector(`.wizard-coat`).style.fill = data[i].coatColor;
      element.querySelector(`.wizard-eyes`).style.fill = data[i].eyesColor;
      fragment.appendChild(element);
    }
    return fragment;
  };
})();
