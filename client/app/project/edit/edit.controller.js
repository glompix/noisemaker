'use strict';

angular.module('noisemakerApp')
  .controller('ProjectEditCtrl', function ($scope, $state, $stateParams, projectService, instrumentService) {
    projectService.get($stateParams.id)
      .success(function (project) {
        $scope.project = project;
      });

    $scope.instrumentList = [];
    instrumentService.list().success(function (instruments) {
      $scope.instrumentList = instruments;
    });

    $scope.instrument = null;
    $scope.updateInstrument = function () {
      instrumentService.get($scope.instrumentSelection)
        .success(function (instrument) {
          $scope.instrument = instrument;
        });
    };

    Keyboard.hotkeys.register({
      keyCode: 'ctrl+s',
      keyDown: function () { $scope.save(); return false; }
    });

    $scope.save = function () {
      console.log('test');
      projectService.update($scope.project)
        .success(function(project) {
          $scope.project = project;
        });
    };

    $scope.delete = function () {
      projectService.delete($scope.project)
        .success(function() {
          $state.go('project.list.default');
        })
        .error(function (data) {
          console.log('ERROR', data);
        });
    };
  });
