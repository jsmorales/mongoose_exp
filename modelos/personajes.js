// Load required packages
var mongoose = require('mongoose');

// Definimos el esquema
var PersonajeSchema = mongoose.Schema({
   nombre: {type: String, required: true},
   apellido: {type: String, required: true},
   biografia: {type: String, required: true}
});

// Export the Mongoose model
module.exports = mongoose.model('Personaje', PersonajeSchema);
