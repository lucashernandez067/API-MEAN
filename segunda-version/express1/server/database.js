const mongoose = require('mongoose');
const uri = "mongodb://localhost/Autores";

mongoose.connect(uri)
    .then(db => console.log('base de datos del servidor 1 conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;