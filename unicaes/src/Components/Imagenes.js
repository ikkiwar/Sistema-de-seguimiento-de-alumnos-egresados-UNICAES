import React from 'react';
import './Styles/ImagenCircular.css';

class Imagenes extends React.Component{
  // className="Imagenes"
  /**
   * Cambios hechos en el componente:
   * 1.- Ahora en vez de tener una clase css quemada, puede recibir todas las que se necesiten con el props clases
   * 2.- Se agrego dos props mas para manejar el ancho y el alto
   */
  render(){
    return(
        <div>
          <img src={this.props.imagen} className={this.props.clases} alt="" height={this.props.height} width={this.props.width}/>
        </div>
        )
  }
}

export default Imagenes;