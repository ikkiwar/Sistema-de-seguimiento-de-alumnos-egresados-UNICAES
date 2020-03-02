import React from 'react';
import Faptitudes from '../Components/Faptitudes';
import Barra from '../Components/Barra';
import Tabla from '../Components/Tabla';
import '../Components/Styles/Aptitudes.css';

class Aptitudes extends React.Component{

    render(){

        const encabezado = [
            {
                Header: "#",
                accessor: "idaptitud"
                
                
            },
            {
                Header: "Aptitud",
                accessor: "aptitud"
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
                 
                
            }



        ];
        return(
            <div className="aptitudes">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Barra/>
                <br/>
                <Faptitudes entidad="/aptitudes"/>
                <div className="Aptabla">
                <Tabla entidad="/aptitudes" columnas={encabezado} />
                </div>
                
            </div>
        )
    }

}

export default Aptitudes;