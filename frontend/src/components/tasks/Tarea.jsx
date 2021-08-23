import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tareaContext';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({ tarea }) => {

    const { eliminarTarea, mostrarTareas, cambiarEstadoTarea, guardarTareaActual } = useContext(TareaContext);
    const { proyecto } = useContext(ProyectoContext);

    const [ proyectoActual ] = proyecto;

    //Da click en el btn de eliminar
    const tareaEliminar = id => {
        eliminarTarea(id);
        mostrarTareas(proyectoActual.id);
    }

    //Función que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //Agrega una tarea actual cuando el usuario desea actualizarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                    ?
                    <button
                        type="button"
                        className="completo"
                        onClick={ () => cambiarEstado(tarea) }
                    >Completo</button>
                    :

                    <button
                        type="button"
                        className="incompleto"
                        onClick={ () => cambiarEstado(tarea) }
                    >Incompleto</button>
                }

            </div>

            <div className="acciones">

                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={ () => tareaEliminar(tarea.id) }
                >Eliminar</button>

            </div>

        </li>
    );
}

export default Tarea;
