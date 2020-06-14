import React, { Component } from "react";
import MenuDeOpciones from "./menuDeOpciones";
import Row from "react-bootstrap/Row";
import provincias from "../assets/json/lista_provincias.json";
import Auto from "./auto";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      provincias,
    };
  }
  render() {
    console.log(this.state.provincias);
    // const autosAll = this.state.provincias.map((auto, i) => {
    //   if (auto.destacado === "Y") {
    //     return (
    //       <Auto
    //         key={i}
    //         id={i}
    //         marca={auto.marca}
    //         modelo={auto.modelo}
    //         localidad={auto.localidad}
    //         imagen={auto.imagen}
    //         anio={auto.anio}
    //         precio={auto.precio}
    //         destacado={auto.destacado}
    //       ></Auto>
    //     );
    //   }
    // });
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
        {/* <Row>{autosAll}</Row> */}
      </React.Fragment>
    );
  }
}
