import React from 'react';
import Barra from '../Components/Barra';
import Tabla from '../Components/Tabla';
import Fareas from '../Components/Fareas';
import '../Components/Styles/AreasLaborales.css';
import { Button } from 'react-bootstrap';
import Api from '../Api';

class AreasLaborales extends React.Component {

    deleteRow(id) {
        fetch(Api + '/areaslaborales/' + id, {
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
                accessor: "idArea"
              
            },
            {
                Header: "Área Laboral",
                accessor: "area"
               
            },

            {
                Header: "Acciones",
                Cell: props => {
                    return (
                        <Button variant="danger"
                            onClick={() => {
                               // console.log("datos:", props)
                             this.deleteRow(props.original.idArea);
                             
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