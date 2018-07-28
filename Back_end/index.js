const express = require('express');
const bodyParser = require('body-parser');
const path= require('path');
const mainController = require('./Core/controllers/mainController.js');
//const manejadorErrores = require('./Core/bin/functions/manejadorError.js');

const app = express();

// Configuración del servidor
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname ,'views'));
app.set('view options', { layout: false });
app.set('view engine', 'ejs');


//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Funciones general para manejar errores
//app.use(manejadorErrores);

// 	function manejadorError(msje) {
//   	this.name = "Error";
//   	this.message = msje || "No Especificado";
//   }

// manejadorError.prototype = new Error();
// manejadorError.prototype.constructor = manejadorError;

//Controlador principal
app.use(mainController);


app.listen(app.get('port'), function(){
	console.log("Servidor escuchando en el puerto", app.get('port'));
});