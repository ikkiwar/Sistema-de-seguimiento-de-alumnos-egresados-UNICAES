import React from 'react';
import Loginform from '../Components/Loginform';
import Topbar from '../Components/Topbar';

class Login extends React.Component{

    render(){

        return(
            <div>
                <Topbar/>
                <Loginform/>
            </div>
            
            )
    }

}

export default Login ;