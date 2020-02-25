import React from 'react';
import "./Styles/Fregistro.css"

class Fregistro extends React.Component {

    render() {
        return (

            <div className="fregistro">
                <h3 className="salu2">¡Forma parte de nuestra grandiosa red!</h3>
                <div >
                    <form method="POST">
                        <div class="row" >
                            <div class="col-3" >
                            <label for="txtUsuario">Usuario:</label>
                            </div>
                            <div class="col-8" >
                            <input type="text" name="txtUsuario" class="form-control" />
                            </div>
                            </div>
                        <br />

                        <div class="row">
                            <div class="col-3">
                                <label for="txtContrasena">Contraseña:</label>
                            </div>
                            <div class="col-8">
                                <input type="password" name="txtContrasena" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtDUI">DUI:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtDUI" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtNIT">NIT:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtNIT" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtNombre">Nombre:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtNombre" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtApellido">Apellido:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtApellido" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtTel">Teléfono:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtTel" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtDir">Dirección:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtDir" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtCorreo">Correo:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" name="txtCorreo" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtFecha">Nacimiento:</label>
                            </div>
                            <div class="col-8">
                                <input type="date" name="txtFecha" class="form-control" /><br />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label for="txtSexo">Sexo:</label>
                            </div>
                            <div class="col-8">
                                <select class="dropdown-toggle form-control">
                                    <option value="F">F</option>
                                    <option value="M">M</option>
                                </select>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-3">
                            </div>
                            <div class="col-8" >
                                <input type="submit" name="Submit" value="Registrar"
                                    class="btn btn-success" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }


}

export default Fregistro;