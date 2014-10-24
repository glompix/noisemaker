'use strict';

var Keys = {
  import: {
    timbre: generateKeySetter(timbreKey)
  }
};

function generateKeySetter(f) {
  return function (keys) {
    InstrumentContext.keys = [];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      InstrumentContext.keys.push(f(key));
      InstrumentContext.hotkeys[keyCode(key.hotkey.key)] = key.hotkey;
    }
  };
}

// key = { descriptor, keyDown, keyUp, keyPress }
function keyCode(keyString) {
  keyString.charCodeAt(0);
}

function timbreKey(tkey) {
  // TODO: non-destructive behavior
  tkey:
  tkey.active = false;
  tkey.activate = function (key) {
    if (!key.active) {
      console.log('Activating sin wave at some hertz.');
      key.t.play();
      key.active = true;
    }
  };
  tkey.deactivate = function (key) {
    if (key.active) {
      console.log('Stopping sin wave at some hertz.');
      key.t.pause();
      key.active = false;
    }
  };
  return tkey;
}
