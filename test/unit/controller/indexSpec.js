describe('IndexCtrl', function () {

  var $scope, Ctrl;

  beforeEach(module('lunchroulette'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    Ctrl = $controller('IndexCtrl', {
      $scope: $scope
    });
  }));

  it('should be defined', function () {
    expect(Ctrl).toBeDefined();
  });

  it('should have `rightButtons`', function () {
    expect($scope.rightButtons[0].tap).toEqual(jasmine.any(Function));
  });

});