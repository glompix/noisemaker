'use strict';

angular
  .module('noisemakerApp')
  .controller('InstrumentPreviewCtrl', function ($scope, $stateParams, instrumentService) {
    instrumentService.get($stateParams.id)
      .success(function(instrument){
        $scope.instrument = instrument;
      });
  });
