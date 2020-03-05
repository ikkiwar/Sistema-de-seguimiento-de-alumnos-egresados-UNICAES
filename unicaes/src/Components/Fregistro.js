import React from 'react';
import "./Styles/Fregistro.css"
import Api from '../Api';
import Toast from '../Components/Toast';

class Fregistro extends React.Component {

    state = {}

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

            let res = await fetch(`${Api}${this.props.entidad}`, confing)
            let json = await res.json()

            console.log(json)
        } catch (error) {

        }
        setTimeout(console.log("Cerrando"), 4000);
        window.location.replace('');

    }

    handleChange = e => {
       // console.log(`${e.target.name}: ${e.target.value}`)
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
    }
    render() {
        return (

            <div className="fregistro">
                <h3 className="salu2">Registro de Usuarios</h3>
                <div >
                    <form onSubmit={this.handleSubmit} >
                        <div class="row" >
                            <div class="col-3" >
                                <label for="usuario">Usuario:</label>
                            </div>
                            <div class="col-8" >
                                <input type="text" name="usuario" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.usuario}

                                />
                            </div>
                        </div>
                        <br />

                        <div class="row">
                            <div class="col-3">
                                <label for="contrasena">Contraseña:</label>
                            </div>
                            <div class="col-8">
                                <input type="password" name="contrasena" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.contrasena}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="dui">DUI:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="dui" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.dui}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="nit">NIT:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="nit" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.nit}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="nombre">Nombre:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="nombre" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.nombre}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="apellido">Apellido:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="apellido" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.apellido}
                                /><br />
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col-3" >
                                <label for="foto">Foto:</label>
                            </div>
                            <div class="col-8" >
                            <input type="file" class="form-control-file"
                             id="exampleFormControlFile1"
                             name="foto"
                             onChange={this.handleChange}
                             value={this.state.foto}
                            />
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-3">
                                <label for="telefono">Teléfono:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="telefono" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.telefono}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="direccion">Dirección:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="direccion" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.direccion}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="correo">Correo:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="correo" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.correo}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="fechanacimiento">Nacimiento:</label>
                            </div>
                            <div class="col-8">
                                <input type="date" name="fechanacimiento" class="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.feachanacimiento}
                                /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtSexo">Sexo:</label>
                            </div>
                            <div class="col-8">
                                <select class="dropdown-toggle form-control"
                                    name="sexo"
                                    onChange={this.handleChange}
                                    value={this.state.sexo}
                                >
                                    <option value="F">F</option>
                                    <option value="M">M</option>
                                </select>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-3">
                            </div>
                            <div class="col-8" >
                               <Toast/>
                                    
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }


}

export default Fregistro;