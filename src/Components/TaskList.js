import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEditTask, onDeleteTask }) {
    return (
        <div className="task-list mt-4 space-y-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </div>
    );
}

export default TaskList;
