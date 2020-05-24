const express = require('express');
const app = express();
const port = 5000;
const morgan = require('morgan');
const { moongose } = require('./database');

app.use(morgan('dev'));
app.use(express.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/autores',require('./server/routes/autores.routes'));
app.use('/obras',require('./server/routes/obras.routes'));

app.listen(port, () => {
    console.log('El servidor workflow se encuentra en el puerto: ', port);
});
