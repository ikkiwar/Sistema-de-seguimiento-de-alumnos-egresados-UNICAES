import React from 'react';
import { Navbar, Nav , NavDropdown , Form , FormControl , Buthrefn } from 'react-bootstrap';



class Barra extends React.Component {

    render() {
        return (
            <div>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Login">UNICAES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Login">Pagina Principal</Nav.Link>
      <Nav.Link href="#link">Perfiles</Nav.Link>
      <NavDropdown title="Administración" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Aptitudes">Aptitudes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/AreasLaborales">Areas Laborales</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Cargos"> Cargos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Carreras">Carreras</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Decanos">Decanos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Facultades">Facultades</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Instituciones">Instituciones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Registro">Registro de usuarios</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/TipodeCarreras">Tipo de Carreras</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>

        )
    }
}

export default Barra;