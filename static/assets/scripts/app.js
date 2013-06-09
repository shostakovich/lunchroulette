(function (angular) {

	'use strict';

	angular
		.module('lunchroulette', [])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'assets/templates/welcome.html'
				})
				.when('/sign-up', {
					templateUrl: 'assets/templates/sign-up.html',
					controller: 'SignUpCtrl'
				})
				.when('/log-in', {
					templateUrl: 'assets/templates/log-in.html',
					controller: 'LoginCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

})(angular);