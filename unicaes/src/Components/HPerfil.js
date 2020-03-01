import React from 'react';
import Imagenes from "./Imagenes";
import Api from "../Api";
class HPerfil extends React.Component{
    /**
     * Este componente muestra informacion personal del usuario en forma de ficha
     */
    constructor(props){
        super(props)
        this.state = {
            datos: []
        }
    }

    componentDidMount(){
        console.log(`${Api}/perfil/${this.props.dui}`);
        
        fetch(`${Api}/perfil/${this.props.dui}`, {
            method: "GET"
        })
        .then(Response => Response.json())
        .then(datos => {
            this.setState({
                datos: datos
            });
        });
    }

    render(){
        const datos = this.state.datos
        return(
            <div className="border border-warning row">
                <div className="col-1"></div>
                <div className="col-3">
                    <Imagenes 
                        imagen="https://www.kontron.com/about-kontron/careers/images/work/work_professionals.jpg" 
                        clases="border rounded-circle rounded-border border-dark" 
                        height="250" width="250"/>
                </div>
                <div className="col-1"></div>
                <div className="col-6 pt-5">
                    {datos.map((d, i) => {
                        return <div key={i}> 
                            <p className="h4">{d.nombrePersona} {d.apellido}</p> 
                            <p className="h5">{d.carrera}</p>
                            <p className="h6"><a href="/">{d.correo}</a></p>
                            <p className="h6"><a href="/">{d.telefono}</a></p>
                        </div>
                        
                    })}
                </div>
                <div className="col-2"></div>
            </div>
        )    
    }
}

export default HPerfil