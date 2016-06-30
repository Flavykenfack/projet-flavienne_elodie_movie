angular
  .module('app')
  .component('films', {
    templateUrl: 'app/films.html',
    controller: function (Enregistrer, $http) {
      var $ctrl = this;
      $http.get('http://amc.ig.he-arc.ch:3003/movie/upcoming?language=fr')
        .then(function (result) {
          $ctrl.films = result.data.results;
        });

      $ctrl.listeFilms = Enregistrer.charger('PanierSerializable');

      $ctrl.addItem = function (el) {
        $ctrl.listeFilms.push(el);
        Enregistrer.enregistrer($ctrl.listeFilms);
      };
      $ctrl.movieDansMaListe = function (testMovieId) {
        for (var i = 0, l = $ctrl.myMovies.length; i < l; ++i) {
          if ($ctrl.myMovies[i].id === testMovieId) {
            return true;
          }
        }
        return false;
      };


    }
  });
