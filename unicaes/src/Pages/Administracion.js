import React from 'react';
import Barra from '../Components/Barra';
import { Button } from 'react-bootstrap';
import '../Components/Styles/Panel.css'

class Administracion extends React.Component {


    render() {
        return (
            <div className="contenedor">
                <style>{'body { background-color: #9E2723; }'}</style>
              
                <Barra />
                <br/>
                <h1>Panel de Administración</h1>
                <form className="panel">
                    <div class="row" class="contenido">
                        
                        <Button variant="outline-warning" href="/Aptitudes">Aptitudes</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outline-warning" href="/AreasLaborales">Areas Laborales</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outline-warning" href="/Cargos"> Cargos</Button>
                    </div>
                    <br />
                    <div class="row" class="contenido">
                        <Button variant="outline-warning" href="/Carreras">Carreras</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outline-warning" href="/Decanos">Decanos</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outline-warning" href="/Facultades">Facultades</Button>
                       
                    </div>
                    <br />
                    <div class="row" class="contenido">
                        <Button variant="outline-warning" href="/Instituciones">Instituciones</Button>
                        &nbsp;
                        <Button variant="outline-warning" href="/Registro">Registro de usuarios</Button>
                        &nbsp;
                        <Button variant="outline-warning" href="/TipodeCarreras">Tipo de Carreras</Button>
                    </div>



                </form>

            </div>
        )
    }

}

export default Administracion 