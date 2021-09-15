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
            localStorage.setItem('token', action.paidload.token)
            return {
                ...state,
                autenticado: true,
                mensaje: true
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.paidload
            }

        case LOGIN_ERROR:
        case REGISTRO_ERROR: 
            localStorage.removeItem('token');   
            return {
                ...state,
                token: null,
                mensaje: action.paidload
            }


        default:
            break;
    }

}