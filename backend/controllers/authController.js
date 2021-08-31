const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {

    //Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    //extraer el email y password
    const { email, password } = req.body;

    try {

        //Revisar que sea un usuario registrado
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msj: 'El usuario no existe' })
        }

        //Revisar password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({ msj: 'Password Incorrecto' })
        }

        //Si todo es correcto
        //Crear el JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        }

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 //1 Hora
        }, (error, token) => {
            if (error) throw error;

            //Mensaje de confirmacion
            res.json({ token })

        });

    } catch (error) {
        console.log(error);
    }

}