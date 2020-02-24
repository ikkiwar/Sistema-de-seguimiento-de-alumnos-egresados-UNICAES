import React from 'react';
import Navbar from '../Components/Navbar';
import Tabla from '../Components/Tabla';
import Ftiposcarreras from '../Components/Ftipocarreras';

class TipodeCarrera extends React.Component{

render(){
    return(
        <div>
            <style>{'body { background-color: #9E2723; }'}</style>
<Navbar/>
<Ftiposcarreras/>
        </div>
    )
}

}
export default TipodeCarrera;