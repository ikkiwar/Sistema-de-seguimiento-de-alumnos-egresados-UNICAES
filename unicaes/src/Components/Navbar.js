import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">UNICAES </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Página principal <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Perfiles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mensajes</a>
            </li>
            <li class="nav-item dropdown">  
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administración
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Aptitudes</a>
                <a class="dropdown-item" href="#">Cargos</a>
                <a class="dropdown-item" href="#">Facultades</a>
                <a class="dropdown-item" href="#">Instituciones</a>
                <a class="dropdown-item" href="#">Registrar egresado</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Cerrar sesión</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" 
            placeholder="Buscar" aria-label="Buscar"/>
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
            </div>

        )
    }
}

export default Navbar;