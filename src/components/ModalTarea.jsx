import estilos from "./ModalTarea.module.css";

function ModalTarea({ tarea, cerrar }) {
  if (!tarea) return null;

  return (
    <div className={estilos.fondo} onClick={cerrar}>
      <div className={estilos.contenido} onClick={(e) => e.stopPropagation()}>
        <h3>Detalle de la Tarea</h3>
        <p>{tarea.texto}</p>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalTarea;
