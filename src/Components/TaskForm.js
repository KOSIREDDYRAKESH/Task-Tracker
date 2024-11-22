import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
        dueDate: '',
        status: 'Pending',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure that all fields are filled out
        if (task.title && task.description && task.dueDate) {
            const newTask = { ...task, id: Date.now() }; // Unique ID using Date.now()
            onAddTask(newTask); // Call the passed function to add the task
            setTask({
                id: '',
                title: '',
                description: '',
                dueDate: '',
                status: 'Pending',
            }); // Reset form fields
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Task Title"
                className="border p-2 mb-2 w-full"
            />
            <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Task Description"
                className="border p-2 mb-2 w-full"
            ></textarea>
            <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                className="border p-2 mb-2 w-full"
            />
            <select
                name="status"
                value={task.status}
                onChange={handleChange}
                className="border p-2 mb-2 w-full"
            >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
