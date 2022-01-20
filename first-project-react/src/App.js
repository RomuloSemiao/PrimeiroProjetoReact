import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  criarCard(titulo, texto) {
    const novoCard = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novoCard];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarCard={this.criarCard.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;

// react -> lib
// React -> ecossistema

// class app -> mais antiga
// function app -> mais recente
