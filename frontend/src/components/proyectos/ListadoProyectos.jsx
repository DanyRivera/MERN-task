import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const { proyectos, obtenerProyectos } = useContext(ProyectoContext)

    useEffect(() => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, [])


    if (proyectos.length === 0) return null;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;
