import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListaHeroes from "./components/ListaHeroes";
import DetalleHeroe from "./components/DetalleHeroe";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/:texto" component={ListaHeroes}></Route>
        <Route path="/detalleHeroe/:id" component={DetalleHeroe}></Route>
        <Route exact path="/*" component={ListaHeroes}></Route>
      </Switch>
    );
  }
}
