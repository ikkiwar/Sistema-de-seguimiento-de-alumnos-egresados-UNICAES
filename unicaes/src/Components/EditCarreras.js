import React from "react";
import {Collapse} from "react-collapse";
import Api from "../Api";
import DynamicSelect from "../Components/DynamicSelect";

class EditCarreras extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpened : true,
            info: [],
            carreras: [],
            loguser: ''
        }
    }

    componentDidMount(){
        fetch(`${Api}/carrerasegresado`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({info : res})
        })
        this.loguser()
        this.loadCarreras()
    }

    loguser(){
        fetch(`${Api}/logsesion`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({loguser: res.loguser})
        })
    }

    loadData(){
        fetch(`${Api}/carrerasegresado`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({info : res})
        })
    }

    loadCarreras(){
        fetch(`${Api}/carreras`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({carreras: res})
        })
    }

    collapse(){ (this.state.isOpened === true) ? this.setState({isOpened: false}) : this.setState({isOpened: true}) }

    handleSubmit(e){
        let id = document.getElementById('cmbCarreras').value
        console.log("este es el id:",id)
        fetch(`${Api}/carrerasegresado`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idcarrera: id})
        })
        .then(res => res.status)
        .catch(error => console.log(error))
    }

    render(){
        const lista = this.state.info
        console.log(lista);
        const carreras = this.state.carreras
        return(
            <div className="card bg-dark" >
                <div className="btn btn-primary">
                    <div className="card-header" aria-expanded="true" 
                    onClick={() => this.collapse()}>
                        {this.props.tituloBoton}
                    </div>
                </div>
                <Collapse isOpened={this.state.isOpened}>
                <form>
                    <div className="container">
                        <div className="container-fluid row d-flex p-2 bd-highlight
                         border border-warning">
                            <div className="col-sm-3">
                                <label>Aptitud: </label>
                                <select id="cmbCarreras">
                                    {carreras.map((i, j) =>{
                                        return <option value={i.idcarrera} 
                                        key={j}>{i.carrera}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <input className="btn btn-primary" type="button" 
                                value="Agregar" onClick={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </form>
                    <div className="card-body mt-3">
                        <ul className="list-group list-group-flush collapse show" 
                        style={{color: "white"}}>
                            {/* {lista.map((l, i) =>{
                                return <li className="list-group-item bg-dark" key={i}>{l.carrera}</li>
                                // return l.data
                            })} */}
                        </ul>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default EditCarreras