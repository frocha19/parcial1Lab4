import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Auto extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="tarjeta">
          <Card.Title className="tituloProvincia">
            {this.props.provincia}
          </Card.Title>
          <img
            src={require(`../assets/img/${this.props.bandera}`)}
            alt="Imagen de la Provincia"
            width="250px"
          />
          <Card.Text>
            <b>{this.props.capital}</b>
          </Card.Text>
          <Button variant="info" href={`/detalleProvincia/${this.props.id}`}>
            Ver Mas
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}
