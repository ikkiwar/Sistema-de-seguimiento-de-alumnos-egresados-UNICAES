import React from 'react';
import Navbar from '../Components/Navbar';
import Ffacultades from '../Components/Ffacultades';
import Tabla from '../Components/Tabla';
class Facultades extends React.Component{

    render(){
        const encabezado = [
          {  Header: "#",
            Accesor: "numero"
        },
        {
            Header: "Facultad",
            Accesor: "facultad"
        },
    
        {
            Header: "ACCIONES"
        }
        ]
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
    <Navbar/>
    <Ffacultades/>
    <Tabla columnas={encabezado}/>
            </div>
        )
    }
    

}
export default Facultades;