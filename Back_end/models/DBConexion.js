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
    this.ejecutaQuery = function(query, params, retData){
      
      var tipoOperacion = query.substring(0, query.indexOf(" ")).toLowerCase(); // Obtener el tipo de consulta que se ejecutara SELECT UPDATE INSERT

      this.conexion.query(query, [params], function(err, results, fields) { //function selectCb(err, results, fields)
        if (err) throw err; 
        switch (tipoOperacion) {  // Definir los retornos de la función y los mensajes según el resultado del query
          case "select":
          retData((results.length > 0)? {msje : "Productos encontrados" , data : results} : {msje : "Sin productos encontrados"} ); // Retorna un msje de operación y el conjunto de productos en formato json si se obtuvo resultados o el valor NULL si no
          break;

          case "insert","update", "delete":
          retData((result.affectedRows > 0)? {msje : "Operación realizada con exitosa"} : "No se pudo realizar la operación" );
          break;
          
        }
        
      }
    );
    }

    this.desconectar = function(){ 
        this.conexion.end(); 
    } 
} 

module.exports.connection = connection; 