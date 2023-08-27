import React, { useState } from 'react';

function Task({ task, toggleTask, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleEdit = () => {
    setEditing(true);
    console.log(handleEdit);
  };

  const handleSave = () => {
    editTask(task.id, editedName);
    setEditing(false);
  };

  return (
    <div className="task">
      {editing ? (
        <input
          type="text"
          value={editedName}
          onChange={e => setEditedName(e.target.value)}
        />
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.name}</span>
          </label>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </>
      )}
      {editing && <button onClick={handleSave}>Guardar</button>}
    </div>
  );
}

export default Task;