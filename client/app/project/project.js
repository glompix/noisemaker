'use strict';

angular.module('noisemakerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/project.html',
        abstract: true
      })
      .state('project.list', {
        url: '',
        templateUrl: 'app/project/list/list.html',
        controller: 'ProjectListCtrl',
        abstract: true
      })
      .state('project.list.default', {
        url: '',
        templateUrl: '/app/project/list/list.default.html'
      })
      .state('project.list.preview', {
        url: '/preview/:id',
        templateUrl: 'app/project/list/preview/preview.html',
        controller: 'ProjectPreviewCtrl'
      })
      .state('project.list.add', {
        url: '/add',
        templateUrl: 'app/project/list/add/add.html',
        controller: 'ProjectAddCtrl'
      })
      .state('project.edit', {
        url: '/edit/:id',
        templateUrl: 'app/project/edit/edit.html',
        controller: 'ProjectEditCtrl'
      });
  });
