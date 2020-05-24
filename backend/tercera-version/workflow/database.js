const mongoose = require('mongoose');
const uri = "mongodb://localhost/cache_museo";

mongoose.connect(uri)
    .then(db => console.log('base de datos caché conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;