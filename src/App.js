import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProvinciasConPuerto from "./components/ProvinciasConPuerto";
import MapaArgentina from "./components/MapaArgentina";
import DetalleProvincia from "./components/DetalleProvincia";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/:texto" component={Home}></Route>
        <Route
          path="/provincias/puerto"
          component={ProvinciasConPuerto}
        ></Route>
        <Route path="/mapa/argentina" component={MapaArgentina}></Route>
        <Route path="/detalleProvincia/:id" component={DetalleProvincia}></Route>
        <Route exact path="/*" component={Home}></Route>
      </Switch>
    );
  }
}
