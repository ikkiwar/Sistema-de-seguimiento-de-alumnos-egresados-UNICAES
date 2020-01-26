import React from 'react';
import Fregistro from '../Components/Fregistro';
import Imagen from '../Components/Imagenes';
import '../Components/Styles/Registro.css';
import  Logo from '../Images/logo_u.png';
class Registro extends React.Component {

    render() {

        return(
            <div className="fondo">
                <div className="simbolo">
                <img src={Logo}  className="simbolo" />
                </div>
                <Fregistro/>
            </div>
        )

    }

}

export default Registro;