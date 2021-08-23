import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const { formulario, error, mostrarFormulario, agregarProyecto, mostrarError } = useContext(ProyectoContext);


    //State del proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario de la submit
    const onSubmitProyecto = e => {

        e.preventDefault();

        //Valdiar 
        if(nombre === '') {
            mostrarError();
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el form
        setProyecto({
            nombre: ''
        })
    }

    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            {formulario ? 
            
                (

                    <form
                        action=""
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >

                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            name="nombre"
                            value="Agregar Proyecto"
                        />

                    </form>

                ) : null
                
            }

            { error ? 
                <p className="mensaje error">El nombre es obligatorio</p> 
            : null }

        </Fragment>

    );
}

export default NuevoProyecto;
