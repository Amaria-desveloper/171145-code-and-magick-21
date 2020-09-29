"use strict";

const setupHero = document.querySelector(`.setup`).classList.remove(`hidden`);
const similarList = document.querySelector(`.setup-similar`).classList.remove(`hidden`);

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


const getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

let heroes = [];
const getHero = function (names, surnames, colorCloack, colorEyes) {

  for (let i = 0; i < 3; i++) {
    heroes[i] = {
      name: getRandom(names) + ` ` + getRandom(surnames),
      coatColor: getRandom(colorCloack),
      eyesColor: getRandom(colorEyes)
    };
    heroes.push(heroes[i]);
  }
  return heroes;
};

heroes = getHero(
    LIST_NAMES,
    LIST_SURNAMES,
    COLORS_FOR_CLOACKS,
    COLORS_FOR_EYES
);


const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);


heroes.forEach(function (hero) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = hero.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = hero.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = hero.eyesColor;

  similarListElement.appendChild(wizardElement);
});

