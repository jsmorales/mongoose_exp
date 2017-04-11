var express = require("express")
var bodyParser = require("body-parser")
var app = express()
//-------------------------------------------------------------
var mongoose = require("mongoose")
//


var personajes = require('./personajes_server.js')
//-------------------------------------------------------------
//esto es para poder usar el body parser en la aplicación
app.use(bodyParser.urlencoded({extended:true}))
//-------------------------------------------------------------

//-------------------------------------------------------------
app.get('/', function(llamado, respuesta){
	respuesta.render('index.ejs')
})


app.get('/personajes', personajes.index)

app.get('/personajes/ver/:personajeId', personajes.ver)

app.get('/personajes/nuevo', personajes.nuevo)

app.post('/personajes/crear', personajes.crear)

app.get('/personajes/editar/:personajeId', personajes.editar)

app.post('/personajes/actualizar/:personajeId', personajes.actualizar)

app.get('/personajes/eliminar/:personajeId', personajes.eliminar)
//-------------------------------------------------------------

//-------------------------------------------------------------
mongoose.connect('mongodb://localhost:27017/primer_baseM', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB desde node.js');
   }
});
//-------------------------------------------------------------

//-------------------------------------------------------------
app.listen(3000, function(){
	console.log("Mongo DB!")
})
//-------------------------------------------------------------