(function (angular) {

	'use strict';

	angular
		.module('lunchroulette')
		.controller('LoginCtrl', ['$scope', 'LOGIN_PATH', function ($scope, LOGIN_PATH) {

			$scope.submitForm = function submitForm() {
				console.log($scope);
				$scope.formError = !$scope.LogInForm.$valid;
			};
		}]);

})(angular);