'use strict';

const LIST_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const LIST_SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

const COLORS_FOR_CLOACKS = [
  `rgb(101,137,164)`,
  `rgb(241,43,107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const COLORS_FOR_EYES = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const COLORS_FOR_FIREBALL = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];


const getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getHero = function () {
  return {
    name: getRandom(LIST_NAMES) + ` ` + getRandom(LIST_SURNAMES),
    coatColor: getRandom(COLORS_FOR_CLOACKS),
    eyesColor: getRandom(COLORS_FOR_EYES)
  };
};

const getHeroes = function () {
  let heroes = [];
  for (let i = 0; i < 4; i++) {
    heroes.push(getHero(i));
  }
  return heroes;
};


const createWizardFromTemplate = function (template, data) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    let element = template.cloneNode(true);
    element.querySelector(`.setup-similar-label`).textContent = data[i].name;
    element.querySelector(`.wizard-coat`).style.fill = data[i].coatColor;
    element.querySelector(`.wizard-eyes`).style.fill = data[i].eyesColor;
    fragment.appendChild(element);
  }
  return fragment;
};

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

similarListElement.appendChild(createWizardFromTemplate(similarWizardTemplate, getHeroes()));


/* открытие/закрытие окна настройки персонажа */
const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});


/* установка цветов */
const setColor = {
  "coat": function (element) {
    element.style.fill = getRandom(COLORS_FOR_CLOACKS);
  },
  "eyes": function (element) {
    element.style.fill = getRandom(COLORS_FOR_EYES);
  },
  "fireball": function (element) {
    let color = getRandom(COLORS_FOR_FIREBALL);
    element.style.background = color;
    return color;
  }
};


const setupWizardCoat = function (element) {
  element.addEventListener(`click`, function () {
    setColor.coat(element);
    setup.querySelector(`input[name='coat-color']`).value = element.style.fill;
  });
};


const setupWizardEyes = function (element) {
  element.addEventListener(`click`, function () {
    setColor.eyes(element);
    setup.querySelector(`input[name='eyes-color']`).value = element.style.fill;
  });
};


const setupFireballColor = function (element) {
  element.addEventListener(`click`, function () {
    setup.querySelector(`input[name='fireball-color']`).value = setColor.fireball(element);
  });
};


setupWizardCoat(setup.querySelector(`.setup-wizard .wizard-coat`));
setupWizardEyes(setup.querySelector(`.setup-wizard .wizard-eyes`));
setupFireballColor(setup.querySelector(`.setup-fireball-wrap`));
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
