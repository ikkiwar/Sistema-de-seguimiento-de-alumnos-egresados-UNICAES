import React from 'react';
import Barra from '../Components/Barra';
import Fdecanos from '../Components/Fdecanos';
import Tabla from '../Components/Tabla';
import '../Components/Styles/Decanos.css';
import { Button } from 'react-bootstrap';
import Api from '../Api';

class Decanos extends React.Component {

    deleteRow(id) {
        fetch(Api + '/decanos/' + id, {
           method: 'DELETE'
         })
         .then(response => response.json());
         setTimeout(()=>{
            window.location.replace('')
        }, 3000);
   }

    render() {
        const encabezado = [
            {
                Header: "DUI",
                accessor: "dui"
                ,
                width: 100,
                maxWidth: 100,
                minWidth: 100
               
            },
            {
                Header: "NOMBRE",
                accessor: "nombre"
              
            },
            {
                Header: "APELLIDO",
                accessor: "apellido"
              
            },

            {
                Header: "CORREO",
                accessor: "correo"
              
            }
            ,

            {
                Header: "FACULTAD",
                accessor: "facultad"
              
            }
            ,

            {
                Header: "ACTIVO",
                accessor: "activo"
                ,
                width: 100,
                maxWidth: 100,
                minWidth: 100
               
            }
            ,

            {
                Header: "ACCIONES",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               // console.log("datos:", props)
                             this.deleteRow(props.original.dui);
                             
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
            <div className="Decanos">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Barra />
                <Fdecanos />
                <div className="Dtabla">
                    <Tabla entidad="/decanos" columnas={encabezado} />
                </div>

            </div>
        )
    }



}
export default Decanos;
