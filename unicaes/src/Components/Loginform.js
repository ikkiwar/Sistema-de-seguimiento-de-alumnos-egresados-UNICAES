import React from 'react';
import "./Styles/Loginform.css";
import Api from '../Api';

class Loginform extends React.Component {


    state = {}

    handleSubmit = async e =>{
        e.preventDefault()
        console.log(this.state)

        try {
            let confing = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Conent-Type': 'application/json'
                },

                body: JSON.stringify(this.state)
            }
            
            let res = await fetch(`${Api}${this.props.entidad}`,confing)
            let json = await res.json()

            console.log(json)
        } catch (error) {
            
        }

    }

    handleChange = e => {
      //  console.log(`${e.target.name}: ${e.target.value}`)
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
    }

  

    render() {
        return (
            <div className="loginform">
                <p className="saludo">
                    ¡Inicia Sesión y descubre la mejor red de nuestros profesionales!
                </p>

                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo Electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="correo"
                            onChange={this.handleChange}
                            value={this.state.correo}
                        />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control"
                            id="exampleInputPassword1"
                            name="contraseña"
                            onChange={this.handleChange}
                            value={this.state.contraseña}
                        />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input"
                            id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">
                            Recordarme</label>
                    </div>
                    {/**Mientras se crea la logica de cambiar contrasenias redirige a Login*/}
                    <div><a href="/Login" class="alert-link"> ¿Olvidaste tu contraseña? </a></div>
                    <br />

                    <button type="submit" class="btn btn-primary btn-block" >Iniciar Sesión</button>
                </form>
            </div>
        )

    }

}

export default Loginform;