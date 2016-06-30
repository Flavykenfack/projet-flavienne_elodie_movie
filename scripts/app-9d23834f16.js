function infoFilmController(n,i){var l=this;i.get("https://amc.ig.he-arc.ch/tmdb/movie/"+n.infoFilmId+"?language=fr").then(function(n){l.unFilm=n.data})}function routesConfig(n,i,l){l.html5Mode(!1).hashPrefix("!"),i.otherwise("/"),n.state("app",{url:"/",template:"<app></app>"}).state("app.films",{url:"films",template:"<films></films>"}).state("app.infoFilm",{url:"films/:infoFilmId",template:"<info-film></info-film>"}).state("app.panier",{url:"panier",template:"<panier></panier>"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],infoFilmController.$inject=["$stateParams","$http"],angular.module("app",["ui.router"]),angular.module("app").service("Enregistrer",function(){var n=this;n.enregistrer=function(n){console.log("Todo save",n);var i=JSON.stringify(n);localStorage.setItem("PanierSerializable",i)},n.charger=function(n){return null===localStorage.getItem(n)?[]:JSON.parse(localStorage.getItem(n))}}),angular.module("app").component("poster",{templateUrl:"app/poster.html",controller:function(){this.text="POSTER"},bindings:{m:"<"}}),angular.module("app").component("panier",{templateUrl:"app/Panier.html",controller:["Enregistrer",function(n){var i=this;i.listeFilms=n.charger("PanierSerializable"),i.delItem=function(l){i.listeFilms.splice(l,1),n.enregistrer(i.listeFilms)}}]}),angular.module("app").component("infoFilm",{templateUrl:"app/infoFilm.html",controller:infoFilmController}),angular.module("app").component("app",{templateUrl:"app/home.html"}),angular.module("app").component("films",{templateUrl:"app/films.html",controller:["Enregistrer","$http",function(n,i){var l=this;i.get("https://amc.ig.he-arc.ch/tmdb/movie/upcoming?language=fr").then(function(n){l.films=n.data.results}),l.listeFilms=n.charger("PanierSerializable"),l.addItem=function(i){l.listeFilms.push(i),n.enregistrer(l.listeFilms)}}]}),angular.module("app").run(["$templateCache",function(n){n.put("app/films.html",'<h2>Liste des films</h2>\n    <div class="row">\n        <div class="col-xs-6 col-sm-4 col-md-4" ng-repeat="film in $ctrl.films">\n            <div class="thumbnail">\n                <div class="caption">\n                    <h4>{{ film.title }}</h4>\n                    <poster m="film"></poster>\n                    <button ng-click="$ctrl.addItem(film)" class="glyphicon glyphicon-film"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n'),n.put("app/home.html",'<div class="container">\n    <div class="col-xs-12 col-sm-12 col-md-12">\n        <nav class="navbar navbar-default">\n            <div class="container-fluid">\n                <div class="navbar-header">\n                    <a class="navbar-brand" href="">Movie Application</a>\n                </div>\n                <ul class="nav navbar-nav">\n                    <li><a href="hello">Home</a></li>\n                    <li><a ui-sref="app.films">Films</a></li>\n                    <!--<li><a ui-sref="app.poster">Prochainement</a></li>!-->\n                    <li><a ui-sref="app.panier">Panier</a></li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n\n    <ui-view></ui-view>\n\n    <div class="footer">\n        <p>♥MovieApplication 2016</p>\n    </div>\n</div>'),n.put("app/infoFilm.html",'<div class="row">\r\n    <div class="col-xs-12 col-sm-12 col-md-12">\r\n        <div class="thumbnail">\r\n            <div class="caption">\r\n                <h2>{{$ctrl.unFilm.title}}</h2>\r\n                <poster m="$ctrl.unFilm"></poster>\r\n                <p><strong>Description:</strong> {{$ctrl.unFilm.overview}}</p>\r\n                <p><strong>Date de sortie:</strong> {{$ctrl.unFilm.release_date}}</p>\r\n                <p><strong>Titre original:</strong> {{$ctrl.unFilm.original_title}}</p>\r\n                <p><strong>Langue originale:</strong> {{$ctrl.unFilm.original_language}}</p>\r\n                <p><strong>Popularité:</strong> {{$ctrl.unFilm.popularity}}</p>\r\n                <p><strong>Vote:</strong> {{$ctrl.unFilm.vote_count}}</p>\r\n                <p><strong>Moyen du vote:</strong> {{$ctrl.unFilm.vote_average}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'),n.put("app/panier.html",'<div class="row">\r\n  <h2>Mes films</h2>\r\n  <div class="col-xs-6 col-sm-6 col-md-6" ng-repeat="film in $ctrl.listeFilms track by $index">\r\n      <div class="thumbnail">\r\n        <div class="caption">\r\n          <h4><a ui-sref="app.infoFilm({infoFilmId: film.id})">{{film.title }}</a></h4>\r\n          <poster m="film"></poster>       \r\n          <p><strong>Description:</strong> {{film.overview}}</p>\r\n          <p><strong>Date de sortie :</strong> {{film.release_date}}</p>\r\n          <button ng-click="$ctrl.delItem(film)" class="glyphicon glyphicon-trash"></button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n'),n.put("app/poster.html",'<div class="poster"> \r\n  <!--<a ui-shref=""> </a>!-->\r\n  <img ng-src="http://image.tmdb.org/t/p/w185{{$ctrl.m.poster_path}}">\r\n</div>\r\n')}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-9d23834f16.js.map
