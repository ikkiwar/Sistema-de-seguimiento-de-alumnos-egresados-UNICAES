import React from 'react';
import Api from '../Api';

class Faptitudes extends React.Component{

    state = {}

    handleSubmit = async e =>{
       e.preventDefault()
        console.log(this.state)

        try {
            let confing = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(this.state)
            }
            
            let res = await fetch(`${Api}${this.props.entidad}`,confing)
            let json = await res.json()

            console.log(json)
        } catch (error) {
            
        }

    }

    handleChange = e => {
      //  console.log(`${e.target.name}: ${e.target.value}`)
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
    }

render(){
    return(
    <div>
         <div className="container-fluid row">
        <div className="col-4"></div>
        <div className="col-4">
            <p className="h3" >Lista de Aptitudes</p>
        </div>
        <div className="col-4"></div>
    </div>
    <br />
 <form onSubmit={this.handleSubmit}>
        <div className="container">
            <div className="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div className="col-1"></div>
                <div className="col-5">
                    <label htmlFor="aptitud">Nueva Aptitud:</label>
                    <br />
                    <input type="text" className="form-control" name="aptitud" 
                    placeholder="Ej. Responsabilidad"
                    onChange={this.handleChange}
                    value={this.state.txtAptitud}
                    />
                </div>
                <div className="col-5">
                    <label>&nbsp;</label>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Registrar"/>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
          
    </form>
    </div>
       
    )
}

}

export default Faptitudes;