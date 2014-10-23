'use strict';

angular.module('noisemakerApp')
  .directive('instrumentEditor', ['d3Service', 'lodash', function (d3, _) {
    return {
      templateUrl: 'app/instrumentEditor/instrumentEditor.html',
      restrict: 'E',
      replace: true,
      scope: {
        instrument: '=',
        radius: '='
      },
      link: function (scope, element, attrs) {
        function loadInstrument() {
          scope.selectedKey = null;
          scope.addKey = function () {
            var key = {
              name: 'New Key',
              hotkey: '',
              x: 0,
              y: 0,
              id: _.guid()
            };
            scope.instrument.keys.push(key);
            scope.selectedKey = key;
            console.log('new key', key);
          };
          scope.isSelected = function (key) {
            return scope.selectedKey && key && scope.selectedKey.id === key.id;
          };
          scope.select = function(key) {
            scope.selectedKey = key;
          };
        }
      }
    };
  }
]);
