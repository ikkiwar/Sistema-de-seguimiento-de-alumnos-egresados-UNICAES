import React from 'react';
import Fregistro from '../Components/Fregistro';
// import Imagen from '../Components/Imagenes';
import '../Components/Styles/Registro.css';
import  Logo from '../Images/logo_u.png';
import Barra from '../Components/Barra';
class Registro extends React.Component {

    render() {

        return(
            <div className="fondo">
                 <style>{'body { background-color: #9E2723; }'}</style>
                 <Barra/>
                <div className="simbolo">
                <img src={Logo}  className="simbolo" alt=""/>
                </div>
                <Fregistro entidad="/usuarios"/>
            </div>
        )

    }

}

export default Registro;