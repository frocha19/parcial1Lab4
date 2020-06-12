import React, { Component } from "react";
import { autos } from "../assets/json/autos.json";
import MenuDeOpciones from "./menuDeOpciones";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Auto from "./auto";

export default class nuestrosAutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autos,
    };
  }
  textoBuscar = this.props.match.params.texto;
  hayDatos = false;
  render() {
    const autosAll = this.state.autos.map((autos, i) => {
      if (this.textoBuscar !== "allData") {
        if (
          autos.marca.toLowerCase().includes(this.textoBuscar.toLowerCase()) ||
          autos.modelo.toLowerCase().includes(this.textoBuscar.toLowerCase()) ||
          autos.anio.toLowerCase().includes(this.textoBuscar.toLowerCase()) ||
          autos.localidad.toLowerCase().includes(this.textoBuscar.toLowerCase()) ||
          autos.precio.toLowerCase().includes(this.textoBuscar.toLowerCase())
        ) {
          this.hayDatos = true;
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
      } else {
        this.hayDatos = true;
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
        <Container fluid="md">
          <Row>{autosAll}</Row>
          <p className="tituloBuscador" hidden={this.hayDatos}>No se encontraron vehiculos con el texto: <b>{this.textoBuscar}</b></p>
        </Container>
      </React.Fragment>
    );
  }
}
