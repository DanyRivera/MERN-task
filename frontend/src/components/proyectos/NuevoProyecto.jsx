import React, { Fragment, useState } from 'react'

const NuevoProyecto = () => {

    //State del proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const {nombre} = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario de la submit
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Valdiar 

        //Agregar al state

        //Reiniciar el form
    }

    return (

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onSubmit={onSubmitProyecto}
            >Nuevo Proyecto</button>

            <form
                action=""
                className="formulario-nuevo-proyecto"
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

        </Fragment>

    );
}

export default NuevoProyecto;
