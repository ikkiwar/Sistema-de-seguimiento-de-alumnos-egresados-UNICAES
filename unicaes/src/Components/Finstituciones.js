import React from 'react';
import '../Components/Styles/Finstituciones.css';

class Finstituciones extends React.Component {

    render() {
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
 
    <form name="nuevaInstitucion" method="POST">
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="txtInstitucion">Nombre de institución/empresa:</label>
                    <br />
                    <input type="text" class="form-control" name="txtInstitucion"
                     placeholder="Ej. UNICAES" />
                </div>
                <div class="col-5">
                    <label for="txtDirección">Dirección:</label>
                    <br />
                    <input type="text" class="form-control" name="txtDirección"
                    placeholder="Ej. By pass Carretera a Metapán y carretera 
                    antigua a San Salvador"/>
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="cmbDepa">Departamento:</label>
                    <br />
                    <select class="btn btn-light dropdown-toggle form-control">
                        <option value="#">Departamentos</option>
                        <option value="#">Santa Ana</option>
                        <option value="#">Chalatenango</option>
                    </select>
                </div>
                <div class="col-5">
                    <label for="cmbMun">Municipio:</label>
                    <br />
                    <select class="btn btn-light dropdown-toggle form-control">
                        <option value="#">Municipios</option>
                        <option value="#">Candelaria de la Frontera</option>
                    </select>
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="txtTelefono">Teléfono:</label>
                    <br />
                    <input type="text" class="form-control" name="txtTelefono"
                     placeholder="Ej. 2484-0600" />
                </div>
                <div class="col-5" >
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
export default Finstituciones;