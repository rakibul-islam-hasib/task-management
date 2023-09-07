import React, { useState } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

const Task = ({ task, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskText, setNewTaskText] = useState(task.text);
    const [newTaskStatus, setNewTaskStatus] = useState(task.status);

    const handleDelete = () => {
        onDelete(task.id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(task.id, newTaskText, newTaskStatus);
        setIsEditing(false);
    };

    return (
        <div className={`border p-3 rounded mb-2 ${isEditing ? 'bg-gray-100' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
                <div className="flex w-full">
                    {isEditing ? (
                        <input
                            type="text"
                            className="border rounded px-2 py-1 w-full"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                        />
                    ) : (
                        <div className={`w-full text-lg ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                            {task.text}
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    {isEditing ? (
                        <select
                            className="border rounded px-2 py-1 ml-2"
                            value={newTaskStatus}
                            onChange={(e) => setNewTaskStatus(e.target.value)}
                        >
                            <option value="pending">Pending</option>
                            <option value="working">Working</option>
                            <option value="submitted">Submitted</option>
                            <option value="completed">Completed</option>
                        </select>
                    ) : (
                        <div className={`ml-2 text-gray-600 ${task.status === 'completed' ? 'line-through' : ''}`}>
                            {task.status}
                        </div>
                    )}
                    <div className="ml-2 flex">
                        {isEditing ? (
                            <button
                                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                className="bg-lime-500 text-white px-2 py-1 rounded mr-2"
                                onClick={handleEdit}
                            >
                                <FiEdit />
                            </button>
                        )}
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={handleDelete}
                        >
                            <FiTrash2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
