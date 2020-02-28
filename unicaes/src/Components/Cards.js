import React from "react";
import {Collapse} from "react-collapse";
import Api from "../Api";
class Cards extends React.Component{
    /**
     * Props:
     *  tituloBoton : El nombre que recibe el boton
     *  dui: para obtener la informacion del perfil
     */
    constructor(props){
        super(props)
        this.state = {
            isOpened: true,
            datos: []
        }
    }

    componentDidMount(){
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

    filtrar(datos){
        let list
        switch (this.props.tituloBoton) {
            case 'Carreras':
                list = datos.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark">{d.carrera}</li>
                    }
                })
                return list
                break;
            case 'Diplomas/Certificados':
                list = datos.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark">
                            {d.carrera}
                        </li>
                    }
                })
                return list
                break;
            case 'Aptitudes':
                list = datos.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark">
                            {d.aptitud}
                        </li>
                    }
                })
                return list
                break;
            case 'Experiencia Laboral':
                list = datos.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark">
                            Empresa: {d.nombre}<br/>
                            Cargo: {d.cargo}<br/>
                            Fecha Inicio: {d.fechainicio}<br/>
                            Fecha Fin: {d.fechafin}<br/>
                            Area: {d.area}<br/>
                        </li>
                    }
                })
                return list
                break;
            default:
                list = datos.map((d,i) => {
                    return{
                    data : <li className="list-group-item bg-dark">No hay datos</li>
                    }
                })
                return list
                break;
        }
    }

    carreras(datos){
        this.setState({
            filtro: datos.map(items => items.carrera)
        })  
    }
    
    /**
     * Funcion para mostrar/ocultar el contenido del card
     * Por defecto se muestra pero si se da click en el boton cambia el estado
     */
    collapse(){ (this.state.isOpened === true) ? this.setState({isOpened: false}) : this.setState({isOpened: true}) }

    render(){
        const datos = this.state.datos
        const lista = this.filtrar(datos)
        console.log(datos);
        console.log(lista);
        
        return(
            <div className="card bg-dark">
                <a className="btn btn-primary">
                    <div className="card-header" aria-expanded="true" onClick={() => this.collapse()}>
                        {this.props.tituloBoton}
                    </div>
                </a>
                <Collapse isOpened={this.state.isOpened}>                
                    <div className="card-body">
                        <ul className="list-group list-group-flush collapse show">
                            {lista.map((l, i) =>{
                                return l.data
                            })}
                        </ul>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Cards