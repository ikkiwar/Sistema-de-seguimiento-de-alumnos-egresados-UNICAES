import React from 'react';

class Fdecanos extends React.Component{

render(){
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
                    <select class="btn btn-light dropdown-toggle form-control">
                        <option value="#">Facultad</option>
                        <option value="#">CC Humanidades</option>
                        <option value="#">CC Empresariales</option>
                        <option value="#">CC de la salud</option>
                        <option value="#">Ingeniería y arquitectura</option>
                        <option value="#">Multidisciplinaria de Ilobasco</option>
                    </select>
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