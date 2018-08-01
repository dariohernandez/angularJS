app.controller("productoController", productoController);

productoController.$inject=['$scope','apiService'];

function productoController($scope, apiService){

	$scope.callService = function(parametros = {}){

		apiService.request('producto', 'search', parametros, null, null)
		.then(function(response) {
			$scope.productos= response;
			($scope.productos.lenght > 0) ? $scope.nonProd = true : $scope.nonProd = false;
		}, function(response) {
			console.error(response);
		});
	};

	$scope.buscarProducto = function(){
		if(!$scope.txtBuscarProd) $scope.msjeRetorno = "Se debe ingresar un producto"; 
		else {
			var parameters = {
			filtro: 'NombreProducto=%' + $scope.txtBuscarProd + '%'
		};

		this.callService(parameters);
		}
	};

	$scope.callService();
}