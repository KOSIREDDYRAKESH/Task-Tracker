import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onUpdate }) {
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}

export default TaskList;
