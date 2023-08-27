import React, { useState, useEffect } from 'react';
import './App.css';
import Headers from './componentes/Headers';
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
      console.log(storedTasks);
    }
  }, []);

  const addTask = taskName => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };

    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = taskId => {
    // Filtrar las tareas y eliminar la tarea con el ID correspondiente
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (taskId, newName) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  return (
    <div className="app">
      <Headers />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      <button onClick={clearAllTasks}>Limpiar Todas las Tareas</button>
    </div>
  );
}

export default App;