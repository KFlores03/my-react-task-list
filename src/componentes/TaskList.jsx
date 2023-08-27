import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;