const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

//Habilitar Cors
app.use(cors())

//Habilitar express.json
app.use(express.json({ extended: true }))

//puerto de la app
const PORT = process.env.PORT || 4000;

//Importar Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


//arrancar el server
app.listen( PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
} )
