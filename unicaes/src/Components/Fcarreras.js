import React from 'react';
import Api from '../Api';
import DynamicSelect from './DynamicSelect';
import Toast from '../Components/Toast';

class Fcarreras extends React.Component {

    state = {}

    constructor(props) {
        super(props);
        this.state = {
            facultades: [],
            tiposcarrera: [],
            carrera : '',
            idfacultad: '',
            tipocarrera: ''

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


            let res = await fetch(`${Api}${'/carreras'}`, confing)

            let json = await res.json()

            console.log(json)
        } catch (error) {

        }

         window.location.replace('');

    }

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`)
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
    }


    handleSelectChangeTC = (selectedValue) => {
        console.log(selectedValue)
        this.setState({
            tipocarrera: selectedValue
        });
    }
    handleSelectChangeF = (selectedValue) => {
        console.log(selectedValue)
        this.setState({
            idfacultad: selectedValue

        });
    }

    render() {
        let facultades = this.state.facultades.map((facultad) =>
            <option
                key={facultad.idfacultad}
                value={facultad.idfacultad}>
                {facultad.facultad}
            </option>
        );

        let tiposcarrera = this.state.tiposcarrera.map((tcarrera) =>
            <option
                key={tcarrera.idtipocarrera}
                value={tcarrera.idtipocarrera}>
                {tcarrera.tipocarrera}
            </option>
        )

        return (
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
                                <label for="carrera">Nombre de carrera:</label>
                                <br />
                                <input type="text" class="form-control" name="carrera"
                                    placeholder="Ej. Lic. en psicología"
                                    onChange={this.handleChange}
                                    value={this.state.carrera}
                                />
                            </div>
                            <div class="col-5">
                                <label for="cmbTipo">Tipo:</label>
                                <br />
                                <DynamicSelect className="dd" setValue={tiposcarrera}
                                    setSelectTag={'Seleccione tipo de carrera'}

                                    onSelectChange={this.handleSelectChangeTC}

                                />

                            </div>
                            <div class="col-1"></div>
                            <div class="col-1"></div>
                            <div class="col-5">
                                <label for="cmbFacultad">Facultad:</label>
                                <br />
                                <DynamicSelect className="dd" setValue={facultades}
                                    setSelectTag={'Seleccione facultad'}

                                    onSelectChange={this.handleSelectChangeF}

                                />
                            </div>
                            <div class="col-5">
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
export default Fcarreras;