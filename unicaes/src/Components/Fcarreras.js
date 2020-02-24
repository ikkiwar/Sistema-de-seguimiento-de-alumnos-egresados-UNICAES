import React from 'react';

class Fcarreras extends React.Component{

    render(){
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
    <form name="nuevaInstitucion" method="POST">
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
                    <select class="btn btn-light dropdown-toggle form-control">
                        <option value="#">Tipo de carrera</option>
                        <option value="#">Presencial</option>
                        <option value="#">Semi presencial</option>
                    </select>
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="cmbFacultad">Facultad:</label>
                    <br />
                    <select class="btn btn-light dropdown-toggle form-control">
                        <option value="#">Facultad</option>
                        <option value="#">CC Humanidades</option>
                        <option value="#">CC Empresariales</option>
                        <option value="#">CC de la salud</option>
                        <option value="#">Ingeniería y arquitectura</option>
                        <option value="#">Multidisciplinaria de Ilobasco</option>
                    </select>
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