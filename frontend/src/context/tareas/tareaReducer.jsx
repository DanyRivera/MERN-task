import {
    MOSTRAR_TAREAS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {

        case MOSTRAR_TAREAS:
            return {
                ...state,
                tareasProyecto: action.paidload
            }

        case AGREGAR_TAREA:
            return {
                ...state,
                tareasProyecto: [action.paidload, ...state.tareasProyecto],
                errorTarea: false
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.filter(tarea => tarea._id !== action.paidload)

            }

        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.map( tarea => tarea._id === action.paidload._id ? action.paidload : tarea )
            }

        case TAREA_ACTUAL:
            return {
                ...state,
                tareaSeleccionada: action.paidload
            }

        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaSeleccionada: null
            }

        default:
            break;
    }
}
