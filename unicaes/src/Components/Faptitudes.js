import React from 'react';

class Faptitudes extends React.Component{
render(){
    return(
    <div>
         <div className="container-fluid row">
        <div className="col-4"></div>
        <div className="col-4">
            <p className="h3" >Lista de Aptitudes</p>
        </div>
        <div className="col-4"></div>
    </div>
    <br />
 <form name="nuevaAptitud" method="POST">
        <div className="container">
            <div className="container-fluid row d-flex p-2 bd-highlight border border-warning">
                <div className="col-1"></div>
                <div className="col-5">
                    <label htmlFor="txtAptitud">Nueva Aptitud:</label>
                    <br />
                    <input type="text" className="form-control" name="txtAptitud" 
                    placeholder="Ej. Responsabilidad" />
                </div>
                <div className="col-5">
                    <label>&nbsp;</label>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Registrar"/>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
          
    </form>
    </div>
       
    )
}

}

export default Faptitudes;