const mongoose = require('mongoose');
//en este caso se utiliza mongoose para definir el esquema de datos 
const { Schema } = mongoose;

const AutorSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    descripcion: { type: String, required: true},
    especialidad: { type: String, required: true},
    nacionalidad: { type: String, required: true},
    fecha_nacimiento: { type: String, required: true },
    fallecido: { type: Boolean, required: false },
    fecha_fallecimiento: { type: String, required: false },
    image: { type: String, required: false }
});

module.exports = mongoose.model('Autor', AutorSchema);