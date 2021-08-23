import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';
   
import { 
    MOSTRAR_TAREAS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


const TareaState = ({ children }) => {

    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Paleta', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Pasarela', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 }, 
            { id: 5, nombre: 'Elegir Paleta', estado: false, proyectoId: 1 },
            { id: 6, nombre: 'Elegir Pasarela', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir Hosting', estado: true, proyectoId: 3 },
            { id: 8, nombre: 'Elegir Paleta', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'Elegir Hosting', estado: true, proyectoId: 2 },
            { id: 10, nombre: 'Elegir Pasarela', estado: true, proyectoId: 2 },
        ],

        tareasProyecto: null,

        errorTarea: false,

        tareaSeleccionada: null
    }

    //crear el dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const mostrarTareas = proyectoId => {
        dispatch({
            type: MOSTRAR_TAREAS,
            paidload: proyectoId
        })
    }

    //Agregar la tarea al proyecto seleccionado
    const agregarTarea = tarea => {

        tarea.id = uuidv4();

        dispatch({
            type: AGREGAR_TAREA,
            paidload: tarea
        })
    }

    //Valida y muestra error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar Tarea
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            paidload: id
        })
    }

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            paidload: tarea
        })
    }

    //Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            paidload: tarea
        })
    }

    //Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            paidload: tarea
        })
    }

    //Elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                mostrarTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {children}
        </TareaContext.Provider>
    )

}

export default TareaState;
