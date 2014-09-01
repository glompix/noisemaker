'use strict';

angular.module('noisemakerApp')
  .controller('InstrumentListCtrl', function ($scope, socket, instrumentService) {
    instrumentService.list().success(function(instruments) {
      $scope.instruments = instruments;
      socket.syncUpdates('instrument', $scope.instruments);      
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('instrument');
    });
  });
