import React from 'react';

class Ftipodecarreras extends React.Component {

    render() {
        return (
            <div>
                <div class="container-fluid row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <p class="h3" >Tipos de carrera</p>
                    </div>
                    <div class="col-4"></div>
                </div>
                <br />
                <form name="nuevoTipo" method="POST">
                    <div class="container">
                        <div class="container-fluid row d-flex p-2 bd-highlight border border-warning">
                            <div class="col-1"></div>
                            <div class="col-5">
                                <label for="txtTipo">Nuevo Tipo:</label>
                                <br />
                                <input type="text" class="form-control" name="txtTipo" placeholder="Ej. Presencial" />
                            </div>
                            <div class="col-5" >
                                <label>&nbsp;</label>
                                <br />
                                <input class="btn btn-primary" type="submit" value="Registrar" />
                            </div>
                            <div class="col-2"></div>
                        </div>
                    </div>

                </form>
            </div>

        )
    }
}
export default Ftipodecarreras;