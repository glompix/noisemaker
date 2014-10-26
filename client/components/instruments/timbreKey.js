// key = { keychord, keyDown, keyUp, keyPress }
// TODO: non-destructive behavior
function timbre(opts) {
  opts.active = false;
  function activate() {
    if (!opts.active) {
      opts.t.play();
      opts.active = true;
    }
  };
  function deactivate() {
    if (opts.active) {
      opts.t.pause();
      opts.active = false;
    }
  };
  function draw() {
    // TODO
  };

  var keychord = opts.hotkey;
  return {
    active: false,
    activate: activate,
    deactivate: deactivate,
    draw: draw,
    x: opts.x,
    y: opts.y,
    hotkey: {
      keyCode: Keyboard.keycode(keychord),
      keyDown: activate,
      keyUp: deactivate
    }
  };
}

InstrumentContext.KeyManager.register('timbre', timbre);
