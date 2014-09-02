'use strict';

angular.module('noisemakerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('instrument', {
        templateUrl: 'app/instrument/instrument.html',
        url: '/instrument'
      })
      .state('instrument.preview', {
        url: '/preview/:id',
        templateUrl: 'app/instrument/preview/instrument.preview.html',
        controller: 'InstrumentPreviewCtrl'
      })
      .state('instrument.edit', {
        url: '/edit/:id',
        templateUrl: 'app/instrument/edit/instrument.edit.html',
        controller: 'InstrumentEditCtrl'
      })
      .state('instrument.add', {
        url: '/add',
        templateUrl: 'app/instrument/add/instrument.add.html',
        controller: 'InstrumentAddCtrl'
      });
  });
