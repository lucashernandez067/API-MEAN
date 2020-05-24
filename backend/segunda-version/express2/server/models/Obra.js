const mongoose = require('mongoose');
//en este caso se utiliza mongoose para definir el esquema de datos 
const { Schema } = mongoose;

const ObraSchema = new Schema({
    nombre: { type: String, required: true },
    fecha: { type: String, required: true },
    informacion: { type: String, required: false },
    categoria: { type: String, required: true },
    ubicacion: { type: String, required: false },
    image: { type: String, required: false }
});

module.exports = mongoose.model('Obra', ObraSchema);