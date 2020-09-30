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


const getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};


const getHeroes = function () {
  let heroes = [];
  for (let i = 0; i < 4; i++) {
    heroes.push(
        {
          name: getRandom(LIST_NAMES) + ` ` + getRandom(LIST_SURNAMES),
          coatColor: getRandom(COLORS_FOR_CLOACKS),
          eyesColor: getRandom(COLORS_FOR_EYES)
        }
    );
  }
  return heroes;
};

let myHeroes = getHeroes();


const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

myHeroes.forEach(function (myHero) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = myHero.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = myHero.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = myHero.eyesColor;

  similarListElement.appendChild(wizardElement);
});

document.querySelector(`.setup`).classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
