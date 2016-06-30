angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    })

    .state('app.home', {
      url: '/',
      template: '<app></app>'
    })

    .state('app.films', {
      url: 'films',
      template: '<films></films>'
    })

    .state('app.infoFilm', {
      url: 'films/:infoFilmId',
      template: '<infoFilm></infoFilm>'
    })

    .state('app.poster', {
      url: 'poster/:posterId',
      template: '<poster></poster>'
    })

    .state('app.panier', {
      url: 'panier',
      template: '<panier></panier>'
    });
}
