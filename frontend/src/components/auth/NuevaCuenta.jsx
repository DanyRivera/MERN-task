import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {

    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);

    const { alerta, mostrarAlerta } = alertaContext;

    //State para iniciar sesión
    const [user, setUser] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //Extraer del usuario
    const { nombre, email, password, confirmar } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Password mínimo de 6 caracteres 
        if(password.length < 6) {
            mostrarAlerta('El password debe ser 6 caracteres', 'alerta-error')
            return;
        }

        //Los 2 passwords sean iguales
        if(password !== confirmar) {
            mostrarAlerta('Los password no son iguales', 'alerta-error')
            return;
        }

        //Pasarlo al action

    }

    return (
        <div className="form-usuario">

            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null }

            <div className="contenedor-form sombra-dark">
                <h1>Crea una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>

            </div>
        </div>
    );
}

export default NuevaCuenta;
