'use strict';

window.getHeroes = (function () {
  let heroes = [];
  for (let i = 0; i < 4; i++) {
    heroes.push(window.getHero(i));
  }
  return heroes;
});

