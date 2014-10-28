// key = { keychord, keyDown, keyUp, keyPress }
// TODO: non-destructive behavior
function timbre(opts) {
  var inputs = $(':input');
  function activate() {
    if (!key.active && !inputs.filter(':focus').length) {
      key.t.play();
      key.active = true;
      InstrumentContext.draw();
    }
  };
  function deactivate() {
    if (key.active) {
      key.t.pause();
      key.active = false;
      InstrumentContext.draw();
    }
  };
  function draw(svg) {
    var keyRects = svg.selectAll('rect').data(InstrumentContext.keys);
    keyRects.enter().append('rect');
    keyRects
      .attr('class', function(key) { return 'key' + (key.active ? ' active' : ''); })
      .attr('width', 30)
      .attr('height', 30)
      .attr('x', function(key) { return key.x; })
      .attr('y', function(key) { return key.y; })
      .attr('data-key', function(key) { return key.label });
    keyRects.exit().remove();
  };

  var key = {
    active: false,
    t: opts.t,
    x: opts.x, y: opts.y,
    hotkey: {
      keyCode: opts.hotkey,
      keyDown: activate,
      keyUp: deactivate
    },
    draw: draw
  };
  return key;
}

InstrumentContext.KeyManager.register('timbre', timbre);
