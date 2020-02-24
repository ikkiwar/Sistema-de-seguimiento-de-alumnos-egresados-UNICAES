import React from 'react';
import Faptitudes from '../Components/Faptitudes';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
class Aptitudes extends React.Component{

    render(){

        const encabezado = [
            {
                Header: "#",
                Accesor: "numero"
            },
            {
                Header: "Aptitud",
                Accesor: "numero"
            },

            {
                Header: "Acciones",
                
            }


        ]
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar/>
                <Faptitudes/>
                <Tabla columnas={encabezado}/>
            </div>
        )
    }

}

export default Aptitudes;