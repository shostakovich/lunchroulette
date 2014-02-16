describe('headerButton', function () {

  var headerButton, $location;

  beforeEach(module('lunchroulette', inject(function ($provider) {
    $provider.service('$location', function () {
      return {
        path: angular.noop,
        url: angular.noop
      }
    });
  })));

  beforeEach(inject(function (_headerButton_, _$location_) {
    headerButton = _headerButton_;
    $location = _$location_;
  }));

  it('should be defined', function () {
    expect(headerButton.link).toBeDefined();
  });

  it('should generate a button-object', function () {
    var btnObj = headerButton.link({
      path: '/index',
      label: 'Start',
      icon: 'ion-ios7-arrow-right'
    })[0];
    spyOn($location, 'path');
    btnObj.tap();
    expect(btnObj.type).toEqual('button-positive button-icon');
    expect(btnObj.content).toEqual('<i class="ion-ios7-arrow-right"></i> Start');
    expect($location.path).toHaveBeenCalledWith('/index');
  });

});