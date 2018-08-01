//Funcionalidad para parsear el query string pasado por la url

var parsearQS = function (queryString){

	jsonParse = {};

	if(queryString.filtros){

		var queryParse = queryString.filtros.split("&");

		queryParse.forEach( function(valor) { 	
	    	var filtro = valor.split('='); // Cada elemento en el request es de la forma name=valor
			jsonParse[filtro[0]] = filtro[1];	// Generamos un json completando cada item con el nombre del filtro y su valor
		});

	}

return jsonParse;

}

module.exports = parsearQS;