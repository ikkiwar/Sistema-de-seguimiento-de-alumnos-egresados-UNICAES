import React from 'react';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
import Fcarreras from '../Components/Fcarreras';

class Carreras extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "#",
                Accesor: "numero"
            },
            {
                Header: "Cargo",
                Accesor: "cargo"
            },

            {
                Header: "Acciones"
            }


        ]
        return (
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <Fcarreras/> 
                <Tabla columnas={encabezado} />

            </div>


        )
    }


}
export default Carreras;