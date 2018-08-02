const router = require('express').Router();
const dbConexion = require("../../models/DBConexion.js");
const sendReply = require('../bin/sendResponse.js');
const manejadorError = require('../bin/manejadorError.js');

router.get('/', function (req, res, next) {

	con = new dbConexion.connection();

	try{
		con.conectar(function(retorno, err){ 
			if(err) {
					new manejadorError().generateError(retorno, err); //Genera el error y lo muestra por consola sin interrumpir la ejecución de la aplicación
					sendReply(res,retorno, err.message);
			}
			else {
				
				query ="SELECT * FROM producto";

				if (req.query.filtros){

				var filtrosParse= require('../bin/parsearQS.js')(req.query);

				query += " WHERE NombreProducto LIKE ";
				query += filtrosParse["NombreProducto"];

				}

				con.ejecutaQuery(query, null, function(data){
					console.log(data);
					sendReply(res,data);
				});

			}
	});
	} catch(e){

		console.error(e.message);

	}

});

module.exports = router;