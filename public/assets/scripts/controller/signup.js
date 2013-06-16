(function (angular) {

	'use strict';

	angular
		.module('lunchroulette')
		.controller('SignUpCtrl', ['$scope', 'SIGNUP_PATH', function ($scope, SIGNUP_PATH) {

			$scope.submitForm = function submitForm() {
				$scope.formError = !$scope.LogInForm.$valid;
			};

		}]);

})(angular);