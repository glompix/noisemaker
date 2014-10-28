'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Instrument = require('./instrument.model')

describe('GET /api/instruments', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/instruments')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('should respond with single Instrument', function(done) {
    request(app)
      .get('/api/instruments')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        // res.body.should.have.property('name');
        done();
      });
  });
});
