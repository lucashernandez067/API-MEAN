//requiriendo express guardado desde una constante para ejecutarlo
const express = require('express');
//al ejecutarlo devuelve un objeto, luego es guardado en una variable para utilizar el objeto.
const app = express();

//morgan ayuda a ver por consola las peticiones del usuario
const morgan = require('morgan');

const { mongoose } = require('./database');

//configuraciones
//utilizamos set para crear una "variable" que podrá ser accedida desde cualquier parte de la aplicación
//process.env.PORT es una constante que se establece si el puerto ya está definido por el servidor
app.set('port', process.env.PORT || 5000);


//middelwares
//cuando existen multimples rutas el servidor necesita "entender" los datos que recibe
//morgan es ejecutado por medio del metodo "use" y el parametro dev define la forma en la que se ven las peticiones
app.use(morgan('dev'));
//el servidor ahora podrá entender el formato JSON
app.use(express.json());
//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
//aquí se definen las rutas
app.use('/autores',require('./routes/autores.routes'));
app.use('/obras',require('./routes/obras.routes'));

//aquí le estamos instanciando listen para que express sepa cuál es el puerto que va a "escuchar"
app.listen(app.get('port'), () => {
    console.log('El servidor está en el puerto', app.get('port'));
});