'use strict';

angular.module('noisemakerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('instrument', {
        url: '/instrument',
        templateUrl: 'app/instrument/instrument.html',
        abstract: true
      })
      .state('instrument.list', {
        url: '',
        templateUrl: 'app/instrument/list/list.html',
        controller: 'InstrumentListCtrl',
        abstract: true
      })
      .state('instrument.list.default', {
        url: '',
        templateUrl: '/app/instrument/list/list.default.html'
      })
      .state('instrument.list.preview', {
        url: '/preview/:id',
        templateUrl: 'app/instrument/list/preview/preview.html',
        controller: 'InstrumentPreviewCtrl'
      })
      .state('instrument.list.add', {
        url: '/add',
        templateUrl: 'app/instrument/list/add/add.html',
        controller: 'InstrumentAddCtrl'
      })
      .state('instrument.edit', {
        url: '/edit/:id',
        templateUrl: 'app/instrument/edit/edit.html',
        controller: 'InstrumentEditCtrl'
      });
  });
