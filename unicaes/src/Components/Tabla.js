import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import '../Components/Styles/Tabla.css';
import Api from '../Api';
import Notfound from '../Pages/Notfound';

class Tabla extends React.Component {
  /**
  * Sorry si te da conflicto pero mi trastorno obsesivo compulsivo 
  * tenia que ordenar el codigo :'v
  */
  constructor(props) {
    // contructor para poder pasarle las props a nuestro Componente
    super(props);
    this.state = {
      posts: [],
      estado: 200
    };
  }

  componentDidMount() {

    // este es un estado del ciclo de via de React se ejecuta cuando se carga la pagina
    fetch(`${Api}${this.props.entidad}`, {
      // aqui le pasamos el URL y la entidad que vamos a comsumir
      method: "GET"
    })
      .then(Response => Response.json().then(data => ({ status: Response.status, body: data }))
      )
      .then(posts => {
        console.log(posts)
        if (posts.status != 200) {
          console.log("estado", posts.status)
          window.location.replace("/Notfound");
        }

        this.setState({
          posts: posts.body
        });

      })







  }

  render() {

    console.log("data", this.state.posts)


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