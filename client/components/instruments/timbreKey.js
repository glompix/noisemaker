// key = { descriptor, keyDown, keyUp, keyPress }
// TODO: non-destructive behavior
function timbre(tkey) {
  tkey.active = false;
  function activate() {
    if (!tkey.active) {
      tkey.t.play();
      tkey.active = true;
    }
  };
  function deactivate() {
    if (tkey.active) {
      tkey.t.pause();
      tkey.active = false;
    }
  };
  function draw() {
    // TODO
  };

  var keychord = tkey.hotkey
  tkey.hotkey = {
    keyCode: keycode(keychord),
    keyDown: activate,
    keyUp: deactivate
  };
  tkey.activate = activate;
  tkey.deactivate = deactivate;
  tkey.draw = draw;
  return tkey;
}

InstrumentContext.KeyManager.register('timbre', timbre);
