import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleTitle = (event) => {
    event.stopPropagation();
    this.titulo = event.target.value;
  };

  _handleText = (event) => {
    event.stopPropagation();
    this.texto = event.target.value;
  };

  _criarCard = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarCard(this.titulo, this.texto);
  };

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarCard.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          name=""
          id=""
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this._handleText.bind(this)}
        />
        <button
          type="submit"
          className="form-cadastro_input form-cadastro_submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
