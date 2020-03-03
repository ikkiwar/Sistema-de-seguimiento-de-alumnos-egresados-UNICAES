import React from 'react';
import { Button } from 'react-bootstrap';
import Ventana from './Ventana';


class Acciones extends React.Component {


    constructor(props) {
        super(props);
    }

    deleteRow() {
        console.log("id", `${this.props.id}`)
    }

    render() {

        return (
            <div>
                <Button variant="danger" onClick={this.deleteRow} >Borrar</Button>
                &nbsp;
                <Ventana/>
                
            </div>
        )

    }

}
export default Acciones;