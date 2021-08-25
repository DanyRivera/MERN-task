const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;

//Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola mundo')
} )

//arrancar el server
app.listen( PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
} )
