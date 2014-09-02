'use strict';

angular.module('noisemakerApp')
  .controller('InstrumentEditCtrl', function ($scope, $state, $stateParams, instrumentService) {

    instrumentService.get($stateParams.id)
      .success(function (instrument) {
        $scope.instrument = instrument;
      });

    $scope.editorOptions = {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'http://localhost:9000/assets/themes/mbo.css'
    };

    $scope.save = function () {
      instrumentService.update($scope.instrument)
        .success(function(instrument) {
          console.log('SAVED: ', instrument);
          $scope.instrument = instrument;
        });
    };

    $scope.delete = function () {
      instrumentService.delete($scope.instrument)
        .success(function() {
          $state.go('instrument.default');
        })
        .error(function (data) {
          console.log('ERROR', data);
        });
    };
  });
