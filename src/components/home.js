import React, { Component } from "react";
import MenuDeOpciones from "./menuDeOpciones";
import Row from "react-bootstrap/Row";
import { autos } from "../assets/json/autos.json";
import Auto from "./auto";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      autos,
    };
  }
  render() {
    const autosAll = this.state.autos.map((autos, i) => {
      if (autos.destacado === "Y") {
        return (
          <Auto
            key={i}
            id={i}
            marca={autos.marca}
            modelo={autos.modelo}
            localidad={autos.localidad}
            imagen={autos.imagen}
            anio={autos.anio}
            precio={autos.precio}
            destacado={autos.destacado}
          ></Auto>
        );
      }
    });
    return (
      <React.Fragment>
        <MenuDeOpciones></MenuDeOpciones>
        <p className="tituloHome">A TODO MOTOR AUTOS</p>
        <p className="bodyHome">
          Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí
          ofertas en Efectivo de concesionarios registrados. ¡Súper!
        </p>
        <div>
          <p className="destacadosHome">Destacados</p>
        </div>
        <Row>{autosAll}</Row>
      </React.Fragment>
    );
  }
}
