'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://brilliant-inferno-1363.firebaseio.com/posts/:id.json');
});
