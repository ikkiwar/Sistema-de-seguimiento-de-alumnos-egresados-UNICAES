import React from 'react';
import '../Components/Styles/Finstituciones.css';
import Api from '../Api';
import DynamicSelect from './DynamicSelect';
import Toast from '../Components/Toast';


class Finstituciones extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            departamentos: [],
            municipios: [],
            direccion: '',
            idmunicipio: '',
            nombre: '',
            telefono: ''
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

            let res = await fetch(`${Api}${'/instituciones'}`, confing)
            let json = await res.json()

            console.log(json)
        } catch (error) {

        }

          window.location.replace('');

    }

     componentDidMount() {
        fetch(`${Api}${"/departamentos"}`, {
          method: "GET"
        })
        .then(Response => Response.json())
        .then(departamentos => {
          this.setState({
            departamentos: departamentos
            });
        });
      }

      handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`)
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
    }

      handleSelectChangeD = (selectedValue) =>{
        this.setState({
          selectedValue: selectedValue
        });
        fetch(`${Api}${"/municipiosdep/"}${selectedValue}`, {
            method: "GET"
          })
          .then(Response => Response.json())
          .then(municipios => {
            this.setState({
              municipios: municipios
              });
          });
      }

      handleSelectChangeM = (selectedValue) =>{
        this.setState({
          idmunicipio: selectedValue
        });
      }

    render() {

        let departamentos = this.state.departamentos.map((departamento) => 
            <option
                key={departamento.iddepartamento}
                value={departamento.iddepartamento}
            >
                {departamento.departamento}
            </option>
        );
        let municipios = this.state.municipios.map((municipio) => 
            <option
                key={municipio.idmunicipio}
                value={municipio.idmunicipio}
            >
                {municipio.municipio}
            </option>
        );

        return (
            <div className="finstituciones">

                <div className="titulo1">
                <div class="container-fluid row" >
        <div class="col-4"></div>
        <div class="col-4">
            <p class="h3" >Instituciones</p>
        </div>
        <div class="col-4"></div>
    </div>
    <br />
                </div>
 
    <form onSubmit={this.handleSubmit}>
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="txtInstitucion">Nombre de institución/empresa:</label>
                    <br />
                    <input type="text" class="form-control" name="nombre"
                     placeholder="Ej. UNICAES" onChange={this.handleChange}
                     value={this.state.nombre}/>
                </div>
                <div class="col-5">
                    <label for="txtDirección">Dirección:</label>
                    <br />
                    <input type="text" class="form-control" name="direccion" 
                    placeholder="Ej. By pass Carretera a Metapán y carretera 
                    antigua a San Salvador" onChange={this.handleChange}
                    value={this.state.direccion}/>
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="cmbDepa">Departamento:</label>
                    <br />
                    <DynamicSelect setValue={departamentos} setSelectTag={'Seleccione departamento'} onSelectChange={this.handleSelectChangeD} />
                </div>
                <div class="col-5">
                    <label for="cmbMun">Municipio:</label>
                    <br />
                    <DynamicSelect setValue={municipios} setSelectTag={'Seleccione municipio'} onSelectChange={this.handleSelectChangeM} />
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="txtTelefono">Teléfono:</label>
                    <br />
                    <input type="text" class="form-control" name="telefono"
                     placeholder="Ej. 2484-0600" onChange={this.handleChange}
                     value={this.state.telefono}/>
                </div>
                <div class="col-5" >
                    <label>&nbsp;</label>
                    <br />
                   <Toast/>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
          
    </form>
            </div>
        )
    }


}
export default Finstituciones;