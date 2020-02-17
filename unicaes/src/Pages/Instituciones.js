import React from 'react';
import Tabla from '../Components/Tabla';
import Finstituciones from '../Components/Finstituciones';
import '../Components/Styles/Instituciones.css';
class Instituciones extends React.Component{

    render(){
        const encabezado = [
            {
                Header: "#",
                Accesor: "numero"
            },
            {
                Header: "Nombre",
                Accesor: "numero"
            },

            {
                Header: "Direccion",
                Accesor: "numero"
            },
            {
                Header: "Departamento",
                Accesor: "numero"
            }
            ,

            {
                Header: "Municipio",
                Accesor: "numero"
            },
            {
                Header: "Acciones",
                Accesor: "numero"
            }


        ]
        return(
            <div  className="instituciones" >
                <style>{'body { background-color: #9E2723; }'}</style>
             <Finstituciones/>

             <Tabla columnas = {encabezado} />
             
            
            </div>
            
        )
    }

}

export default Instituciones;
