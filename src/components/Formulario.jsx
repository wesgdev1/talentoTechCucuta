import { useState } from "react";
import estilos from "./Formulario.module.css";

function Formulario({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form className={estilos.formulario} onSubmit={manejarEnvio}>
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
