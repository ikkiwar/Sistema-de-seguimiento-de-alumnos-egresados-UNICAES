import React from 'react';
import Barra from '../Components/Barra';
import Tabla from '../Components/Tabla';
import Fcarreras from '../Components/Fcarreras';
import '../Components/Styles/Carreras.css';
import { Button } from 'react-bootstrap';
import Api from '../Api';

class Carreras extends React.Component {

    deleteRow(id) {
        fetch(Api + '/carreras/' + id, {
           method: 'DELETE'
         })
         .then(response => response.json());
         
   }

    render() {
        const encabezado = [
            {
                Header: "Carrera",
                accessor: "carrera"
            },    
        
            {
                Header: "Facultad",
                accessor: "facultad",
                width: 300,
                maxWidth: 100,
                minWidth: 100
                    
            },
            {
                Header: "Tipo",
                accessor: "tipocarrera"
            },
            {
                Header: "Acciones",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               console.log("datos:", props)
                             this.deleteRow(props.original.idcarrera);
                             
                            }
                            
                            }
                            id ={this.idcargo}
                        >Borrar</Button>


                    )
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
                <Barra />
                <br/>
                <Fcarreras/> 
                <div className="CaTabla">
                <Tabla entidad="/carreras" columnas={encabezado} />
                </div>
               

            </div>


        )
    }


}
export default Carreras;