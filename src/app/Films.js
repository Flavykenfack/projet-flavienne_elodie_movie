angular
  .module('app')
  .component('films', {
    templateUrl: 'app/films.html',
    controller: function (Enregistrer, $http) {
      var $ctrl = this;
      $http.get('https://amc.ig.he-arc.ch/tmdb/movie/upcoming?language=fr')
        .then(function (result) {
          $ctrl.films = result.data.results;
        });

      $ctrl.listeFilms = Enregistrer.charger('PanierSerializable');

      $ctrl.addItem = function (el) {
        $ctrl.listeFilms.push(el);
        Enregistrer.enregistrer($ctrl.listeFilms);
      };
    }
  });
