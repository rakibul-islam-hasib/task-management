import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import TaskList from '../components/TaskList';

const TaskPage = ({ id, thisTask, data = [] }) => {
  const [tasks, setTasks] = useState(data || []);
  const [newTask, setNewTask] = useState('');
  const [newStatus, setNewStatus] = useState('pending');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        status: newStatus,
      };

      // Update the state
      setTasks([...tasks, task]);

      setNewTask('');
      setNewStatus('pending');
    }
  };

  const deleteTask = (taskId) => {
    // Remove the task from the state
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const startEditingTask = (taskId) => {
    setIsEditing(true);
    setEditingTaskId(taskId);
  };

  const cancelEditingTask = () => {
    setIsEditing(false);
    setEditingTaskId(null);
  };

  const updateTask = (taskId, newText, newStatus) => {
    // Update the task in the state
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText, status: newStatus } : task
    );
    setTasks(updatedTasks);

    setIsEditing(false);
    setEditingTaskId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded px-2 py-1 w-3/4"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          className="border rounded px-2 py-1 ml-2"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="submitted">Submitted</option>
          <option value="completed">Completed</option>
        </select>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
          onClick={addTask}
        >
          <FiPlus />
        </button>
      </div>
      <TaskList
        tasks={tasks.filter((task, isx) => isx > 0)}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onEdit={startEditingTask}
        onCancelEdit={cancelEditingTask}
        editingTaskId={editingTaskId}
        isEditing={isEditing}
      />
    </div>
  );
};

export default TaskPage;
