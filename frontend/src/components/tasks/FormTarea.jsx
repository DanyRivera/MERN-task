import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    const { proyecto } = useContext(ProyectoContext);
    const { 
        errorTarea, 
        agregarTarea, 
        validarTarea, 
        mostrarTareas, 
        tareaSeleccionada,
        actualizarTarea,
        limpiarTarea
    } = useContext(TareaContext)

    //Effect detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaSeleccionada !== null) {
            setTarea(tareaSeleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    //state del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    })

    const { nombre } = tarea;

    //Si no hay proyecto seleccionado ocultar el form de tarea
    if (!proyecto) return null;

    //Extraer del el primer lugar del arreglo
    const [proyectoActual] = proyecto

    //Leer los valores del formulario
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        //Revisar si es edicion o nueva tarea
        if (tareaSeleccionada === null) {
            //Nueva tarea

            //Agregar la nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);

        } else {
            //Actualizar la tarea existente
            actualizarTarea(tarea);

            //Elimina tarea seleccionada del state
            limpiarTarea();
        }


        //Obtener las tareas del proyecto
        mostrarTareas(proyectoActual.id)

        //REiniciar el form
        setTarea({
            nombre: ''
        })

    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>

            </form>

            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}

        </div>

    );
}

export default FormTarea;
