import React from 'react';
import Faptitudes from '../Components/Faptitudes';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
import '../Components/Styles/Aptitudes.css';

class Aptitudes extends React.Component{

    render(){

        const encabezado = [
            {
                Header: "#",
                accessor: "userId"
                
                
            },
            {
                Header: "Aptitud",
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
                  sortable: false,
                 
                
            }



        ];
        return(
            <div className="aptitudes">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar/>
                <br/>
                <Faptitudes/>
                <div className="Aptabla">
                <Tabla entidad="/posts" columnas={encabezado} />
                </div>
                
            </div>
        )
    }

}

export default Aptitudes;