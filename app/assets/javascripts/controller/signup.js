(function (angular) {

'use strict';

angular
  .module('lunchroulette')
    .controller('SignUpCtrl', ['$scope', '$http', 'SIGNUP_PATH', function ($scope, $http, SIGNUP_PATH) {
      $scope.addUser = function submitForm() {
          $scope.formError = !$scope.SignUpForm.$valid;

          if(!$scope.formError){
            $http.post('/users.json', {"user": $scope.newUser});
          }
      };
    }]);
})(angular);