describe('infoFilm component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('infoFilm', function () {
      return {
        templateUrl: 'app/infoFilm.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<infoFilm></infoFilm>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
