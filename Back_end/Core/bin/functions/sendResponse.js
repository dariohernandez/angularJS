var sendReply = function(responseHTTP, retOperación, error) {

	var jsonRespuesta = {
			msj: {
				http: 500,
				tipo: 'E',
				descripcion: 'Error de funcionalidad en el servidor',
				data : null
			}
		};
		// Exito en la operación
		if (typeof retOperación === 'object') {
			jsonRespuesta.msj.http = 200;
			jsonRespuesta.msj.tipo = 'I';  // I = Información
			jsonRespuesta.msj.descripcion = retOperación.msje;
			if (retOperación.data != null) jsonRespuesta.msj.data = retOperación.data;
		}

		// Error
		if (typeof retOperación === 'string') {
			jsonRespuesta.msj.descripcion = retOperación;
			if (!error) jsonRespuesta.msj.http = 400;//Si no esta inicializado el error significa que no hubo problemas del lado del servidor
		}

		responseHTTP.status(jsonRespuesta.msj.http).json(jsonRespuesta);
}

module.exports = sendReply;