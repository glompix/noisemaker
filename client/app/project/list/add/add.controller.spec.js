'use strict';

describe('Controller: ProjectAddCtrl', function () {

  // load the controller's module
  beforeEach(module('noisemakerApp'));

  var ProjectAddCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    ProjectAddCtrl = $controller('ProjectAddCtrl', { $scope: scope });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
