import React, { useReducer } from 'react'
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { v4 as uuidv4 } from 'uuid';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO ,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Node.js'},
        {id: 3, nombre: 'React.js and Node.js'},
        {id: 4, nombre: 'Node.js'}
    ];


    const initialState = {
        proyectos : [],
        formulario: false,
        error: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD del proyecto


    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar Nuevo Proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()

        //Agrgar el proyecto al state
        dispatch({
            type: AGREGAR_PROYECTO, 
            payload: proyecto
        })
    }

    //Validar Formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto actual al que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (

        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                error: state.error,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;
