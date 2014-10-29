'use strict';

angular.module('noisemakerApp')
  .controller('ProjectListCtrl', function ($scope, socket, projectService) {
    projectService.list().success(function(projects) {
      $scope.projects = projects;
      socket.syncUpdates('project', $scope.projects);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('project');
    });
  });
