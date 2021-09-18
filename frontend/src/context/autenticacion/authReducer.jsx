import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch (action.type) {

        case REGISTRO_EXITOSO: 
        case LOGIN_EXITOSO: 
            localStorage.setItem('token', action.paidload.token)
            return {
                ...state,
                autenticado: true,
                mensaje: true,
                cargando: false
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.paidload,
                cargando: false
            }

        case LOGIN_ERROR:
        case CERRAR_SESION:
        case REGISTRO_ERROR: 
            localStorage.removeItem('token');   
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.paidload,
                cargando: false
            }


        default:
            break;
    }

}