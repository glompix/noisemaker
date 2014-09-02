'use strict';

describe('Controller: InstrumentEditCtrl', function () {

  // load the controller's module
  beforeEach(module('noisemakerApp'));

  var InstrumentAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstrumentAddCtrl = $controller('InstrumentEditCtrl', {
      $scope: scope,
      $state: null,
      $stateParams: { id: 1 },
      instrumentService: null
    });
  }));

  it('should ...', function () {
  });
});
