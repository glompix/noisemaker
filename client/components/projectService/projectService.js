'use strict';

angular.module('noisemakerApp')
  .service('projectService', function ($http) {
    this.list = function () {
      return $http.get('/api/projects');
    };
    this.get = function (id) {
      return $http.get('/api/projects/' + id);
    };
    this.add = function(project) {
      return $http.post('/api/projects', project);
    };
    this.update = function(project) {
      return $http.put('/api/projects/' + project._id, project);
    };
    this.delete = function(project) {
      return $http.delete('/api/projects/' + project._id);
    };
  });
