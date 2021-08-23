import React, { useContext } from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Sidebar = () => {

    const { proyectos } = useContext(ProyectoContext);

    return ( 
        <aside>
            <h1>MERN<span>Task</span></h1>

            <NuevoProyecto />

            <div className="proyectos">

                { proyectos.length === 0 ? <h2>No tienes proyectos</h2> : <h2>Tus Proyectos</h2>}

                <ListadoProyectos />  

            </div>

        </aside>
    );
}
 
export default Sidebar;
