import React from "react";
import {Collapse} from "react-collapse";
import Api from "../Api";

class EditExperiencia extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpened : true,
            data: [],
            instituciones: [],
            areas: [],
            cargos: [],
            loguser: ''
        }
    }

    componentDidMount(){
        this.loguser()
        this.loadData()
        this.loadInstituciones()
        this.loadAreas()
        this.loadCargos()
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
        fetch(`${Api}/experiencialaboral`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({data: res})
        })
    }

    loadInstituciones(){
        fetch(`${Api}/instituciones`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({instituciones: res})
        })
    }

    loadAreas(){
        fetch(`${Api}/areaslaborales`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({areas: res})
        })
    }

    loadCargos(){
        fetch(`${Api}/cargos`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({cargos: res})
        })
    }

    collapse(){ (this.state.isOpened === true) ? this.setState({isOpened: false}) : this.setState({isOpened: true}) }

    handleSubmit(e){
        let idEmpresa = document.getElementById('cmbEmpresa').value
        let idArea = document.getElementById('cmbArea').value
        let fechaInicio = document.getElementById('fechaInicio').value
        let fechaFin = document.getElementById('fechaFin').value
        let cargo = document.getElementById('cmbCargo').value
        let cuerpo = {
            institucion: idEmpresa, 
            cargo: cargo, 
            arealaboral: idArea, 
            fechainicio: fechaInicio, 
            fechafin: fechaFin
        }
        fetch(`${Api}/experiencialaboral`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cuerpo)
        })
        .then(res => res.json())
        .catch(error => console.log(error))

        setTimeout(()=>{
            window.location.replace('/Perfil')
        }, 3000);
       // window.location.replace('/Perfil');
    }

    render(){
        const lista = this.state.data
        const instituciones = this.state.instituciones
        const areas = this.state.areas
        const cargos = this.state.cargos
        return(
            <div className="card bg-dark" >
                <div className="btn btn-primary">
                    <div className="card-header" aria-expanded="true" onClick={() => this.collapse()}>
                        {this.props.tituloBoton}
                    </div>
                </div>
                <Collapse isOpened={this.state.isOpened}>
                    <div className="container mt-2">
                        <div className="p-2 bd-highlight border border-warning">
                            <div className="row">
                                <div className="col-6">
                                    <label  style={{color: "white"}}>Empresa: </label><br />
                                    <select id="cmbEmpresa" className="form-control">
                                        {instituciones.map((i,j) =>{
                                            return <option value={i.idinstitucion} key={j}>{i.nombre}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label  style={{color: "white"}}>Area: </label><br />
                                    <select id="cmbArea" className="form-control">
                                        {areas.map((i,j) =>{
                                            return <option value={i.idArea} key={j}>{i.area}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <label  style={{color: "white"}}>Fecha de Inicio: </label><br />
                                    <input type="date" id="fechaInicio" className="form-control"></input>
                                </div>
                                <div className="col-6">
                                    <label  style={{color: "white"}}>Fecha de Finalizacion: </label><br />
                                    <input type="date" id="fechaFin" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-10">
                                    <label  style={{color: "white"}}>Cargo: </label><br />
                                    <select id="cmbCargo" className="form-control">
                                        {cargos.map((i,j) =>{
                                            return <option value={i.idcargo} key={j}>{i.cargo}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-2 mt-1">
                                    <br/>
                                    <input className="btn btn-primary" type="button" value="Agregar" onClick={this.handleSubmit}/>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="card-body mt-3">
                        <ul className="list-group list-group-flush collapse show" style={{color: "white"}}>
                            {lista.map((l, i) =>{
                                return <li className="list-group-item bg-dark" key={i}>
                                    Empresa: {l.nombre}<br/>
                                    Cargo: {l.cargo}<br/>
                                    Fecha Inicio: {l.fechainicio}<br/>
                                    Fecha Fin: {l.fechafin}<br/>
                                    Area: {l.area}<br/>
                                </li>
                                // return l.data
                            })}
                        </ul>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default EditExperiencia