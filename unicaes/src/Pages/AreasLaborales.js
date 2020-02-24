import React from 'react';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
import Fareas from '../Components/Fareas';
class AreasLaborales extends React.Component {

    render() {

        const encabezado = [
            {
                Header: "#",
                Accesor: "numero"
            },
            {
                Header: "Área Laboral",
                Accesor: "numero"
            },

            {
                Header: "Acciones",
                
            }


        ]

        return (
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <Navbar />
                <Fareas/>
                <Tabla columnas={encabezado}/>


            </div>
        )
    }

}

export default AreasLaborales;