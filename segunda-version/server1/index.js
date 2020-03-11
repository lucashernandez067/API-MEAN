const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const { mongoose } = require('./database');

//middelwares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/obras',require('../server1/routes/obras.routes'));

app.listen(port, () => {
    console.log('El servidor 2 se encuentra en el puerto: ', port);
});