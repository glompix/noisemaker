'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Project = new Schema({
  name: { type: String, required: true },
  info: String,
  code: String,
  keys: [{
    name: { type: String, required: true, unique: true },
    hotkey: String,
    x: Number,
    y: Number
  }]
});

module.exports = mongoose.model('Project', Project);
