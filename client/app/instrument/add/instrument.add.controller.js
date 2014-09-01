'use strict';

angular.module('noisemakerApp')
  .controller('InstrumentAddCtrl', function ($scope, $state, instrumentService) {
    $scope.add = function () {
      instrumentService.add(angular.copy($scope.instrument))
        .success(function(data) {
          $state.go('instrument.edit', { id: data._id });
        })
        .error(function(data) {
          console.log(data);
        });
    };
  });
