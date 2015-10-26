'use strict';

describe('Controller: StringshopCtrl', function () {

  // load the controller's module
  beforeEach(module('racketdropApp'));

  var StringshopCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StringshopCtrl = $controller('StringshopCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
