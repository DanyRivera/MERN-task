import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';
import {
    MOSTRAR_TAREAS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


const TareaState = ({ children }) => {

    const initialState = {

        tareasProyecto: [],

        errorTarea: false,

        tareaSeleccionada: null
    }

    //crear el dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const mostrarTareas = async proyecto => {

        try {

            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto } });

            console.log(resultado);

            dispatch({
                type: MOSTRAR_TAREAS,
                paidload: resultado.data.tareas
            })

        } catch (error) {
            console.log(error)
        }

    }

    //Agregar la tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        // console.log(tarea)

        try {

            //eslint-disable-next-line
            const resultado = await clienteAxios.post('/api/tareas', tarea);

            dispatch({
                type: AGREGAR_TAREA,
                
                paidload: tarea
            })

        } catch (error) {
            console.log(error)
        }

    }

    //Valida y muestra error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar Tarea
    const eliminarTarea = async (id, proyecto) => {

        try {

            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } })

            dispatch({
                type: ELIMINAR_TAREA,
                paidload: id
            })

        } catch (error) {
            console.log(error)
        }

    }

    //Edita o modifica una tarea
    const actualizarTarea = async tarea => {

        try {
            
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)

            console.log(resultado);

            dispatch({
                type: ACTUALIZAR_TAREA,
                paidload: resultado.data.tarea
            })

        } catch (error) {
            console.log(error)
        }

    }

    //Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
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
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                mostrarTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
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
