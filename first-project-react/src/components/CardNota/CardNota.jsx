import React, { Component } from "react";
import "./CardNota.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota__cabecalho">
          <h3 className="card-nota__titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota__texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
