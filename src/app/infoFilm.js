function infoFilmController($stateParams, $http) {
  var $ctrl = this;
  $http.get('https://amc.ig.he-arc.ch/tmdb/movie/' + $stateParams.infoFilmId + '?language=fr')
    .then(function (result) {
      $ctrl.unFilm = result.data;
    });
}

angular
  .module('app')
  .component('infoFilm', {
    templateUrl: 'app/infoFilm.html',
    controller: infoFilmController
  });

