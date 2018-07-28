var mysql = require('mysql'); 
var Q = require('q');

var connection = function(){ 

    this.conexion = mysql.createConnection({ 
          host     : 'localhost', 
          user     : 'root', 
          password : '', 
          database : 'sistema_ventas'
    }); 

    this.conectar = function(response){ //response constituida por mensaje y un error si aplica
        this.conexion.connect(function(error){ 

            if(error) response("No se pudo conectar a la base de datos", error); 
            else response("Conexion a la base de datos realizada con exito", null);  

        }); 
    } 
    this.ejecutaQuery = function(query, retData){

      this.conexion.query(query, function selectCb(err, results, fields) {
        if (err) throw err;  
        retData((results.length > 0)? {productos : results} : "Sin productos retornados" ); // Retorna el conjunto de productos en formato json si se obtuvo resultados o el valor NULL si no
      }
    );
    }

    this.desconectar = function(){ 
        this.conexion.end(); 
    } 
} 

module.exports.connection = connection; 