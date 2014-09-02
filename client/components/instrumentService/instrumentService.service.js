'use strict';

angular.module('noisemakerApp')
  .service('instrumentService', function ($http) {
    this.list = function () {
      return $http.get('/api/instruments');
    };
    this.get = function (id) {
      return $http.get('/api/instruments/' + id);
    };
    this.add = function(instrument) {
      return $http.post('/api/instruments', instrument);
    };
    this.update = function(instrument) {
      return $http.put('/api/instruments/' + instrument._id, instrument);
    };
    this.delete = function(instrument) {
      return $http.delete('/api/instruments/' + instrument._id);
    };
  });
