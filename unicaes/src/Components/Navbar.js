import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">UNICAES </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Página principal <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Perfil">Perfiles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Mensajes</a>
            </li>
            <li className="nav-item dropdown">  
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administración
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/Aptitudes">Aptitudes</a>
                <a className="dropdown-item" href="/Cargos">Cargos</a>
                <a className="dropdown-item" href="/Facultades">Facultades</a>
                <a className="dropdown-item" href="/Instituctiones">Instituciones</a>
                <a className="dropdown-item" href="Registro">Registrar egresado</a>
                <div className="dropdown-divider"></div>
                {/**Mientras se crea la logica de  cerrar sesion redirige a Login*/}
                <a className="dropdown-item" href="Login">Cerrar sesión</a> 
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" 
            placeholder="Buscar" aria-label="Buscar"/>
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
            </div>

        )
    }
}

export default Navbar;