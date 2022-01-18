import React from "react";
import { ListaDeNotas } from "./components/ListaDeNotas";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea name="" id="" placeholder="Escreva sua nota" />
        <button type="submit">Salvar</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}
// react -> lib
// React -> ecossistema
export default App;
