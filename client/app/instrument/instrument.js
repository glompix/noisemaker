'use strict';

var _listView = {
  templateUrl: 'app/instrument/list/instrument.list.html',
  controller: 'InstrumentListCtrl'
};

angular.module('noisemakerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('instrument', {
        templateUrl: 'app/instrument/instrument.html',
        url: '/instrument',
        abstract: true
      })
      .state('instrument.default', {
        url: '',
        views: {
          'left': _listView,
          'right': {
            template: '<p>Select an instrument to preview</p>'
          }
        }
      })
      .state('instrument.preview', {
        url: '/preview/:id',
        views: {
          'left': _listView,
          'right': {
            templateUrl: 'app/instrument/preview/instrument.preview.html'
          }
        }
      })
      .state('instrument.edit', {
        url: '/edit/:id',
        views: {
          'left': _listView,
          'right': {
            templateUrl: 'app/instrument/edit/instrument.edit.html',
            controller: 'InstrumentEditCtrl'
          }
        }
      })
      .state('instrument.add', {
        url: '/add',
        views: {
          'left': _listView,
          'right': {
            templateUrl: 'app/instrument/add/instrument.add.html',
            controller: 'InstrumentAddCtrl'
          }
        }
      });
  });
