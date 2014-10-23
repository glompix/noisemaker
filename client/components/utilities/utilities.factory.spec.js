'use strict';

describe('Service: utilities', function () {

  // load the service's module
  beforeEach(module('noisemakerApp'));

  // instantiate service
  var utilities;
  beforeEach(inject(function (_utilities_) {
    utilities = _utilities_;
  }));

  it('should exist', function () {
    expect(utilities).toBeTruthy();
  });

  it('should return guids', function () {
    var result = utilities.guid();
    var guidLang = /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i;
    expect(result.match(guidLang)).toBeTruthy();
  });

});
