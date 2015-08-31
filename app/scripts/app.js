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
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://brilliant-inferno-1363.firebaseio.com/posts/:id.json')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })

      .when('/posts/:postId', {
    templateUrl: 'views/showpost.html',
    controller: 'PostViewCtrl'
  })

      .otherwise({
        redirectTo: '/'
      });
  });
