app.factory("apiService", apiService);
apiService.$inject = [
	'$http',
	'$q'
];

function apiService($http, $q){

	var _ipPort = 'localhost:3000';

	var request = function request(resource, operation, parameters, resourceID, body){

		//var deferred = $q.defer();
		switch (operation) {

			case "read":
				return _read(resource, resourceId);

			case "search":
				return _search(resource, parameters);

		}
		
	

	}

	var _read = function(resource, params, resourceID){

		var url = 'http://' + _ipPort + '/' + resource + '/' + resourceID;

		return _callApi(url, "GET", null, null);
	}

	var _search = function(resource, params){

		var url = 'http://' + _ipPort + '/' + resource;

		//console.log(params.filtro);

		params = {
			filtros: params.filtro,
			qRegistros : params.qRegistros || 10
		}

		return _callApi(url, "GET", params, null);
	}

	var _callApi = function(url, method, params, body){

		var deferred = $q.defer()
		$http({
			method: method,
			contentType: 'application/json',
			url: url,
			params: params,
			async: false,
			crossDomain: true,
			data: body
		}).then(function(res){
			if(res.data.msj.http == 200) deferred.resolve(res.data.msj.data);
			else deferred.reject(res.data.msj.descripcion);
		},
		function(res){
			deferred.reject(res.data);
		});

		return deferred.promise;
	}

	return apiService = { request: request}
}

