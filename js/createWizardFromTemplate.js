(function () {
  window.createWizardFromTemplate = function (template, data) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
      let element = template.cloneNode(true);
      element.querySelector(`.setup-similar-label`).textContent = data[i].name;
      element.querySelector(`.wizard-coat`).style.fill = data[i].coatColor;
      element.querySelector(`.wizard-eyes`).style.fill = data[i].eyesColor;
      fragment.appendChild(element);
    }
      return fragment;
  }
})();
