'use strict';

describe('Controller: InstrumentListCtrl', function () {

  // load the controller's module
  beforeEach(module('noisemakerApp'));

  var InstrumentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstrumentCtrl = $controller('InstrumentListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
