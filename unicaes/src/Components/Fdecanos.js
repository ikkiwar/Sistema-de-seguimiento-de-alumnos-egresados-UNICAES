import React from 'react';
import Api from '../Api';
import DynamicSelect from './DynamicSelect';

class Fdecanos extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            facultades: [],
         } 
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

      handleSelectChange = (selectedValue) =>{
        this.setState({
          selectedValue: selectedValue
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
    <form name="nuevoDecano" method="POST">
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-4">
                    <label for="txtDUI">DUI:</label>
                    <br />
                    <input type="text" class="form-control" name="txtDUI" 
                    placeholder="Ej. 12345678-9" />
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