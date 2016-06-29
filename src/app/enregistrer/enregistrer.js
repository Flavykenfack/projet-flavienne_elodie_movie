angular
  .module('app')
  .service('Enregistrer', function () {
    var Enregistrer = this;
    Enregistrer.enregistrer = function (toBeSaved) {
      console.log('Todo save', toBeSaved);
      var PanierSerializable = JSON.stringify(toBeSaved);
      localStorage.setItem('PanierSerializable', PanierSerializable);
    };
  });

