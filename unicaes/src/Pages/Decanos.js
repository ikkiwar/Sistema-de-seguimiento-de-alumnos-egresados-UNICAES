import React from 'react';
import Navbar from '../Components/Navbar';
import Fdecanos from '../Components/Fdecanos';
import Tabla from '../Components/Tabla';
import '../Components/Styles/Decanos.css';
class Decanos extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "DUI",
                accessor: "dui"
                ,
                width: 100,
                maxWidth: 100,
                minWidth: 100
               
            },
            {
                Header: "NOMBRE",
                accessor: "nombre"
              
            },
            {
                Header: "APELLIDO",
                accessor: "apellido"
              
            },

            {
                Header: "CORREO",
                accessor: "correo"
              
            }
            ,

            {
                Header: "FACULTAD",
                accessor: "facultad"
              
            }
            ,

            {
                Header: "ACTIVO",
                accessor: "activo"
                ,
                width: 100,
                maxWidth: 100,
                minWidth: 100
               
            }
            ,

            {
                Header: "ACCIONES",
                Cell: props => {
                    return <button type="button" className="btn btn-warning">Detalle</button>;
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                filterable: false,
                sortable: false

            }



        ]

        return (
            <div className="Decanos">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <Fdecanos />
                <div className="Dtabla">
                    <Tabla entidad="/decanos" columnas={encabezado} />
                </div>

            </div>
        )
    }



}
export default Decanos;
