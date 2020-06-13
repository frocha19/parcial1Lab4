import React, { Component } from "react";
import heroes from "../assets/json/heroes.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MenuDeOpciones from "./MenuDeOpciones";

export default class detalleAuto extends Component {
  constructor() {
    super();
    this.state = {
      heroes,
    };
  }
  volver() {
    window.history.back();
  }
  render() {
    const index = Number(this.props.match.params.id);
    const heroe = heroes[index - 1];
    const poderes = heroe.poderes.map((poder) => <li>{poder}</li>);
    return (
      <React.Fragment>
        <MenuDeOpciones> </MenuDeOpciones>
        <Card className="tarjetaDetalle">
          <Card.Img
            className="imagenDetalle"
            src={require(`../assets/img/${heroe.img}`)}
          />
          <Card.Body>
            <Card.Text>
              <b>{index}</b>: {heroe.id}
            </Card.Text>
            <Card.Text>
              <b>Nombre</b>: {heroe.nombre}
            </Card.Text>
            <Card.Text>
              <b>Aparicion</b>: {heroe.aparicion}
            </Card.Text>
            <Card.Text>
              <b>Poderes</b>:{poderes}
            </Card.Text>
            <Card.Text>
              <b>Biografia</b>: {heroe.bio}
            </Card.Text>
            <Card.Text>
              <b>Casa</b>:
              {heroe.casa === "DC" ? (
                <Card.Img
                  className="imagenCasa"
                  src={require(`../assets/img/dc.jpg`)}
                />
              ) : (
                <Card.Img
                  className="imagenCasa"
                  src={require(`../assets/img/marvel.png`)}
                />
              )}
            </Card.Text>
          </Card.Body>
          <Button variant="primary" onClick={this.volver}>
            Volver
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}
