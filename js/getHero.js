(function () {
  window.getHero = function () {
    return {
      name: window.util.getRandom(window.constants.LIST_NAMES) + ` ` + window.util.getRandom(window.constants.LIST_SURNAMES),
      coatColor: window.util.getRandom(window.constants.COLORS_FOR_CLOACKS),
      eyesColor: window.util.getRandom(window.constants.COLORS_FOR_EYES)
    }
  };
})();
