function infoFilmController($stateParams) {
  var $ctrl = this;
  $ctrl.text = 'film: ' + $stateParams.infoFilmId;
}

angular
  .module('app')
  .component('infoFilm', {
    templateUrl: 'app/infoFilm.html',
    controller: infoFilmController
  });

