'use strict';

angular.module('noisemakerApp')
  .directive('instrumentPreview', ['d3Service', 'lodash', function (d3, _) {

    return {
      templateUrl: 'app/instrumentPreview/instrumentPreview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var svg = d3.select(element.find('svg')[0]);
        InstrumentContext.draw = function () { InstrumentContext.drawBase(svg); };
        scope.$watch('instrument', function(newValue) {
          if (newValue) {
            // eval('(function () { ' + scope.instrument.code + ' })();'); // unchecked eval for the win
            eval(scope.instrument.code);
            InstrumentContext.draw();
          }
        });
      }
    };
  }]);
