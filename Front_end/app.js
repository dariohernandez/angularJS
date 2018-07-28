var app = angular.module("sistemaVentas",[])
app.constant("CONST_APP", {
	"DIR_HTML" : "Views/HTML/",
	"DIR_FOLDER_APP" : "Views/app/",
	"NOMB_APP" : "Mundo Electro",
	"DERECHO_COPY":"Copyright &copy",
	"DIR_APP" : "http://localhost/AngularJS/"
});
app.run(['$rootScope', 'CONST_APP',function($rootScope, CONST_APP) {
  $rootScope.INFO_APP= [];

  for( param in CONST_APP){
  	$rootScope.INFO_APP[param]=CONST_APP[param];
  }
}]);

app.controller("HomeController", function ($scope){
});