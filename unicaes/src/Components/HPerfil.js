import React from 'react';
import Imagenes from "./Imagenes";
import Api from "../Api";
import '../Components/Styles/Presentacion.css'
class HPerfil extends React.Component {
    /**
     * Este componente muestra informacion personal del usuario en forma de ficha
     */
    constructor(props) {
        super(props)
        this.state = {
            datos: []
        }
    }

    componentDidMount() {
        fetch(`${Api}/perfil`, {
            method: "GET"
        })
            .then(Response => Response.json())
            .then(datos => {
                this.setState({
                    datos: datos
                });
            });
    }

    render() {
        const datos = this.state.datos
        return (
            <div className="border border-warning row">

                <div className="contenedor2">
                    {datos.map((d, i) => {
                        return <div key={i}>
                            <div className="presentacion">
                                <Imagenes
                                    imagen={d.foto}
                                    clases="border rounded-circle rounded-border border-dark"
                                    height="200" width="220" />
                            </div>
                            
                            <div className="presentacion2">
                            <br/>
                            <br/>
                            
                            <p className="h4">{d.nombrePersona} {d.apellido}</p>
                            <p className="h5">{d.carrera}</p>
                            <p className="h6"><a href="/">{d.correo}</a></p>
                            <p className="h6"><a href="/">{d.telefono}</a></p>
                            </div>
                        </div>

                    })}
                </div>
            </div>
        )
    }
}

export default HPerfil