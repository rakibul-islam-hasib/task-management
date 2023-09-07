import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  // const [tasks, const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);setTasks] = useState(localStorage.getItem('tasks') || []);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState('');
  const [newStatus, setNewStatus] = useState('pending'); // Initial status

  // Load tasks from local storage when the component mounts and when tasks change
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        status: newStatus, // Set the initial status
      };

      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, newText, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText, status: newStatus } : task
    );
    setTasks(updatedTasks);
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
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
};

export default TaskPage;
