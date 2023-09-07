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
        onUpdate(task.id, newTaskText, newTaskStatus); // Update text and status
        setIsEditing(false);
    };

    return (
        <div className="border p-2 flex items-center justify-between mb-2">
            <div className="flex w-3/4">
                {isEditing ? (
                    <input
                        type="text"
                        className="border rounded px-2 py-1 w-3/4 mb-2"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                    />
                ) : (
                    <div className="w-full">{task.text}</div>
                )}
                {!isEditing && (
                    <div className="w-1/4 ml-2 text-gray-600">{task.status}</div>
                )}
            </div>
            <div>
                {isEditing ? (
                    <button
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
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
    );
};

export default Task;
