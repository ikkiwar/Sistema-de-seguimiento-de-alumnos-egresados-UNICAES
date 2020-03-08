import React from 'react';

import BarraUsuario from '../Components/BarraUsuario';
import HPerfil from "../Components/HPerfil";
import EditCertificados from "../Components/EditCertificados";
import EditAptitudes from "../Components/EditAptitudes";
import EditCarreras from "../Components/EditCarreras";
import Api from "../Api";
import EditExperiencia from '../Components/EditExperiencia';
class EditarPerfil extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loguser: ''
        }
    }

    componentDidMount(){
            fetch(`${Api}/logsesion`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                this.setState({loguser: res.loguser})
            })
    }

    render(){
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <BarraUsuario/>
                <div className='container pt-4'>
                    <HPerfil/>
                </div>
                <div className="container pt-4">
                    <div className="container-fluid row">
                        <div className="col-12"><EditCarreras tituloBoton="Carreras"/></div>
                        <div className="col-12"><EditCertificados tituloBoton="Diplomas/Certificados" /></div>
                        <div className="col-12"><EditAptitudes tituloBoton="Aptitudes"/></div>
                        <div className="col-12"><EditExperiencia tituloBoton="Experiencia Laboral"/></div>
                    </div>
                </div>
            </div>
        )
    }
    

} 

export default EditarPerfil;