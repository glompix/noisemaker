'use strict';

function dockeyUp(e) {
  var hotkey = InstrumentContext.hotkeys[e.keyCode];
  console.log('keyup', hotkey);
  if (hotkey && hotkey.keyUp) {
    hotkey.keyUp();
  }
}
document.addEventListener('keyup', dockeyUp, false);

function dockeyDown(e) {
  var hotkey = InstrumentContext.hotkeys[e.keyCode];
  console.log('keydown', e.keyCode);
  if (hotkey && hotkey.keyDown) {
    hotkey.keyDown();
  }
}
document.addEventListener('keydown', dockeyDown, false);

angular.module('noisemakerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ui.codemirror',
  'd3',
  'ngLodash'
])
  .config(function ($urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  })

  .run(function(lodash, utilities) {
    lodash.mixin(utilities);
  });
