import React, { Component } from "react";
import provincias from "../assets/json/lista_provincias.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MenuDeOpciones from "./MenuDeOpciones";

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
    const provincia = provincias[this.props.match.params.id];
    return (
      <React.Fragment>
        <MenuDeOpciones> </MenuDeOpciones>
        <Card className="tarjetaDetalle">
          <Card.Img
            className="imagen"
            variant="top"
            src={require(`../assets/img/${provincia.imagen}`)}
          />
          <Card.Body>
            <Card.Text>
              <b>Provincia</b>: {provincia.provincia}
            </Card.Text>
            <Card.Text>
              <b>Abreviatura</b>: {provincia.abreviatura}
            </Card.Text>
            <Card.Text>
              <b>Capital</b>: {provincia.capital}
            </Card.Text>
            <Card.Text>
              <b>Fecha de Autonomia</b>: {provincia.fechaAutonomia}
            </Card.Text>
            <Card.Text>
              <b>Poblacion</b>: {provincia.poblacion}
            </Card.Text>
            <Card.Text>
              <b>Superficie</b>: {provincia.superficie}
            </Card.Text>
            <Card.Text>
              <b>N° Departamentos</b>: {provincia.nroDepartamentos}
            </Card.Text>
            {provincia.tienePuerto === "Y" ? (
              <Card.Text>
                <b>Tiene Puerto</b>: SI
              </Card.Text>
            ) : (
              <Card.Text>
                <b>Tiene Puerto</b>: NO
              </Card.Text>
            )}
          </Card.Body>
          <Button variant="info" onClick={this.volver}>
            Volver
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}
