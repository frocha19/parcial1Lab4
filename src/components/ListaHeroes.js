import React, { Component } from "react";
import heroes from "../assets/json/heroes.json";
import MenuDeOpciones from "./MenuDeOpciones";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Heroe from "./Heroe";

export default class ListaHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes,
    };
  }
  textoBuscar = this.props.match.params.texto;
  hayDatos = false;
  render() {
    const heroesAll = this.state.heroes.map((heroe) => {
      console.log(this.textoBuscar);
      if (this.textoBuscar === "allData") {
        this.hayDatos = true;
        return (
          <Heroe
            key={heroe.id}
            id={heroe.id}
            nombre={heroe.nombre}
            img={heroe.img}
            poderes={heroe.poderes}
          ></Heroe>
        );
      } else if (this.textoBuscar === "heroesDC") {
        if (heroe.casa === "DC") {
          this.hayDatos = true;
          return (
            <Heroe
              key={heroe.id}
              id={heroe.id}
              nombre={heroe.nombre}
              img={heroe.img}
              poderes={heroe.poderes}
            ></Heroe>
          );
        }
      } else if (this.textoBuscar === "heroesMarvel") {
        if (heroe.casa === "Marvel") {
          this.hayDatos = true;
          return (
            <Heroe
              key={heroe.id}
              id={heroe.id}
              nombre={heroe.nombre}
              img={heroe.img}
              poderes={heroe.poderes}
            ></Heroe>
          );
        }
      } else {
        if (
          heroe.nombre.toLowerCase().includes(this.textoBuscar.toLowerCase()) ||
          heroe.bio.toLowerCase().includes(this.textoBuscar.toLowerCase()) ||
          heroe.poderes
            .map((poder) => poder.toLowerCase())
            .includes(this.textoBuscar.toLowerCase())
        ) {
          this.hayDatos = true;
          return (
            <Heroe
              key={heroe.id}
              id={heroe.id}
              nombre={heroe.nombre}
              img={heroe.img}
              poderes={heroe.poderes}
            ></Heroe>
          );
        }
      }
    });
    return (
      <React.Fragment>
        <MenuDeOpciones></MenuDeOpciones>
        <Container fluid="md">
          <Row>{heroesAll}</Row>
          <p className="tituloBuscador" hidden={this.hayDatos}>
            No se encontraron heroes con el texto: <b>{this.textoBuscar}</b>
          </p>
        </Container>
      </React.Fragment>
    );
  }
}
