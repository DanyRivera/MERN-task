import React, {useReducer} from 'react'
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types/index';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        atenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    //Las Funciones

    return (

        <AuthContext.Provider
            value={{
                token: state.token, 
                autenticado: state.atenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >

            {props.children}

        </AuthContext.Provider>

    )

}

export default AuthState;