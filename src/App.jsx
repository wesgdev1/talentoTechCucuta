import { useState } from "react";
import estilos from "./App.module.css";
import Formulario from "./components/Formulario";
import Tarea from "./components/Tarea";
import ModalTarea from "./components/ModalTarea";

function App() {
  const [tareas, setTareas] = useState([]);
  const [modal, setModal] = useState(null);

  const agregarTarea = (texto) => {
    const nueva = { id: Date.now(), texto, like: false };
    setTareas([nueva, ...tareas]);
  };

  const actualizarTarea = (id, nuevoTexto) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, texto: nuevoTexto } : t
    );
    setTareas(actualizadas);
  };

  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((t) => t.id !== id);
    setTareas(filtradas);
  };

  const cambiarLike = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, like: !t.like } : t
    );
    setTareas(actualizadas);
  };

  return (
    <div className={estilos.contenedor}>
      <h1>Lista de Tareas</h1>
      <Formulario agregarTarea={agregarTarea} />

      <div className={estilos.listaTareas}>
        {tareas.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            mostrarModal={setModal}
            actualizarTarea={actualizarTarea}
            eliminarTarea={eliminarTarea}
            cambiarLike={cambiarLike}
          />
        ))}
      </div>

      <ModalTarea tarea={modal} cerrar={() => setModal(null)} />
    </div>
  );
}

export default App;
