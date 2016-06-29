describe('panier component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('panier', function () {
      return {
        templateUrl: 'app/Panier.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<panier></panier>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
