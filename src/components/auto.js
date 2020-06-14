import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Auto extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="tarjeta">
          <a href={`/detalleAuto/${this.props.id}`}>
            <img
              className="imagen"
              src={require(`../assets/img/${this.props.imagen}`)}
              alt="Imagen del Producto"
              width="150px"
            />
          </a>
          <Card.Body>
            <Card.Title>{this.props.marca}</Card.Title>
            <Card.Text>{this.props.modelo}</Card.Text>
            {this.props.precio === "0" ? (
              <Card.Text className="precio">Consultar</Card.Text>
            ) : (
              <Card.Text className="precio">$ {this.props.precio}</Card.Text>
            )}
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
