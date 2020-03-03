import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Components/Styles/Acciones.css';

class Ventana extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleClose =  (setShow) => {
    this.setState(
      {show: false}
    )
   }

   handleShow = (setShow) =>{
    this.setState(
      {show: true}
    )
   } 


  render() {

    

    return (
      <div className="acciones">

        <Button variant="warning" onClick={this.handleShow}>Editar</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ooopss i did it  again!!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}



export default Ventana;