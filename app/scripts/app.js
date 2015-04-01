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
        templateUrl: 'views/post.html',
      })
      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });