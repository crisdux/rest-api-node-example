//importancion e instanciacion de express
const express = require ('express');
const app = express();

//impotacion de colors
const colors = require('colors');

//importacion de morgan: ver respuestas del servidor en consola
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000); //validacion si el puerto 3000 esta disponible
app.set('json spaces',2);


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

app.listen(app.get('port'), ()=> {
    console.info(`Servidor en el puerto ${app.get('port')}`.green);
});



