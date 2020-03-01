import React from 'react';
import BarraPerfil from '../Components/BarraPerfil';
import HPerfil from "../Components/HPerfil";
import Cards from "../Components/Cards";
class Perfil extends React.Component{

    render(){
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <BarraPerfil/>
                <div className='container pt-4'>
                    <HPerfil dui="0000000-0"/>
                </div>
                <div className="container pt-4">
                    <div className="container-fluid row">
                        <div className="col-12"><Cards tituloBoton="Carreras" dui="0000000-0"/></div>
                        <div className="col-12"><Cards tituloBoton="Diplomas/Certificados" dui="0000000-0"/></div>
                        <div className="col-12"><Cards tituloBoton="Aptitudes" dui="0000000-0"/></div>
                        <div className="col-12"><Cards tituloBoton="Experiencia Laboral" dui="0000000-0"/></div>
                    </div>
                </div>
            </div>
        )
    }
    

}
export default Perfil;