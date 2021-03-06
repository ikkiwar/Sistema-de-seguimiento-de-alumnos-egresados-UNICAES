import React from "react";
import {Collapse} from "react-collapse";
import Api from "../Api";

class EditAptitudes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpened : true,
            data: [],
            aptitudes: [],
            loguser: ''
        }
    }

    componentDidMount(){
        this.loguser()
        this.loadData()
        this.loadAptitudes()
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
        fetch(`${Api}/aptitudesegresado`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({data : data})
        })
    }

    loadAptitudes(){
        fetch(`${Api}/aptitudes`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res =>{
            this.setState({aptitudes: res})
        })
    }

    collapse(){ (this.state.isOpened === true) ? this.setState({isOpened: false}) : this.setState({isOpened: true}) }

    handleSubmit(e){
        let idA = document.getElementById('cmbAptitud').value
        console.log("ID apritud", idA)
        fetch(`${Api}/aptitudesegresado`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idaptitud: idA})
        })
        .then(res => res.status)
        .catch(error => console.log(error))

        setTimeout(()=>{
            window.location.replace('/Perfil')
        }, 3000);
       // window.location.replace('/Perfil');
    }

    render(){
        const lista = this.state.data
        const aptitudes = this.state.aptitudes
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
                        <div className="container-fluid row d-flex p-2 bd-highlight border border-warning">
                            <div className="col-10">
                                <label  style={{color: "white"}}>Aptitud: </label><br />
                                <select id="cmbAptitud" className="form-control">
                                    {
                                    aptitudes.map((i, j) =>{
                                        return <option value={i.idaptitud} key={j}>{i.aptitud}</option>
                                    })
                                    }
                                </select>
                            </div>
                            <div className="col-2">
                            <br />
                                <input className="btn btn-primary" type="button" value="Agregar" onClick={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </form>
                    <div className="card-body mt-3">
                        <ul className="list-group list-group-flush collapse show" style={{color: "white"}}>
                            {lista.map((l, i) =>{
                                return <li className="list-group-item bg-dark" key={i}>{l.aptitud}</li>
                                // return l.data
                            })}
                        </ul>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default EditAptitudes