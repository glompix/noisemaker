'use strict';

describe('Controller: ProjectPreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('noisemakerApp'));

  var ProjectPreviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectPreviewCtrl = $controller('ProjectPreviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
