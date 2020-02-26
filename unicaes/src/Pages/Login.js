import React from 'react';
import Loginform from '../Components/Loginform';
import Topbar from '../Components/Topbar';
import Equipo from '../Images/Equipo.png';
import Imagenes from '../Components/Imagenes';
import '../Components/Styles/Login.css';



class Login extends React.Component {

    render() {

        return (
            <div>
                <Topbar />
                <Loginform entidad="/login"/>
                <div className="mensaje">
                    <h1>¡Se bienvenido a tu comunidad de profesionales UNICAES!</h1>
                </div>

                <Imagenes imagen={Equipo} />


            </div>

        )
    }

}

export default Login;