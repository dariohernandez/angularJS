var app = angular.module("sistemaVentas",["ngRoute"]);
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

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : 'Views/home/home.html',
    })
    .when("/producto", {
        templateUrl : 'Views/producto/productoIndex.html',
        controller: 'productoController',
        controllerAs: 'vm'
    });
});

// app.controller("HomeController", function ($scope){
// });