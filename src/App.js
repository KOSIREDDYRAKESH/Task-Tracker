import React, { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import EditTaskModal from './Components/EditTaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setIsModalOpen(false); // Close modal after saving
  };

  const handleOpenEditModal = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="App bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Task Tracker</h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onEditTask={handleOpenEditModal} onDeleteTask={handleDeleteTask} />
        {isModalOpen && (
          <EditTaskModal task={taskToEdit} onEditTask={handleEditTask} />
        )}
      </div>
    </div>
  );
}

export default App;
