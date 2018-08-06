app.controller("productoController", productoController);

productoController.$inject=['$scope','apiService','$state', '$stateParams'];

function productoController($scope, apiService, $state, $stateParams){

	var vm = this;

	vm.submited = false;

	vm.callService = function(parametros = {}){

		apiService.request('producto', 'search', parametros, null, null)
		.then(function(response) {
			vm.productos = response;
			(!vm.productos || vm.productos.length == 0) ? vm.nonProd = true : vm.nonProd = false;
			console.log(vm.nonProd)
		}, function(err) {
			console.error(err);
		});
	};

	vm.buscarProducto = function(){

		if(!vm.txtBuscarProd) vm.msjeRetorno = "Se debe ingresar un producto"; 
		else {
			var parameters = 'NombreProducto="%' + vm.txtBuscarProd + '%"';

			$state.go('producto', {filtro:parameters});
		}
	};


	vm.crearProducto = function(){

	vm.submited = true;
	console.log("aca");

	};

	vm.callService($stateParams); //Inicializa la vista con el scope de productos
}