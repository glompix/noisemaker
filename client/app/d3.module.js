'use strict';

angular.module('d3', [])
  .factory('d3Service', ['$window', function($window){
    return $window.d3;
  }]);
