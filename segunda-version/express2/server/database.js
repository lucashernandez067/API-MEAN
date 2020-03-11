const mongoose = require('mongoose');
const uri = "mongodb://localhost/Obras";

mongoose.connect(uri)
    .then(db => console.log('base de datos del servidor 2 conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;