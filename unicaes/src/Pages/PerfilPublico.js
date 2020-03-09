import React from 'react';
import BarraUsuario from '../Components/BarraUsuario';
import HPerfil from "../Components/HPerfil";
import Cards from "../Components/Cards";
import Api from "../Api";
class PerfilPublico extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loguser: this.props.dui
        }
    }

   /*  componentDidMount(){
            fetch(`${Api}/logsesion`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                this.setState({loguser: res.loguser})
            })
    } */

    render(){
        console.log("usuario: ",this.props.location.dui);
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <BarraUsuario/>
                <div className='container pt-4'>
                    <HPerfil entidad="/perfil/" loguser={this.props.location.dui}/>
                </div>
                <div className="container pt-4">
                    <div className="container-fluid row">
                        <div className="col-12"><Cards tituloBoton="Carreras"
                         entidadcarreras="carrerasegresado" user={`/${this.props.location.dui}`}/></div>
                        <div className="col-12"><Cards tituloBoton="Diplomas/Certificados" 
                        entidaddiploma="diplomasegresado" user={`/${this.props.location.dui}`}/></div>
                        <div className="col-12"><Cards tituloBoton="Aptitudes"
                        entidadaptitudes="aptitudesegresado" user={`/${this.props.location.dui}`}/></div>
                        <div className="col-12"><Cards tituloBoton="Experiencia Laboral"
                        entidadexperiencia="experiencialaboral" user={`/${this.props.location.dui}`}/></div>
                    </div>
                </div>
            </div>
        )
    }
    

}
export default PerfilPublico;