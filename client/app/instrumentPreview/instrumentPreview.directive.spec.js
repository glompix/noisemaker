'use strict';

describe('Directive: instrumentPreview', function () {

  // load the directive's module and view
  beforeEach(module('noisemakerApp'));
  beforeEach(module('app/instrumentPreview/instrumentPreview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<instrument-preview></instrument-preview>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the instrumentPreview directive');
  }));
});