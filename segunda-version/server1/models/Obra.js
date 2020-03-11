const mongoose = require('mongoose');
const { Schema } = mongoose;

const ObraSchema = new Schema({
    nombre: { type: String, required: true },
    fecha: { type: Date, required: true },
    descripcion: { type: String, required: false},
    categoria: { type: String, required: true }
});

module.exports = mongoose.model('Obra', ObraSchema);