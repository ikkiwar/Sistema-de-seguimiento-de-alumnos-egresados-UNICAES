import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Pages/Login'


function App(){
return(
<BrowserRouter>
<switch>
    <Route exact path="/Login"  component={Login}></Route>
</switch>
</BrowserRouter>
);

}

export default App;