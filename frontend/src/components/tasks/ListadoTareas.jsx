import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    const { proyecto, eliminarProyecto } = useContext(ProyectoContext);

    //Usar el context de tareas 
    const { tareasProyecto } = useContext(TareaContext);

    //Si no hay un proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    //Extraer del el primer lugar del arreglo
    const [proyectoActual] = proyecto

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (

        <Fragment>

            <h2>Proyecto: {proyectoActual.nombre}</h2>


            <ul className="listado-tareas">
                {tareasProyecto.length === 0

                    ? (<li className="tarea"><p>No hay tareas</p></li>)

                    :

                    <TransitionGroup
                    >

                        {
                            tareasProyecto.map(tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Tarea
                                        tarea={tarea}
                                    />
                                </CSSTransition>
                            ))
                        }

                    </TransitionGroup>

                }

            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>

        </Fragment>

    );
}

export default ListadoTareas;
