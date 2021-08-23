import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    const { proyectoActual } = useContext(ProyectoContext);
    const { mostrarTareas } = useContext(TareaContext);

    const onClick = id => {
        proyectoActual(id)
        mostrarTareas(id)
    }


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => onClick(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;
