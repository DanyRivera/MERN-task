import React, {useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tasks/FormTarea';
import ListadoTareas from '../tasks/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';


const Proyectos = () => {

    //Extraer la info de autenticación
    const authContext = useContext(AuthContext);

    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado()

        //eslint-disable-next-line
    }, [])

    return (
        <div className="contenedor-app">

            {/* Side Bar */}
            <Sidebar />

            <div className="seccion-principal">

                <Barra />

                <main>

                    <FormTarea />

                    <div className="contenedor-tareas">

                        <ListadoTareas />

                    </div>

                </main>
            </div>
        </div>
    );
}

export default Proyectos;
