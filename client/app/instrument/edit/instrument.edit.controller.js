'use strict';

angular.module('noisemakerApp')
  .controller('InstrumentEditCtrl', function ($scope, $state, $stateParams, instrumentService) {

    instrumentService.get($stateParams.id)
      .success(function (instrument) {
        $scope.instrument = instrument;
      });

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
