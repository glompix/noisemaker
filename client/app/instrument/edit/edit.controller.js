'use strict';

angular.module('noisemakerApp')
  .controller('InstrumentEditCtrl',  ['$scope', '$state', '$stateParams', 'instrumentService', 'd3Service', function ($scope, $state, $stateParams, instrumentService, d3) {

    instrumentService.get($stateParams.id)
      .success(function (instrument) {
        $scope.instrument = instrument;
      });

    $scope.editorOptions = {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'mbo'
    };

    Keyboard.hotkeys.register({
      keyCode: 'ctrl+s',
      keyDown: function () { $scope.save(); return false; }
    });

    $scope.save = function () {
      console.log('test');
      instrumentService.update($scope.instrument)
        .success(function(instrument) {
          $scope.instrument = instrument;
        });
    };

    $scope.delete = function () {
      instrumentService.delete($scope.instrument)
        .success(function() {
          $state.go('instrument.list.default');
        })
        .error(function (data) {
          console.log('ERROR', data);
        });
    };
  }]);
