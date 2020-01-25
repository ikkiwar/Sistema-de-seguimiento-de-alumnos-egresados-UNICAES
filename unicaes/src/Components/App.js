import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';


function App(){
return(
<BrowserRouter>
<switch>
    <Route exact path="/Login"  component={Login}></Route>
    <Route exact path="/Registro"  component={Registro}></Route>
</switch>
</BrowserRouter>
);

}

export default App;