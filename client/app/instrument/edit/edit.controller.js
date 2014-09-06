'use strict';

angular.module('noisemakerApp')
  .controller('InstrumentEditCtrl', function ($scope, $state, $stateParams, instrumentService) {
    this.$inject = ['$scope', '$state', '$stateParams', 'instrumentService'];

    instrumentService.get($stateParams.id)
      .success(function (instrument) {
        $scope.instrument = instrument;
      });

    $scope.editorOptions = {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'twilight'
    };

    $scope.save = function () {
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
  });
