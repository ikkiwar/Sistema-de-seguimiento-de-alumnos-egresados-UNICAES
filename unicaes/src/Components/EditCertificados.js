import React from "react";
import {Collapse} from "react-collapse";
import Api from "../Api";
import DynamicSelect from "../Components/DynamicSelect";




class EditCertificados extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpened : true,
            diplomas : [],
            instituciones: [],
            areas: [],
            nombre: "",
            institucion: "",
            area: "",
            loguser: ''
        }
    }

    componentDidMount(){
        this.loguser()
        this.loadData()
        this.loadInstituciones()
        this.loadAreas()
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
        fetch(`${Api}/diplomasegresado/$`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({diplomas : data})
        })
    }

    postInstitucion(data){
        fetch(`${Api}/diplomasegresado`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(this.refresh())
        .catch(error => console.log(error))
    }

    loadInstituciones(){
        fetch(`${Api}/diplomas`, {
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

    collapse(){ (this.state.isOpened === true) ? this.setState({isOpened: false}) : this.setState({isOpened: true}) }

    handleSubmit(e){
        /* console.log(`
            nombre: ${document.getElementById('fecha').value}
            institucion: ${document.getElementById('cmbInstitucion').value}
            area: ${document.getElementById('cmbArea').value}
        `); */

        let id = document.getElementById('cmbInstitucion').value
        let fecha = document.getElementById('fecha').value
        console.log("este es el id:",id,"fecha", fecha ,JSON.stringify({diplomascertificacion: id , fecha: fecha}) )
        fetch(`${Api}/diplomasegresado`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({diplomacertificacion: id , fecha: fecha})
            
        })
        .then(res => res.status)
        .catch(error => console.log(error))

        setTimeout(()=>{
            window.location.replace('/Perfil')
        }, 3000);
    }

    render(){
        const lista = this.state.diplomas
        const instituciones = this.state.instituciones
        const areas = this.state.areas
        return(
            <div className="card bg-dark" >
                <div className="btn btn-primary">
                    <div className="card-header" aria-expanded="true" onClick={() => this.collapse()}>
                        {this.props.tituloBoton}
                    </div>
                </div>
                <Collapse isOpened={this.state.isOpened}>
                <form>
                    <div className="container">
                        <div className="container-fluid row d-flex p-3 bd-highlight border border-warning">
                            <div className="col-5">
                                <label  style={{color: "white"}}>fecha:</label>
                              <input type="date" name="fechanacimiento" class="form-control"
                                    id="fecha"
                                />  
                           </div>
                            <div className="col-5">
                                <label  style={{color: "white"}}>Diplomado: </label>
                                <br/>
                                <select id="cmbInstitucion" className="form-control">
                                    {instituciones.map((i, j) =>{
                                        return <option value={i.iddiplomadocertificacion} key={j}>{i.nombre}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-2" >
                                <br />
                                <input style={{float: "right"}} className="btn btn-primary" type="button" value="Agregar" onClick={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </form>
                    <div className="card-body mt-3" >
                        <ul className="list-group list-group-flush collapse show" style={{color: "white"}}>
                            {lista.map((l, i) =>{
                                return <li className="list-group-item bg-dark" key={i}>{l.nombre}</li>
                                // return l.data
                            })}
                        </ul>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default EditCertificados