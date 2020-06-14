import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class MenuDeOpciones extends Component {
  constructor(props) {
    super(props);
    this.state = { texto: "allData" };
  }
  cambios = (event) => {
    this.setState({ texto: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/allData">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/provincias/puerto">Provincias con Puerto</Nav.Link>
            <Nav.Link href="/mapa/argentina">Mapa Argentina</Nav.Link>
          </Nav>
          <Form inline onSubmit={this.buscador}>
            <FormControl
              type="text"
              placeholder="Buscador"
              className="mr-sm-2"
              id="bus"
              onChange={this.cambios}
            />
            <Button
              variant="success"
              type="submit"
              href={`/${this.state.texto}`}
            >
              Buscar
            </Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}
