import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import Instituciones from '../Pages/Instituciones'; 
import Cargos from '../Pages/Cargos';


function App(){
return(
<BrowserRouter>
<switch>
    <Route exact path="/Login"  component={Login}></Route>
    <Route exact path="/Registro"  component={Registro}></Route>
    <Route exact path="/Instituciones"  component={Instituciones}></Route>
    <Route exact path="/Cargos"  component={Cargos}></Route>
</switch>
</BrowserRouter>
);

}

export default App;