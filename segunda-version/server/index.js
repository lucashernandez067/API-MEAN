const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { mongoose } = require('./database');

//middelwares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/autores',require('../server/routes/autores.routes'));

app.listen(port, () => {
    console.log('El servidor 1 se encuentra en el puerto: ', port);
});

