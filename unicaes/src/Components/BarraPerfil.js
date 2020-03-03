import React from 'react';
import { Navbar, Nav , NavDropdown , Form , FormControl , Buthrefn } from 'react-bootstrap';
import Api from '../Api';

class BarraPerfil extends React.Component{


    render() {
        return (
            <div>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Login">UNICAES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Login">Pagina Principal</Nav.Link>
      <NavDropdown title="Facultades" id="basic-nav-dropdown">
        <NavDropdown.Item href="/EditarPerfil">Editar Perfil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#"> Cerrar Sesion</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>

        )
    }
}

export default BarraPerfil ;