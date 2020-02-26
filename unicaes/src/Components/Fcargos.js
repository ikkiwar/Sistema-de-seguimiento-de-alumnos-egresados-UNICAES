import React from 'react';
import Api from '../Api';


class Fcargos extends React.Component{

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

        window.location.replace('');

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
<div class="container-fluid row">
        <div class="col-4"></div>
        <div class="col-4">
            <p class="h3" >Listado de cargos</p>
        </div>
        <div class="col-4"></div>
    </div>
    <br />
    <form onSubmit={this.handleSubmit}>
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="cargo">Nuevo Cargo:</label>
                    <br />
                    <input type="text" class="form-control" name="cargo" 
                    placeholder="Ej. Gerente general"
                    onChange={this.handleChange}
                    value={this.state.cargo}
                    />
                    
                </div>
                <div class="col-5">
                    <label>&nbsp;</label>
                    <br />
                    <input class="btn btn-primary" type="submit" value="Registrar"/>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
          
    </form>

</div>

)

}

}

export default Fcargos 