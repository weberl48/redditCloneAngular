'use strict';
/* global app:true */
/* exported app */
/**
 * @ngdoc overview
 * @name redditCloneApp
 * @description
 * # redditCloneApp
 *
 * Main module of the application.
 */
var app = angular
  .module('redditCloneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
