(function (angular) {

'use strict';

angular
  .module('lunchroulette')
    .controller('SignUpCtrl', ['$scope', 'SIGNUP_PATH', function ($scope, SIGNUP_PATH) {
      $scope.submitForm = function submitForm() {
        console.log($scope);
        $scope.formError = !$scope.SignUpForm.$valid;
      };
    }]);
})(angular);