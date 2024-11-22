import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !dueDate) return;

        const newTask = {
            id: new Date().getTime(),
            title,
            description,
            dueDate,
            status,
        };

        onAddTask(newTask);
        setTitle('');
        setDescription('');
        setDueDate('');
        setStatus('Pending');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add Task</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
