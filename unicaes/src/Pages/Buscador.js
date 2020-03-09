import React from 'react';
import Tabla from '../Components/Tabla';
import { Button } from 'react-bootstrap';
import '../Components/Styles/Buscador.css';
import BarraUsuario from '../Components/BarraUsuario';
import {Link} from 'react-router-dom';



class Buscador extends React.Component {


   /*  handlePerfilPublico = (dui) => {
        console.log("dui",dui)
     return  (
         this.render = () =>{
             return(<PerfiPublico dui={dui}/>)
         }
     ) 
        
    } */

    render() {

        const encabezado = [
            {
                Header: "Nombre",
                accessor: "nombre"


            },
            {
                Header: "Apellido",
                accessor: "apellido"
            },
            {
                Header: "Carrera",
                accessor: "carrera"
            },

            {
                Header: "Acciones",
                Cell: props => {
                    return (
                      

                        <Link className="btn btn-warning" to={{
                            pathname: "/PerfilPublico",
                            dui: props.original.dui
                        }}  >Ver Perfil</Link>


                    )
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                filterable: false,
                sortable: false,


            }
        ];

        return (
            <div className="buscador">
                <style>{'body { background-color: #9E2723; }'}</style>
                <BarraUsuario />
                <br />
                <h1>Buscador de Profesionales </h1>                
                <div className="Btabla">
                    <Tabla columnas={encabezado} entidad="/egresados" />
                </div>

            </div>
        )
    }


}
export default Buscador 