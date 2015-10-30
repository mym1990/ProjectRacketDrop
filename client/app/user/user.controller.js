'use strict';

angular.module('racketdropApp')
  .controller('UserCtrl', function ($scope, Auth) {
    $scope.message = 'Hello';
    $scope.me = Auth.getCurrentUser();
  });
