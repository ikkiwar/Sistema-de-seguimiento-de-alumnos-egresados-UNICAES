import React from 'react';
import Fcargos from '../Components/Fcargos';
import Tabla from '../Components/Tabla';
import Barra from '../Components/Barra';
import '../Components/Styles/Cargos.css';
import Acciones from '../Components/Acciones';
import { Button } from 'react-bootstrap';
import Api from '../Api';

class Cargos extends React.Component {

    constructor(props) {
        super(props);
     /*  this.state = {
           idcargo: null 
       }
        this.deleteRow= this.deleteRow.bind(this); **/
    }


    deleteRow(id) {
         fetch(Api + '/cargos/' + id, {
            method: 'DELETE'
          })
          .then(response => response.json());
          
    }


    render() {
        const encabezado = [
            {
                Header: "#",
                accessor: "idcargo",
                width: 100
            },
            {
                Header: "Cargo",
                accessor: "cargo",

            },

            {
                Header: "Acciones",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               // console.log("datos:", props)
                             this.deleteRow(props.original.idcargo);
                             
                            }
                            
                            }
                            id ={this.idcargo}
                        >Borrar</Button>


                    )
                },
                width: 200,
                maxWidth: 100,
                minWidth: 100,
                filterable: false,
                sortable: false
            }


        ]

        return (
            <div className="cargos">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Barra />
                <br />
                <Fcargos entidad="/cargos" />
                <div className="Ctabla">
                    <Tabla entidad="/cargos" columnas={encabezado} onChange={this.handleChange} />
                </div>



            </div>
        )
    }


}
export default Cargos;