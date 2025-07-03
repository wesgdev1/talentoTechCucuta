import { useState } from "react";
import estilos from "./App.module.css";
import Formulario from "./components/Formulario";
import Tarea from "./components/Tarea";
import ModalTarea from "./components/ModalTarea";
import { useTareas } from "./domain/useTareas";
import { createTask, deleteTask, updateTask } from "./api/task";

function App() {
  const { data, loading, error, getTareas } = useTareas();
  const [tareas, setTareas] = useState([]);
  const [modal, setModal] = useState(null);

  const agregarTarea = async (texto, title) => {
    // const nueva = { id: Date.now(), texto, like: false };
    // setTareas([nueva, ...tareas]);

    const nuevaTarea = {
      title,
      description: texto,
      userId: 1,
      categoryId: 1,
    };

    const response = await createTask(nuevaTarea);
    console.log("Respuesta de crear tarea:", response.data);
    if (response.data) {
      getTareas(); // Actualiza la lista de tareas
    } else {
      console.error("Error al crear la tarea:", response.error);
    }
  };

  const actualizarTarea = async (id, nuevoTexto) => {
    const response = await updateTask(id, {
      description: nuevoTexto,
    });
    console.log("Respuesta de actualizar tarea:", response.data);
    if (response.data) {
      getTareas(); // Actualiza la lista de tareas
    } else {
      console.error("Error al actualizar la tarea:", response.error);
    }
  };

  const eliminarTarea = async (id) => {
    const response = await deleteTask(id);
    console.log("Respuesta de eliminar tarea:", response.data);
    if (response.data) {
      getTareas(); // Actualiza la lista de tareas
    } else {
      console.error("Error al eliminar la tarea:", response.error);
    }
  };

  const cambiarLike = async (tarea) => {
    const response = await updateTask(tarea.id, {
      completed: !tarea.completed,
    });
    console.log("Respuesta de cambiar like:", response.data);
    if (response.data) {
      getTareas(); // Actualiza la lista de tareas
    } else {
      console.error("Error al cambiar like:", response.error);
    }
  };

  return (
    <div className={estilos.contenedor}>
      <h1>Lista de Tareas</h1>
      <Formulario agregarTarea={agregarTarea} />

      {loading && <p>Cargando tareas...</p>}

      <div className={estilos.listaTareas}>
        {data?.map((t) => (
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
