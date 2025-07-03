import { useState } from "react";
import estilos from "./Formulario.module.css";

function Formulario({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [title, setTitle] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto, title);
    setTexto("");
    setTitle("");
  };

  return (
    <form className={estilos.formulario} onSubmit={manejarEnvio}>
      <input
        className={estilos.entrada}
        placeholder="Escribe el titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={estilos.entrada}
        placeholder="Escribe la tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button className={estilos.boton} type="submit">
        Agregar
      </button>
    </form>
  );
}

export default Formulario;
