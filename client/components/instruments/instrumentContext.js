'use strict';

// Instruments hook into this global.
var InstrumentContext = {

  // instrument state
  keys: [],
  hotkeys: {
    // { keyCode, keyDown, keyUp, keyPress }
  },

  // Utility objects
  KeyManager: {
    register: registerKeyClass,
    import: {
      // map of key names to keyGenerators
    }
  }
};


function registerKeyClass(name, keyGenerator) {
  InstrumentContext.KeyManager.import[name] = registerKeys(keyGenerator);
};

function registerKeys(keyGenerator) {
  return function registerKeys(keys) {
    InstrumentContext.keys = [];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      InstrumentContext.keys.push(keyGenerator(key));
      InstrumentContext.hotkeys[key.hotkey.keyCode] = key.hotkey;
    }
  };
};
