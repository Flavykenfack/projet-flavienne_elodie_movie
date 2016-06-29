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

      $ctrl.addItem = function () {
        $ctrl.maListe.push($ctrl.maVariable);
        Enregistrer.save($ctrl.maListe);
      };

      $ctrl.delItem = function (item) {
        var index = $ctrl.maListe.indexOf(item);
        $ctrl.maListe.splice(index, 1);
      };
    }
  });
