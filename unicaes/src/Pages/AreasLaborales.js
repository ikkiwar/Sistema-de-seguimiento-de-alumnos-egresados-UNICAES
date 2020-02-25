import React from 'react';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
import Fareas from '../Components/Fareas';
import '../Components/Styles/AreasLaborales.css';
class AreasLaborales extends React.Component {

    render() {

        const encabezado = [
            {
                Header: "#",
                accessor: "userId"
                ,
                style: {
                    textAlign: "center"
                  }
            },
            {
                Header: "Área Laboral",
                accessor: "id"
                ,
                style: {
                    textAlign: "center"
                  }
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


        ]

        return (
            <div className="areas">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <br/>
                <Fareas/>
                <div className="Artabla">
                <Tabla entidad="/posts" columnas={encabezado}/>
                </div>
                


            </div>
        )
    }

}

export default AreasLaborales;