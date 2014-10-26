'use strict';

angular.module('noisemakerApp')
  .directive('instrumentPreview', ['d3Service', 'lodash', function (d3, _) {
    return {
      templateUrl: 'app/instrumentPreview/instrumentPreview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var svg = d3.select(element.find('svg')[0]);
        scope.$watch('instrument', function(newValue) {
          if (newValue) {
            loadInstrument();
          }
        });

        function loadInstrument() {
          // eval('(function () { ' + scope.instrument.code + ' })();'); // unchecked eval for the win
          eval(scope.instrument.code);
          svg.selectAll('rect')
            .data(InstrumentContext.keys)
            .enter().append('rect')
            .attr('class', function(key) { return 'key ' + (key.active ? 'active' : ''); })
            .attr('width', 30)
            .attr('height', 30)
            .attr('x', function(key) { return key.x; })
            .attr('y', function(key) { return key.y; })
            .text('data-key', function(key) { return key.label })
            .on('click', toggle);

          function toggle(key, i) {
            if (key.active) { key.deactivate(); }
            else { key.activate(); }
            d3.event.stopPropagation();
          }

          _.each(scope.instrument.keys, function(key) {

          });
        }
      }
    };
  }]);
