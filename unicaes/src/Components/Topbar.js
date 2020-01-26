import React from 'react';
import Logo from '../Images/logo_u.png';
import "./Styles/Topbar.css";
import { Link } from "react-router-dom";


class Topbar extends React.Component {
  render() {

    return (
      <div className="top-bar">

        <div className="top-bar-letter">

          <img src={Logo} className="icono" />
          &nbsp; UNICAES
        </div>
        
        <div className = "unirse">
         
            <a href= "https://www.catolica.edu.sv/" 
            class="btn btn-outline-warning"> Pagina Principal </a>
            
        </div>

      </div>

    )
  }


}
export default Topbar;