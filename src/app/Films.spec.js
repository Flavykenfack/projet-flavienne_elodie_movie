describe('films component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('films', function () {
      return {
        templateUrl: 'app/Films.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<films></films>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
