var mongoose = require('mongoose');


var Personaje = require('./modelos/personajes.js');

var modelo_personaje = new Personaje();

//-----------------------------------------
exports.index = function(llamado, respuesta){

	Personaje.find(function(err, res){
		
		if(err)
			throw err;

		respuesta.render('personajes/index.ejs', {'res': res})
	})	
}



exports.ver = function(llamado, respuesta){
	/**/	
	console.log(llamado.params)
		
	Personaje.findById(llamado.params.personajeId, function(err, res){

		if(err)
			throw err;

		respuesta.render('personajes/ver.ejs',{'res':res})
	})	
}

exports.nuevo = function(llamado, respuesta){
	respuesta.render('personajes/form.ejs', {'titulo':'Nuevo Personaje', 'accion':'Crear Personaje', 'method':'post', 'action':'/personajes/crear'})
}

exports.crear = function(llamado, respuesta){
	//se crea una instancia del modelo del personaje
	// Create a new instance of the Beer model
  	
  	console.log(llamado.body)
	//setea las propiedades pasadas por post
	modelo_personaje.nombre = llamado.body.nombre;
	modelo_personaje.apellido = llamado.body.apellido;
	modelo_personaje.biografia = llamado.body.biografia;

	// guardar el personaje y ver si hay errores
	modelo_personaje.save(function(err) {
		if (err)
			throw err;

		//res.json({ message: 'Beer added to the locker!', data: beer });
		respuesta.render('personajes/form.ejs', {'titulo':'Nuevo Personaje', 'accion':'Crear Personaje', 'method':'post', 'action':'/personajes/crear'})
	});
}

exports.editar = function(llamado, respuesta){
	/**/	
	console.log(llamado.params)
		
	Personaje.findById(llamado.params.personajeId, function(err, res){

		if(err)
			throw err;

		respuesta.render('personajes/form.ejs',{'titulo':'Editar Personaje', 'accion':'Editar Personaje', 'method':'post', 'action':'/personajes/actualizar/'+llamado.params.personajeId, 'res':res})
	})	
}

exports.actualizar = function(llamado, respuesta){
	
	console.log(llamado.params)	

	Personaje.findById(llamado.params.personajeId, function(err, res){		

		res.nombre = llamado.body.nombre;
		res.apellido = llamado.body.apellido;
		res.biografia = llamado.body.biografia;

		// guardar el personaje y ver si hay errores
		res.save(function(err) {
			if (err)
				throw err;

			//res.json({ message: 'Beer added to the locker!', data: beer });
			respuesta.redirect('/personajes');
		});
	})
}

exports.eliminar = function(llamado, respuesta){

	Personaje.findByIdAndRemove(llamado.params.personajeId, function(err){

		if (err)
			throw err;

		respuesta.redirect('/personajes');
	})
}