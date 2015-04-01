'use strict';

var app = angular
  .module('MusicConnect', ['ngRoute', 'ngAnimate', 'firebase'])

  .constant('BASE', 'https://musicconnect.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/post', {
        templateUrl: 'views/post-jam.html',
        controller: 'JamController'
      })
      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
      })
      .when('/browse-jams', {
        templateUrl: 'views/browse-jams.html',
        controller: 'JamController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });