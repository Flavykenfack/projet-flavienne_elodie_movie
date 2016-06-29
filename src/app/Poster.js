angular
  .module('app')
  .component('poster', {
    templateUrl: 'app/poster.html',
    controller: function posterController() {
      this.text = 'POSTER';
    },
    bindings: {
      m: '<'
    }
  });
