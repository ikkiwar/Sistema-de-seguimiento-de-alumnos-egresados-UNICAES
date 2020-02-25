import React from 'react';
import Navbar from '../Components/Navbar';
import Ffacultades from '../Components/Ffacultades';
import Tabla from '../Components/Tabla';
import '../Components/Styles/Facultades.css';

class Facultades extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "#",
                accessor: "userId"
            },
            {
                Header: "Facultad",
                accessor: "id"
            },

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
            <div className="Facultades">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <br />
                <Ffacultades />
                <div className="FaTabla">
                    <Tabla entidad="/posts" columnas={encabezado} />
                    </div>

            </div>
        )
    }


}
export default Facultades;