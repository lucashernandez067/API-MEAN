const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const { mongoose } = require('./database');
const body_parser = require('body-parser');

//middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
app.use('/autores', require('../server/routes/autores.routes'));

app.listen(port, () => {
    console.log('El servidor 1 se encuentra en el puerto: ', port);
});

