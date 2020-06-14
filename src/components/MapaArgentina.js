import React, { Component } from "react";
import MenuDeOpciones from "./MenuDeOpciones";

export default class Contacto extends Component {
  render() {
    return (
      <div>
        <MenuDeOpciones></MenuDeOpciones>
        <div className="centrar">
          <p className="tituloMapa">República Argentina</p>
          <img src={require(`../assets/img/argentina.png`)} />
        </div>
      </div>
    );
  }
}
