import React from 'react';
import Barra from '../Components/Barra';
import Ffacultades from '../Components/Ffacultades';
import Tabla from '../Components/Tabla';
import '../Components/Styles/Facultades.css';
import { Button } from 'react-bootstrap';
import Api from '../Api';


class Facultades extends React.Component {

    deleteRow(id) {
        fetch(Api + '/facultades/' + id, {
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
                accessor: "idfacultad"
            },
            {
                Header: "Facultad",
                accessor: "facultad"
            },

            {
                Header: "ACCIONES",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               // console.log("datos:", props)
                             this.deleteRow(props.original.idfacultad);
                             
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
            <div className="Facultades">
                <style>{'body { background-color: #9E2723; }'}</style>
                <Barra />
                <br />
                <Ffacultades entidad="/facultades" />
                <div className="FaTabla">
                    <Tabla entidad="/facultades" columnas={encabezado} />
                    </div>

            </div>
        )
    }


}
export default Facultades;