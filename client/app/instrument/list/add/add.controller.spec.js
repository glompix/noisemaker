'use strict';

describe('Controller: InstrumentAddCtrl', function () {

  // load the controller's module
  beforeEach(module('noisemakerApp'));

  var InstrumentAddCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    InstrumentAddCtrl = $controller('InstrumentAddCtrl', { $scope: scope });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
