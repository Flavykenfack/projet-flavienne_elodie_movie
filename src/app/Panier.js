function panierController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('panier', {
    templateUrl: 'app/Panier.html',
    controller: panierController
  });

