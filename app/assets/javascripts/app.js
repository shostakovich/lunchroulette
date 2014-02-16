angular.module('lunchroulette', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('index', {
        url: '/',
        templateUrl: 'assets/templates/index.html',
        controller: 'IndexCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'assets/templates/login.html',
        // controller: 'LoginCtrl'
      });

    $urlRouterProvider.otherwise('/');

}]);