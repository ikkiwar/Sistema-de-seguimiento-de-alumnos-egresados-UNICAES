import React from 'react';
import Tabla from '../Components/Tabla';
import Finstituciones from '../Components/Finstituciones';
import Barra from '../Components/Barra';
import '../Components/Styles/Instituciones.css';
import { Button } from 'react-bootstrap';
import Api from '../Api';
class Instituciones extends React.Component{

    deleteRow(id) {
        fetch(Api + '/instituciones/' + id, {
           method: 'DELETE'
         })
         .then(response => response.json());
         setTimeout(()=>{
            window.location.replace('')
        }, 3000);
         
   }

    render(){
        const encabezado = [
            {
                Header: "#",
                accessor: "idinstitucion"
                ,
                  width: 100,
                  maxWidth: 100,
                  minWidth: 100
            },
            {
                Header: "Nombre",
                accessor: "nombre"
            },

            {
                Header: "Direccion",
                accessor: "direccion"
            },
            {
                Header: "Departamento",
                accessor: "departamento"
            }
            ,

            {
                Header: "Municipio",
                accessor: "municipio"
            },
            {
                Header: "Acciones",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               // console.log("datos:", props)
                             this.deleteRow(props.original.idinstitucion);
                             
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
        return(
            <div  className="instituciones" >
                <style>{'body { background-color: #9E2723; }'}</style>
             <Barra/>
             <br/>
             <Finstituciones/>
             <div className="Itabla">
             <Tabla entidad="/instituciones" columnas = {encabezado} />
             </div>
             
             
            
            </div>
            
        )
    }

}

export default Instituciones;
