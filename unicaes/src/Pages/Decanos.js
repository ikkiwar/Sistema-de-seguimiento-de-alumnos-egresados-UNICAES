import React from 'react';
import Navbar from '../Components/Navbar';
import Fdecanos from '../Components/Fdecanos';
import Tabla from '../Components/Tabla';

class Decanos extends React.Component {

    render() {
const encabezado = [
    {
        Header: "DUI",
        Accesor: "dui"
    },
    {
        Header: "NOMBRE",
        Accesor: "nombre"
    },

    {
        Header: "CORREO",
        Accesor: "correo"
    }
    ,

    {
        Header: "FACULTAD",
        Accesor: "facultad"
    }
    ,

    {
        Header: "ACTIVO",
        Accesor: "activo"
    }
    ,

    {
        Header: "ACCIONES"
        
    }



]

        return (
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <Fdecanos />
                <Tabla columnas={encabezado}/>
            </div>
        )
    }



}
export default Decanos;
