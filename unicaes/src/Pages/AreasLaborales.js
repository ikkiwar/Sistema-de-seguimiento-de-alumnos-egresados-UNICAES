import React from 'react';
import Barra from '../Components/Barra';
import Tabla from '../Components/Tabla';
import Fareas from '../Components/Fareas';
import '../Components/Styles/AreasLaborales.css';
class AreasLaborales extends React.Component {

    render() {

        const encabezado = [
            {
                Header: "#",
                accessor: "idArea"
              
            },
            {
                Header: "Área Laboral",
                accessor: "area"
               
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
                <Barra />
                <br/>
                <Fareas entidad="/areaslaborales"/>
                <div className="Artabla">
                <Tabla entidad="/areaslaborales" columnas={encabezado}/>
                </div>
                


            </div>
        )
    }

}

export default AreasLaborales;