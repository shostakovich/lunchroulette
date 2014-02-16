angular.module('lunchroulette')

.controller('IndexCtrl', ['$scope', 'headerButton', function ($scope, headerButton) {

  /**
   * Defining the login-button
   */
  $scope.rightButtons = headerButton.link({
    path: '/login',
    icon: 'ion-log-in'
  });

}]);