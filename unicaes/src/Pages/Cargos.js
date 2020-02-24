import React from 'react';
import Fcargos from '../Components/Fcargos';
import Tabla from '../Components/Tabla';
import Navbar from '../Components/Navbar';
import '../Components/Styles/Cargos.css';

class Cargos extends React.Component {

    render() {
        const encabezado = [
            {
                Header: "#",
                Accesor: "numero"
            },
            {
                Header: "Cargo",
                Accesor: "numero"
            },

            {
                Header: "Acciones",
                Accesor: "numero"
            }


        ]

        return (
            <div  className="cargos">
                <style>{'body { background-color: #9E2723; }'}</style>
               <Navbar/>
               <br/>
                    <Fcargos />
                    <div className="Ctabla">
                    <Tabla columnas={encabezado} />
                    </div>
                    
               

            </div>
        )
    }


}
export default Cargos;