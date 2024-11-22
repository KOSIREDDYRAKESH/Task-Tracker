import React, { useState } from 'react';

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-md flex justify-between items-center">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="space-y-2 w-full">
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleEditChange}
            className="border p-2 mb-2 w-full"
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleEditChange}
            className="border p-2 mb-2 w-full"
          ></textarea>
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleEditChange}
            className="border p-2 mb-2 w-full"
          />
          <select
            name="status"
            value={updatedTask.status}
            onChange={handleEditChange}
            className="border p-2 mb-2 w-full"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full mt-2"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <div className="w-full">
          <h2 className="font-semibold text-xl">{task.title}</h2>
          <p>{task.description}</p>
          <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
          <p className="text-sm text-gray-500">Status: {task.status}</p>
          <div className="flex justify-end mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white p-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
