function sampleKey(opts) {
  return {
    activate: function() {},
    deactivate: function() {},
    draw: function() {
      console.log('drawing at ', opts.x, opts.y);
    }
  };
}

InstrumentContext.KeyManager.register('sample', sampleKey);
