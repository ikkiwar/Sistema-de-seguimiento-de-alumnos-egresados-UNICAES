import React from 'react';
import  Not from '../Images/not-found.jpg';
import '../Components/Styles/Notfound.css';

class Notfound extends React.Component{

render(){
return(
    <div>
        <img src={Not}  className="notfound"></img>
    </div>
)

}

}

export default Notfound ;