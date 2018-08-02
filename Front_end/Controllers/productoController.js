app.controller("productoController", productoController);

productoController.$inject=['$scope','apiService','$state', '$stateParams'];

function productoController($scope, apiService, $state, $stateParams){

	$scope.callService = function(parametros = {}){

		apiService.request('producto', 'search', parametros, null, null)
		.then(function(response) {
			$scope.productos = response;
			(!$scope.productos || $scope.productos.length == 0) ? $scope.nonProd = true : $scope.nonProd = false;
			console.log($scope.nonProd)
		}, function(err) {
			console.error(err);
		});
	};

				// $scope.$watch( function() {
				// 	return $scope.productos;
				// }, function(newValue) {
				// 	$state.go('producto');
				//   //update the DOM with newValue
				// });

	$scope.buscarProducto = function(){

		if(!$scope.txtBuscarProd) $scope.msjeRetorno = "Se debe ingresar un producto"; 
		else {
			var parameters = 'NombreProducto="%' + $scope.txtBuscarProd + '%"';

		$state.go('producto', {filtro:parameters});
		}
	};

	$scope.callService($stateParams);
}