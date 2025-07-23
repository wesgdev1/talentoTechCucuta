// hacer un fecth bien simple para obtener las tareas

export const getTasks = async () => {
  try {
    // Hacemos la petición GET a la URL del backend
    const response = await fetch(
      "https://g075backendapi.onrender.com/api/tasks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Aquí podrías agregar más cabeceras si lo necesitas, como autorización
          // 'Authorization': 'Bearer TU_TOKEN'
        },
      }
    );

    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("No se pudo obtener la información");
    }

    // Convertimos la respuesta a un Objeto
    const result = await response.json();

    // Devolvemos los datos en una estructura { data: ... }
    return { data: result };
  } catch (error) {
    // Si ocurre un error, lo enviamos como una Promesa rechazada
    return Promise.reject(error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await fetch(
      "https://g075backendapi.onrender.com/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Error al crear la tarea");
    }

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTask = async (id) => {
  try {
    const response = await fetch(
      `https://g075backendapi.onrender.com/api/tasks/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener la tarea");
    }

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(
      `https://g075backendapi.onrender.com/api/tasks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al eliminar la tarea");
    }

    return { data: { message: "Tarea eliminada exitosamente" } };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await fetch(
      `https://g075backendapi.onrender.com/api/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Error al actualizar la tarea");
    }

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};
