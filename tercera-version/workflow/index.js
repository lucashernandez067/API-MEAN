const express = require('express');
const app = express();
const port = 5000;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.use('/',require('./server/routes/routes'));

app.listen(port, () => {
    console.log('El servidor workflow se encuentra en el puerto: ', port);
});
