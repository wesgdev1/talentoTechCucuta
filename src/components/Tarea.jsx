import { useState } from "react";
import estilos from "./Tarea.module.css";

function Tarea({
  tarea,
  mostrarModal,
  actualizarTarea,
  eliminarTarea,
  cambiarLike,
}) {
  const [modoEditar, setModoEditar] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.description || "");

  const guardarCambio = () => {
    if (nuevoTexto.trim() === "") return;
    actualizarTarea(tarea.id, nuevoTexto);
    setModoEditar(false);
  };

  return (
    <div className={estilos.tarea}>
      <span className={estilos.corazon} onClick={() => cambiarLike(tarea)}>
        {tarea.completed ? "❤️" : "🤍"}
      </span>

      {modoEditar ? (
        <>
          <input
            className={estilos.entrada}
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
          />
          <button className={estilos.boton} onClick={guardarCambio}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <p className={estilos.texto}>{tarea.title}</p>
          <p className={estilos.texto}>{tarea.description}</p>
          <div className={estilos.botones}>
            <button
              className={estilos.boton}
              onClick={() => mostrarModal(tarea)}
            >
              Ver
            </button>
            <button
              className={estilos.boton}
              onClick={() => setModoEditar(true)}
            >
              Editar
            </button>
            <button
              className={estilos.boton}
              onClick={() => eliminarTarea(tarea.id)}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Tarea;
