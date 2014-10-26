'use strict';

// Instruments hook into this global.
var InstrumentContext = {

  // instrument state
  keys: [],

  // Utility objects
  KeyManager: {
    register: registerKeyClass,
    clear: function() {
      InstrumentContext.keys.length = 0;
    },
    import: {
      // map of key names to keyGenerators
    }
  }
};


function registerKeyClass(name, keyGenerator) {
  InstrumentContext.KeyManager.import[name] = registerKeys(keyGenerator);
};

function registerKeys(keyGenerator) {
  return function registerKeys(keyOpts) {
    InstrumentContext.keys = [];
    for (var i = 0; i < keyOpts.length; i++) {
      var opts = keyOpts[i];
      var key = keyGenerator(opts);
      InstrumentContext.keys.push(key);
      Keyboard.hotkeys.register(key.hotkey);
    }
  };
};
