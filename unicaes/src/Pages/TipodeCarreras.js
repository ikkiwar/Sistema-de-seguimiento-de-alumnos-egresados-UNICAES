import React from 'react';
import Barra from '../Components/Barra';
import Tabla from '../Components/Tabla';
import Ftiposcarreras from '../Components/Ftipocarreras';
import '../Components/Styles/TipodeCarreras.css';
import { Button } from 'react-bootstrap';
import Api from '../Api';


class TipodeCarrera extends React.Component {

    deleteRow(id) {
        fetch(Api + '/tiposcarrera/' + id, {
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
                Header: "#",
                accessor: "idtipocarrera",


            },
            {
                Header: "Tipo de Carrera",
                accessor: "tipocarrera",

            },


            {
                Header: "Acciones",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               // console.log("datos:", props)
                             this.deleteRow(props.original.idtipocarrera);
                             
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
                sortable: false,
                style: {
                    textAlign: "center"
                }

            }



        ];
        return (
            <div className="Tipos">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Barra />
                <br />
                <Ftiposcarreras entidad="/tiposcarrera"/>
                <div className="TTabla">
                    <Tabla entidad="/tiposcarrera" columnas={encabezado} />
                </div>
            </div>
        )
    }

}
export default TipodeCarrera;