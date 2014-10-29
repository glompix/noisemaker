'use strict';

angular.module('noisemakerApp')
  .controller('ProjectAddCtrl', function ($scope, $state, projectService) {
    $scope.add = function () {
      projectService.add(angular.copy($scope.project))
        .success(function(data) {
          $state.go('project.edit', { id: data._id });
        })
        .error(function(data) {
          console.log(data);
        });
    };
  });
