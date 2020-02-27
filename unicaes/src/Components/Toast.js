import React from 'react';
import  { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toast extends React.Component{

    
    render(){
   toast.configure()
    const notify = () => {
    /*    if(this.props.validador == true){
            toast.success('¡Dato agregado!')
        }
        else{
            toast.error('¡algo salio mal!')
        }**/
        toast.success('¡Dato agregado!')
        
    }
    
    
    return (
        <div>
            <input class="btn btn-primary" type="submit" onClick={notify} value="Registrar"/>
           
        </div>
    )
    }

}


export default Toast;