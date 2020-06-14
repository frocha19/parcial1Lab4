import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import DetalleAuto from "./components/detalleAuto";
import Contacto from "./components/contacto";
import NuestrosAutos from "./components/nuestrosAutos";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contacto" component={Contacto}></Route>
        <Route path="/nuestrosAutos/:texto" component={NuestrosAutos}></Route>
        <Route path="/detalleAuto/:id" component={DetalleAuto}></Route>
        <Route exact path="/*" component={Home}></Route>
      </Switch>
    );
  }
}

export default App;
