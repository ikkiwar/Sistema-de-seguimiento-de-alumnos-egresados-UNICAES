import React from 'react';
import ReacTable from "react-table-6";
import 'react-table-6/react-table.css';
import '../Components/Styles/Tabla.css';

class Tabla extends React.Component {


     constructor(props) {
         // contructor para poder pasarle las props a nuestro Componente
         super(props);
         this.state = {
           posts: []
         };
       }
     
      /* componentDidMount() {
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
       } */

    render() {

        return (
            <div className="tabla">
             

             <ReacTable
                    columns={this.props.columnas}
                    //data={this.state.posts}
                    filterable
                    noDataText={"Datos No encontrados"}
                    defaultPageSize={5}
                    className="datos"
                >
 
                </ReacTable>
              

            </div>


        )

    }


}
export default Tabla;