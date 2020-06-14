import React, { Component } from "react";
import MenuDeOpciones from "./MenuDeOpciones";
import Row from "react-bootstrap/Row";
import provincias from "../assets/json/lista_provincias.json";
import Provincia from "./Provincia";

export default class ProvinciasConPuerto extends Component {
  constructor() {
    super();
    this.state = {
      provincias,
    };
  }
  render() {
    console.log(this.state.provincias);
    const provinciasAll = this.state.provincias.map((provincia, i) => {
      if (provincia.tienePuerto === "Y") {
        return (
          <Provincia
            key={i}
            id={i}
            provincia={provincia.provincia}
            bandera={provincia.bandera}
            capital={provincia.capital}
          ></Provincia>
        );
      }
    });
    return (
      <React.Fragment>
        <MenuDeOpciones></MenuDeOpciones>
        <p className="tituloHome">
          Provincias de la Republica Argentinas con Puerto
        </p>
        <Row>{provinciasAll}</Row>
      </React.Fragment>
    );
  }
}
