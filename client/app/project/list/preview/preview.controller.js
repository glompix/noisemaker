'use strict';

angular
  .module('noisemakerApp')
  .controller('ProjectPreviewCtrl', function ($scope, $stateParams, projectService) {
    projectService.get($stateParams.id)
      .success(function(project) {
        $scope.project = project;
      });
  });
