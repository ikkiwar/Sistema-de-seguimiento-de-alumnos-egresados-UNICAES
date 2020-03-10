import React from 'react';
import BarraUsuario from '../Components/BarraUsuario';
import HPerfil from "../Components/HPerfil";
import Cards from "../Components/Cards";
import Api from "../Api";
class PerfilPublico extends React.Component{
    constructor(props){
        var dui = window.location.href;
        dui = dui.substring(dui.length-10,dui.length);
        // var valDui = new RegExp('\d{8}-\d{1}');
        if(! /^\d{8}-\d{1}$/.test(dui)){
            alert('Bad Request')
            setTimeout(()=>{
                window.location.replace('/Notfound')
            }, 500);
        }
        super(props)
        this.state={
            loguser: dui
        }
        //alert(dui);
    }

    copyCodeToClipboard = () => {
        document.getElementById("dummy").value = window.location.href;
        var copyText = document.getElementById("dummy");

        copyText.select();
        //copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        //alert("Perfil: " + copyText.value + " copiado");
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
        console.log("usuario: ",this.state.loguser);
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <BarraUsuario/>
                <div className='container pt-4'>
                    <HPerfil entidad="/perfil/" loguser={this.state.loguser}/>
                </div>
                <div className="container pt-4">
                    <div className="container-fluid row">
                        <div className="col-12"><Cards tituloBoton="Carreras"
                         entidadcarreras="carrerasegresado" user={`/${this.state.loguser}`}/></div>
                        <div className="col-12"><Cards tituloBoton="Diplomas/Certificados" 
                        entidaddiploma="diplomasegresado" user={`/${this.state.loguser}`}/></div>
                        <div className="col-12"><Cards tituloBoton="Aptitudes"
                        entidadaptitudes="aptitudesegresado" user={`/${this.state.loguser}`}/></div>
                        <div className="col-12"><Cards tituloBoton="Experiencia Laboral"
                        entidadexperiencia="experiencialaboral" user={`/${this.state.loguser}`}/></div>
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-info" onClick={() => this.copyCodeToClipboard()}>
                        Compartir
                    </button>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-3"></div>
                    <div className="d-flex justify-content-center col-6">
                        <input type="text" className="form-control" id="dummy" name="dummy" value="" />
                    </div>
                    <div className="col-3"></div>
                </div>
                <br />
                <br />
            </div>
            
        )
    }
    

}
export default PerfilPublico;