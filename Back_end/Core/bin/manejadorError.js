// //Funcion que permite manejar los error como objetos y no solo string
// var manejadorError = {

// 	manejadorError.prototype = new Error();
// 	manejadorError.prototype.constructor = manejadorError;

// 	showError = function(msje) {
//   	this.name = "Error";
//   	this.message = msje || "No Especificado";

// };
var events = require('events');

'use strict';

var manejadorError = function(){

	this.eventCreate = new events.EventEmitter();

	this.generateError = function(aviso, err){

		//Ejecuta la funcionalidad asignada al evento
		this.eventCreate.on('error', function(err, m){
						console.log('Se genero el siguiente error \n => '+ m +"\n"+ err.stack);
					});
		//Setea el evento de error
		this.eventCreate.emit('error', new Error(err.message), aviso);
	}
}

module.exports = manejadorError;