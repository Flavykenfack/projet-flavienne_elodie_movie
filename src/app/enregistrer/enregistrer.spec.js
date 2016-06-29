describe('Enregistrer service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Enregistrer) {
    expect(Enregistrer.getData()).toEqual(3);
  }));
});
