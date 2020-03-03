import React from 'react';
import { Navbar, Nav , NavDropdown , Form , FormControl , Buthrefn } from 'react-bootstrap';

class BarraUsuario extends React.Component{


    render() {
        return (
            <div>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Login">UNICAES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Login">Pagina Principal</Nav.Link>
      <Nav.Link href="/Perfil">Mi Perfil</Nav.Link>
      <Nav.Link href="/Login">Cerrar Sesión</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>

        )
    }
}

export default BarraUsuario ;