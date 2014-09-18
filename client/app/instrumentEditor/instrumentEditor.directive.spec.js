'use strict';

describe('Directive: instrumentEditor', function () {

  // load the directive's module and view
  beforeEach(module('noisemakerApp'));
  beforeEach(module('app/instrumentEditor/instrumentEditor.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<instrument-editor></instrument-editor>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the instrumentEditor directive');
  }));
});