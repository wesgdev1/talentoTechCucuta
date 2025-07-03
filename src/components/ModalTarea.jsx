import estilos from "./ModalTarea.module.css";

function ModalTarea({ tarea, cerrar }) {
  if (!tarea) return null;

  return (
    <div className={estilos.fondo} onClick={cerrar}>
      <div className={estilos.contenido} onClick={(e) => e.stopPropagation()}>
        <h3>Detalle de la Tarea</h3>
        <h2>{tarea.title}</h2>
        <p>{tarea.description}</p>
        <p>{tarea.completed ? "Completada" : "Pendiente"}</p>
        <hr />
        <p>
          <strong>Catergoria</strong> {tarea.category.name || "Sin categoría"}
        </p>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalTarea;
