import React from 'react';
import Faptitudes from '../Components/Faptitudes';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';

class Aptitudes extends React.Component{

    render(){

        const encabezado = [
            {
                Header: "#",
                Accessor: "userId",
                
            },
            {
                Header: "Aptitud",
                Accessor: "id"
            },

            {
                Header: "Acciones",
                Accessor: "title"
                
            },
            {
                Header: "Acciones",
                Cell: props => {
                    return <button type="button" class="btn btn-warning">Detalle</button>;
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
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar/>
                <Faptitudes/>
                <Tabla entidad="/posts" columnas={encabezado} />
            </div>
        )
    }

}

export default Aptitudes;