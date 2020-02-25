import React from 'react';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
import Fcarreras from '../Components/Fcarreras';
import '../Components/Styles/Carreras.css';

class Carreras extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "#",
                accessor: "userId"
            },
            {
                Header: "Cargo",
                accessor: "id"
            },

            {
                Header: "Acciones",
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
            <div className="Carreras">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <br/>
                <Fcarreras/> 
                <div className="CaTabla">
                <Tabla entidad="/posts" columnas={encabezado} />
                </div>
               

            </div>


        )
    }


}
export default Carreras;