const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //Leer el token del header
    const token = req.header('x-auth-token');

    console.log(token);

    //Revisar si no hay token

    //validar el token
}