import React from 'react';
import { Navbar, Nav , NavDropdown , Form , FormControl , Buthrefn } from 'react-bootstrap';

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
      <Nav.Link href="/Perfil">Contactar egresado</Nav.Link>
      <NavDropdown title="Facultades" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Aptitudes">C.C Empresariales</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/AreasLaborales">C.C Humanidades </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Cargos">Ingenieria y Arquitectura</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Carreras">C.C de la Salud</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Decanos">Multidisciplinaria de Ilobasco</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>

        )
    }
}

export default BarraPerfil ;