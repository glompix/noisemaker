'use strict';

describe('Controller: InstrumentPreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('noisemakerApp'));

  var InstrumentPreviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstrumentPreviewCtrl = $controller('InstrumentPreviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
