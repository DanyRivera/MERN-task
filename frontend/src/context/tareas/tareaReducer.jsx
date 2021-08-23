import {
    MOSTRAR_TAREAS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
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
                tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.paidload)
            }

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [action.paidload, ...state.tareas],
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
                tareas: state.tareas.filter(tarea => tarea.id !== action.paidload)

            }

        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map( tarea => tarea.id === action.paidload.id ? action.paidload : tarea )
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
