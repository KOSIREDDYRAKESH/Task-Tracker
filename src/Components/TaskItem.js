import React from 'react';

function TaskItem({ task, onEditTask, onDeleteTask }) {
  return (
    <div className="task-item bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="task-details">
        <h3 className="font-semibold">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        <p className={`text-sm ${task.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
          {task.status}
        </p>
      </div>
      <div className="task-actions flex space-x-4">
        <button
          onClick={() => onEditTask(task)}
          className="bg-yellow-500 text-white py-1 px-4 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteTask(task.id)} // Ensure we're passing task.id
          className="bg-red-500 text-white py-1 px-4 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
