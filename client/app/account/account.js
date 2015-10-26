'use strict';

angular.module('racketdropApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('strings', {
        url: '/stringshop',
        templateUrl: 'app/stringshop/stringshop.html',
        controller: 'ItemIndexController',
        controllerAs: 'ctrl',
        authenticate: true
      })
      .state('stringDetail', {
        url: '/stringshop/:stringId',
        templateUrl: 'app/stringshop/show.html',
        controller: 'StringShowController',
        controllerAs: 'ctrl',
        authenticate: true
      });
  });
