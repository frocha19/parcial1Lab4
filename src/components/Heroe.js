import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class Heroe extends Component {
  render() {
    const poderes = this.props.poderes.map((poder) => <li>{poder}</li>);
    return (
      <React.Fragment>
        <div className="tarjeta">
          <Table bordered size="sm">
            <thead>
              <tr>
                <th className="centrado colorNombre">{this.props.nombre}</th>
                <th className="colorPoderes">Poderes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="centrado">
                  <img
                    className="imagen"
                    src={require(`../assets/img/${this.props.img}`)}
                    alt="Imagen del Heroe"
                  />
                </td>
                <td>
                  <ul className="tabla">{poderes}</ul>
                </td>
              </tr>
              <tr className="centrado">
                <td>
                  <Button
                    variant="info"
                    href={`/detalleHeroe/${this.props.id}`}
                  >
                    VER MAS
                  </Button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
