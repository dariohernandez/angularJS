const router = require('express').Router();
const dbConexion = require("../../models/DBConexion.js");
const sendReply = require('../bin/functions/sendResponse.js');

router.get('/', function (req, res, next) {

	con = new dbConexion.connection();

	try{
		con.conectar(function(retorno, err){ 
			if(err) {
					new manejadorError().generateError(retorno, err); //Genera el error y lo muestra por consola sin interrumpir la ejecución de la aplicación
					sendReply(res,retorno, err.message);
			}
			else {
				con.ejecutaQuery("SELECT * FROM producto;", null, function(data){
					sendReply(res,data);
				});

				//sendReply(res,retorno);
			}
	});
	} catch(e){

		console.error(e.message);

	}

});

module.exports = router;