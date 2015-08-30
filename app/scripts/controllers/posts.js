'use strict';
app.controller('PostsCtrl', function ($scope, Post) {
    $scope.posts = Post.get();
    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function () {
      // $scope.posts.push($scope.post);
      Post.save($scope.post);
      $scope.post = {url: 'http://', title: ''};
    };
    $scope.deletePost = function (postId) {
      // $scope.posts.splice(index, 1);
      Post.deletePost = function (postId){
        Post.delete({id: postId}, function (){
          delete $scope.posts[postId];
        });
      };
};
Post.save($scope.post, function (ref) {
  $scope.posts[ref.name] = $scope.post;
  $scope.post = {url: 'http://', title: ''};
});

  });
//controller for posts page
