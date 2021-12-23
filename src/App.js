import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detalle from './views/Detalle';
import Login from './views/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Detalle}/>  
    </Switch>
  );
}

export default App;
