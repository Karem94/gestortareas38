// Obtener la lista de tareas del almaacenamiento del navegador "localStorage"
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; 

// Funcion para agregar una tarea a la lista de tareas
export const addTasks = (task) => {
      const newTask = {
          id: Date.now(),
          text: task,
          completed: false,
      };
}