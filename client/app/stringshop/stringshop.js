'use strict';

angular.module('racketdropApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stringshop', {
        url: '/stringshop',
        templateUrl: 'app/stringshop/stringshop.html',
        controller: 'StringshopCtrl'
      });
  });