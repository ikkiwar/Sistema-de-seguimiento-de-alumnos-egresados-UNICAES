import React from 'react';
import Fcargos from '../Components/Fcargos';
import Tabla from '../Components/Tabla';
import Navbar from '../Components/Navbar';
import '../Components/Styles/Cargos.css';

class Cargos extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "#",
                accessor: "idcargo"
            },
            {
                Header: "Cargo",
                accessor: "cargo"
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
            <div  className="cargos">
                <style>{'body { background-color: #9E2723; }'}</style>
               <Navbar/>
               <br/>
                    <Fcargos />
                    <div className="Ctabla">
                    <Tabla  entidad="/cargos" columnas={encabezado} />
                    </div>
                    
               

            </div>
        )
    }


}
export default Cargos;