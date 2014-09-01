'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InstrumentSchema = new Schema({
  name: String,
  info: String,
  code: String
});

module.exports = mongoose.model('Instrument', InstrumentSchema);