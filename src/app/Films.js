function filmsController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('films', {
    templateUrl: 'app/Films.html',
    controller: filmsController
  });

