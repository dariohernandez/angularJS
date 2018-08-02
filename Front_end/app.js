var app = angular.module("sistemaVentas",["ngRoute","ui.router"]);
app.constant("CONST_APP", {
	"DIR_HTML" : "Views/",
	"DIR_FOLDER_APP" : "app/",
	"NOMB_APP" : "Mundo Electro",
	"DERECHO_COPY":"Copyright © MundoElectro",
	"DIR_APP" : "http://localhost/AngularJS/"
});
app.run(['$rootScope', 'CONST_APP',function($rootScope, CONST_APP) {
  $rootScope.INFO_APP= [];

  for( param in CONST_APP){
  	$rootScope.INFO_APP[param]=CONST_APP[param];
  }
}]);


app.config(function($stateProvider, $urlRouterProvider) {

  // default route
  $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl : 'Views/home/home.html'
    })
    .state('producto', {
        url: '/producto',
        templateUrl : 'Views/producto/productoIndex.html',
        controller: 'productoController',
        controllerAs: 'vm',
        params: {
        filtro: null
        }
    });
});

// app.controller("HomeController", function ($scope){
// });