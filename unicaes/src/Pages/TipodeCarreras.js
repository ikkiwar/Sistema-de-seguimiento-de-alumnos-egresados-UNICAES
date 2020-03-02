import React from 'react';
import Barra from '../Components/Barra';
import Tabla from '../Components/Tabla';
import Ftiposcarreras from '../Components/Ftipocarreras';
import '../Components/Styles/TipodeCarreras.css';

class TipodeCarrera extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "#",
                accessor: "idtipocarrera",


            },
            {
                Header: "Tipo de Carrera",
                accessor: "tipocarrera",

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
                sortable: false,
                style: {
                    textAlign: "center"
                }

            }



        ];
        return (
            <div className="Tipos">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Barra />
                <br />
                <Ftiposcarreras entidad="/tiposcarrera"/>
                <div className="TTabla">
                    <Tabla entidad="/tiposcarrera" columnas={encabezado} />
                </div>
            </div>
        )
    }

}
export default TipodeCarrera;