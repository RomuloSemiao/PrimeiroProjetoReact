import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";

  }
  
  handleTitle = event => {
    this.titulo = event.target.value;
    console.log(this.titulo);
  }
    
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this.handleTitle.bind(this)}
        />
        <textarea
          name=""
          id=""
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
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
