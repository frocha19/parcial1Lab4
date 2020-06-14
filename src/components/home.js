import React, { Component } from "react";
import MenuDeOpciones from "./MenuDeOpciones";
import Row from "react-bootstrap/Row";
import provincias from "../assets/json/lista_provincias.json";
import Provincia from "./Provincia";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provincias,
    };
  }
  textoBuscar = this.props.match.params.texto;
  hayDatos = false;
  render() {
    console.log(this.state.provincias);
    const provinciasAll = this.state.provincias.map((provincia, i) => {
      if (this.textoBuscar === "allData") {
        this.hayDatos = true;
        return (
          <Provincia
            key={i}
            id={i}
            provincia={provincia.provincia}
            bandera={provincia.bandera}
            capital={provincia.capital}
          ></Provincia>
        );
      } else {
        if (Number(provincia.poblacion) >= this.textoBuscar) {
          this.hayDatos = true;
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
      }
    });
    return (
      <React.Fragment>
        <MenuDeOpciones></MenuDeOpciones>
        {this.textoBuscar !== "allData" ? (
          <p className="margenTop centrar">
            Provincias de la Republica Argentinas con ploblacion igual o mayor a{" "}
            <b>{this.textoBuscar}</b>
          </p>
        ) : (
          <p className="tituloHome">Provincias de la Republica Argentinas</p>
        )}
        <Row>{provinciasAll}</Row>
        <p className="tituloBuscador" hidden={this.hayDatos}>
          No se encontraron provincias con el texto: <b>{this.textoBuscar}</b>
        </p>
      </React.Fragment>
    );
  }
}
