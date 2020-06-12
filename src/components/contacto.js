import React, { Component } from "react";
import MenuDeOpciones from "./menuDeOpciones";

export default class Contacto extends Component {
  render() {
    return (
      <div>
        <MenuDeOpciones></MenuDeOpciones>
        <div className="margenIzquierdo">
          <p className="contactoTitulo">
            ¿Necesitas ayuda o tenes alguna consulta?
          </p>
          <p>
            Es importante que sepas que sólo somos un sitio web de clasificados.
            No nos hagas consultas respecto a información de los vehículos que
            se publican en el portal. Éstas son responsabilidad exclusiva de sus
            anunciantes, y debes contactarlos desde la ficha de cada vehículo.
          </p>
          <p>
            ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o
            sugerencias{" "}
            <a href="mailto:aconsultas@atodomotor.com.ar">
              aconsultas@atodomotor.com.ar
            </a>
            , te responderemos a la brevedad.
          </p>
        </div>
      </div>
    );
  }
}
