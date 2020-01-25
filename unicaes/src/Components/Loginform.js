import React from 'react';
import "./Styles/Loginform.css";

class Loginform extends React.Component{

    render() {
        return (
            <div className="loginform">
                <p className="saludo">
                    ¡ Inicia Sesión y descubre la mejor red de nuestros profesionales !
                </p>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo Electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                         aria-describedby="emailHelp" />
                      
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control"
                         id="exampleInputPassword1" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" 
                        id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">
                            Recordarme</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" >Iniciar Sesión</button>
                </form>
            </div>
        )

    }

}

export default Loginform;