'use strict';

angular.module('noisemakerApp')
  .directive('instrumentEditor', ['d3Service', function (d3) {
    return {
      templateUrl: 'app/instrumentEditor/instrumentEditor.html',
      restrict: 'E',
      replace: true,
      scope: {
        instrument: '=',
        radius: '='
      },
      link: function (scope, element, attrs) {
        scope.radius = scope.radius || '30px';
        var svg = d3.select(element.find('svg')[0]);
        scope.$watch('instrument', function(newValue, _) {
          if (newValue) {
            loadInstrument();
          }
        });

        var drag = d3.behavior.drag()
          .origin(function (key) { return key; })
          .on('drag', function (key) {
            console.log('DRAGGING', key.x, d3.event.dx);
            key.x += d3.event.dx;
            key.y += d3.event.dy;
            var circle = d3.select(this);
            circle.attr('cx', key.x);
            circle.attr('cy', key.y);
          });

        function loadInstrument() {
          svg.selectAll('circle')
            .data(scope.instrument.keys)
            .enter().append('circle')
            .attr('class', 'key')
            .attr('r', scope.radius)
            .attr('cx', function(key) { return key.x; })
            .attr('cy', function(key) { return key.y; })
            .call(drag);

          scope.selectedKey = null;
          scope.addKey = function () {
            var key = {
              name: 'New Key',
              hotkey: '',
              x: 0,
              y: 0
            };
            scope.instrument.keys.push(key);
            scope.selectedKey = key;
          };
          scope.isSelected = function (key) {
            return scope.selectedKey && key && scope.selectedKey.name === key.name;
          };
          scope.select = function(key) {
            scope.selectedKey = key;
          };
        }
      }
    };
  }
]);
