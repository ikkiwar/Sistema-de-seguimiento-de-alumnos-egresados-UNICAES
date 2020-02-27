import React from 'react';
import Api from '../Api';
import Ddlist from './Ddlist';

class Fcarreras extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            facultades: [],
            tiposcarrera: [],
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
        fetch(`${Api}${"/tiposcarrera"}`, {
            method: "GET"
          })
          .then(Response => Response.json())
          .then(tiposcarrera => {
            this.setState({
              tiposcarrera: tiposcarrera
              });
          });
        
      }

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
        let facultades = this.state.facultades.map(function (facultad) {
            return { value: facultad.idfacultad, label: facultad.facultad };
        })

        let tiposcarrera = this.state.tiposcarrera.map(function (tcarrera) {
            return { value: tcarrera.idtipocarrera, label: tcarrera.tipocarrera };
        })

return(
    <div>
<div class="container-fluid row">
        <div class="col-4"></div>
        <div class="col-4">
            <p class="h3" >Carreras</p>
        </div>
        <div class="col-4"></div>
    </div>
    <br />
    <form onSubmit={this.handleSubmit}>
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="txtcarrera">Nombre de carrera:</label>
                    <br />
                    <input type="text" class="form-control" name="txtcarrera" 
                    placeholder="Ej. Lic. en psicología" />
                </div>
                <div class="col-5">
                    <label for="cmbTipo">Tipo:</label>
                    <br />
                    <Ddlist entidad="/facultades" className="dd" name="cmbTipo" setValue={tiposcarrera} />

                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="cmbFacultad">Facultad:</label>
                    <br />
                    <Ddlist className="dd" name="cmbFacultad" setValue={facultades} />
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
export default Fcarreras;