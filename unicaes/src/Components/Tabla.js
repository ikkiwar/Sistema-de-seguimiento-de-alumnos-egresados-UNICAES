import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import '../Components/Styles/Tabla.css';
import Api from '../Api';

class Tabla extends React.Component {
  /**
  * Sorry si te da conflicto pero mi trastorno obsesivo compulsivo 
  * tenia que ordenar el codigo :'v
  */
  constructor(props) {
    // contructor para poder pasarle las props a nuestro Componente
    super(props);
      this.state = {
        posts: []
      };
  }

  componentDidMount() {
    // este es un estado del ciclo de via de React se ejecuta cuando se carga la pagina
    fetch(`${Api}${this.props.entidad}`, {
      // aqui le pasamos el URL y la entidad que vamos a comsumir
      method: "GET"
    })
    .then(Response => Response.json())
    .then(posts => {
      this.setState({
        posts: posts
        });
    });
  }

  render() {
    return (
      <div className="tabla">
        <ReactTable
          columns={this.props.columnas}
          data={this.state.posts}
          filterable
          noDataText={"Datos No encontrados"}
          defaultPageSize={5}
          className="datos"
        />
      </div>
    )
  }
}
export default Tabla;