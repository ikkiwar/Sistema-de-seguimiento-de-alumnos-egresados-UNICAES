import React from 'react';

class Ffacultades extends React.Component{

    render(){
return(
    <div>
        <div class="container-fluid row">
          <div class="col-4"></div>
        <div class="col-4">
            <p class="h3" >Lista de facultades</p>
        </div>
        <div class="col-4"></div>
    </div>
    <br />
    <form name="nuevaFacultad" method="POST">
        <div class="container">
            <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="txtfacultad">Nueva Facultad:</label>
                    <br/>
                    <input type="text" class="form-control" name="txtfacultad"
                     placeholder="Ej. Ingeniería y arquitectura" />
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
export default Ffacultades;