const mongoose = require('mongoose');
//en este caso se utiliza mongoose para definir el esquema de datos 
const { Schema } = mongoose;

const AutorSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    descripcion: { type: String, required: false},
    edad: { type: Number, required: true }
});

module.exports = mongoose.model('Autor', AutorSchema);