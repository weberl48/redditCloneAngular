'use strict';
app.controller('PostsCtrl', function($scope){
  $scope.posts= [];
  $scope.post = {url: 'http://',title:""};

  $scope.submitPost = function ($scope) {
    $scope.posts.push($scope.post);
    $scope.post = {url:'http://', title:''};
  };
});
//controller for posts page
