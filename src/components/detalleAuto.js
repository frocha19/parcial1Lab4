import React, { Component } from "react";
import provincias from "../assets/json/lista_provincias.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MenuDeOpciones from "./menuDeOpciones";

export default class detalleAuto extends Component {
  constructor() {
    super();
    this.state = {
      provincias,
    };
  }
  volver() {
    window.history.back();
  }
  render() {
    // const autoEncontrado = autos[this.props.match.params.id];
    return (
      <React.Fragment>
        {/* <MenuDeOpciones> </MenuDeOpciones>
        <Card className="tarjetaDetalle">
          <Card.Img
            className="imagen"
            variant="top"
            src={require(`../assets/img/${autoEncontrado.imagen}`)}
          />
          <Card.Body>
            <Card.Text>
              <b>Marca</b>: {autoEncontrado.marca}
            </Card.Text>
            <Card.Text>
              <b>Modelo</b>: {autoEncontrado.modelo}
            </Card.Text>
            <Card.Text>
              <b>Año</b>: {autoEncontrado.anio}
            </Card.Text>
            <Card.Text>
              <b>Localidad</b>: {autoEncontrado.localidad}
            </Card.Text>
            <Card.Text className="precio">${autoEncontrado.precio}</Card.Text>
          </Card.Body>
          <Button variant="primary" onClick={this.volver}>
            Volver
          </Button>
        </Card> */}
      </React.Fragment>
    );
  }
}
