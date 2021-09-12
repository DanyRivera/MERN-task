import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch (action.type) {

        case MOSTRAR_ALERTA:
            return {
                alerta: action.paidload
            }


        case OCULTAR_ALERTA:
            return {
                alerta: null
            }

            
        default:
            break;
    }

}
