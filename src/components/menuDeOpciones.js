import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class MenuDeOpciones extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  // buscador = (event) => {
  //   event.preventDefault();
  //   alert(this.state.text);
  // }
  cambios = (event) => {
    this.setState({text: event.target.value});
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/nuestrosAutos/allData">Nuestros Autos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
          <Form inline  onSubmit={this.buscador}>
            <FormControl
              type="text"
              placeholder="Buscador"
              className="mr-sm-2"
              id="bus"
              onChange={this.cambios}
            />
            {/* <Button variant="success" type="submit" href={`/nuestrosAutos/${this.state.text}`} onClick={this.buscador}>
              Buscar
            </Button> */}
            <Button variant="success" type="submit" href={`/nuestrosAutos/${this.state.text}`} onClick={this.buscador}>
              Buscar
            </Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}
