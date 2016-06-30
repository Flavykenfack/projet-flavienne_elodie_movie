angular
  .module('app')
  .component('panier', {
    templateUrl: 'app/Panier.html',
    controller: function (Enregistrer) {
      var $ctrl = this;
      $ctrl.listeFilms = Enregistrer.charger('PanierSerializable');
      $ctrl.delItem = function (item) {
        $ctrl.listeFilms.splice(item, 1);
        Enregistrer.enregistrer($ctrl.listeFilms);
      };
    }
  });

