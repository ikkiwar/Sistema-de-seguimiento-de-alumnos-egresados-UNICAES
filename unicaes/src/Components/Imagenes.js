import React from 'react';
import './Styles/ImagenCircular.css';

class Imagenes extends React.Component{

  render(){

    return(
        <div >
        <img src={this.props.imagen}  className="Imagenes" alt=""/>
        </div>
                
            )
  }

}

export default Imagenes;