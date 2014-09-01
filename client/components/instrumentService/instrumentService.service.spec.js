'use strict';

describe('Service: instrumentService', function () {

  // load the service's module
  beforeEach(module('noisemakerApp'));

  // instantiate service
  var instrumentService;
  beforeEach(inject(function (_instrumentService_) {
    instrumentService = _instrumentService_;
  }));

  it('should do something', function () {
    expect(!!instrumentService).toBe(true);
  });

});
