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
            carreras: [],
            diplomas: [],
            aptitudes: [],
            experiencia: []
        }
    }

    componentDidMount(){
        this.loadData("carrerasegresado", "carreras")
        this.loadData("diplomasegresado", "diplomas")
        this.loadData("aptitudesegresado", "aptitudes")
        this.loadData("experiencialaboral", "experiencia")
    }

    loadData(entidad, arreglo){
        fetch(`${Api}/${entidad}/${this.props.dui}`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(datos => {
            this.setState({
                [arreglo] : datos,
            })
        })
        .catch(e => console.error(e))
    }

    filtrar(){
        let list
        switch (this.props.tituloBoton) {
            case 'Carreras':
                list = this.state.carreras.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark" key={i}>{d.carrera}</li>
                    }
                })
                return list
            case 'Diplomas/Certificados':
                list = this.state.diplomas.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark" key={i}>
                            {d.nombre}
                        </li>
                    }
                })
                return list
            case 'Aptitudes':
                list = this.state.aptitudes.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark" key={i}>
                            {d.aptitud}
                        </li>
                    }
                })
                return list
            case 'Experiencia Laboral':
                list = this.state.experiencia.map((d,i) => {
                    return{
                        data : <li className="list-group-item bg-dark" key={i}>
                            Empresa: {d.nombre}<br/>
                            Cargo: {d.cargo}<br/>
                            Fecha Inicio: {d.fechainicio}<br/>
                            Fecha Fin: {d.fechafin}<br/>
                            Area: {d.area}<br/>
                        </li>
                    }
                })
                return list
            default:
                list = { data : <li className="list-group-item bg-dark">No hay datos</li>}
                return list
        }
    }
    
    /**
     * Funcion para mostrar/ocultar el contenido del card
     * Por defecto se muestra pero si se da click en el boton cambia el estado
     */
    collapse(){ (this.state.isOpened === true) ? this.setState({isOpened: false}) : this.setState({isOpened: true}) }

    render(){
        const lista = this.filtrar();
        return(
            <div className="card bg-dark">
                <div className="btn btn-primary">
                    <div className="card-header" aria-expanded="true" onClick={() => this.collapse()}>
                        {this.props.tituloBoton}
                    </div>
                </div>
                <Collapse isOpened={this.state.isOpened}>                
                    <div className="card-body mt-3">
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