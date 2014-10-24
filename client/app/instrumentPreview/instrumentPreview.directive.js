'use strict';

angular.module('noisemakerApp')
  .directive('instrumentPreview', ['d3Service', 'lodash', function (d3, _) {
    return {
      templateUrl: 'app/instrumentPreview/instrumentPreview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.radius = scope.radius || '30px';
        var svg = d3.select(element.find('svg')[0]);
        scope.$watch('instrument', function(newValue) {
          if (newValue) {
            loadInstrument();
          }
        });

        function loadInstrument() {
          eval(scope.instrument.code); // unchecked eval for the win

          svg.selectAll('circle')
            .data(InstrumentContext.keys)
            .enter().append('circle')
            .attr('class', 'key')
            .attr('r', scope.radius)
            .attr('cx', function(key) { return key.x; })
            .attr('cy', function(key) { return key.y; })
            .on('click', toggle);

          function toggle(key, i) {
            console.log(key);
            if (key.active) { key.deactivate(key); }
            else { key.activate(key); }
            d3.event.stopPropagation();
          }

          _.each(scope.instrument.keys, function(key) {

          });
        }
      }
    };
  }]);
