import React from 'react';
import Logo from '../Images/logo_u.png';
import "./Styles/Topbar.css";


class Topbar extends React.Component {
  render() {

    return (
      <div className="top-bar">

        <div className="top-bar-letter">

          <img src={Logo} className="icono" />
          &nbsp; UNICAES
        </div>
        
        <div className = "unirse">
          <button type="button" class="btn btn-outline-warning"> Registarse</button>
        </div>

      </div>

    )
  }


}
export default Topbar;