import React from 'react';
import Api from '../Api';
import DynamicSelect from './DynamicSelect';
import Toast from '../Components/Toast';

class Fdecanos extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            facultades: [],
            facultad: '',
            dui: ''
         } 
       }

       handleSubmit = async e => {
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

            let res = await fetch(`${Api}${'/decanos'}`, confing)
            let json = await res.json()

            console.log(json)
        } catch (error) {

        }

        //  window.location.replace('');

    }

     componentDidMount() {
        fetch(`${Api}${"/facultades"}`, {
          method: "GET"
        })
        .then(Response => Response.json())
        .then(facultades => {
          this.setState({
            facultades: facultades
            });
        });
      }

      handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`)
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
    }

      handleSelectChange = (selectedValue) =>{
        this.setState({
          facultad: selectedValue
        });
      }

render(){

    let facultades = this.state.facultades.map((facultad) =>
            <option
            key={facultad.idfacultad}
            value={facultad.idfacultad}>
                {facultad.facultad}
            </option>
        );

return(
    <div>
        <br/>
<div class="container-fluid row">
        <div class="col-4"></div>
        <div class="col-4">
            <p class="h3">Decanos</p>
        </div>
        <div class="col-4"></div>
    </div>
    <br />
    <form onSubmit={this.handleSubmit}>
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-4">
                    <label for="txtDUI">DUI:</label>
                    <br />
                    <input type="text" class="form-control" name="txtDUI" 
                    placeholder="Ej. 12345678-9" onChange={this.handleChange}
                    value={this.state.dui} name="dui" />
                </div>
                <div class="col-4">
                    <label for="cmbFacultad">Facultad:</label>
                    <br />
                    <DynamicSelect className="dd" setSelectTag={'Seleccione facultad'} setValue={facultades} onSelectChange={this.handleSelectChange} />
                </div>
                <div class="col-2" >
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
export default Fdecanos;