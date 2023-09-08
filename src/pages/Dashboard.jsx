import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPenAlt } from 'react-icons/fa';
const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    // Step 1: Create a state variable to hold tasks
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    }, [])
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Step 3: Handle form submission to add a new task
    const handleAddTask = () => {
        if (taskInput.trim() === '') {
            return; // Don't add empty tasks
        }

        const newTask = {
            id: new Date().getTime(),
            title: taskInput,
        };

        // Add the new task to the tasks list
        setTasks([...tasks, newTask]);

        // Store updated tasks list in local storage
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

        // Clear the task input field
        setTaskInput('');
    };

    // Step 4: Display the list of tasks on the dashboard


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="mt-3">
                <h2 className='text-2xl font-bold'>
                    Hey, <span className='text-lime-500'>{userInfo.username}</span>
                </h2>
                <div className="flex gap-3">
                    <img
                        src={userInfo.photo}
                        className='h-[100px] mt-2  rounded-lg w-[100px]'
                        alt=""
                    />
                    <div className=" mt-4">
                        <p>Name : {userInfo.username}</p>
                        <p>Bio : {userInfo.bio}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-4 ">
                <h1 className='border-y text-center text-2xl py-3 font-bold border-gray-800'>
                    Your <span className='text-lime-500'>Tasks</span>
                </h1>
            </div>

            <div className="my-2">
                <input
                    type="text"
                    placeholder="Task title"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className='border border-gray-300 rounded-lg p-2'
                />
                <button
                    onClick={handleAddTask}
                    className='bg-lime-500 rounded-lg text-white py-2 px-2 font-bold ml-2'
                >
                    Add New Task
                </button>
            </div>

            <div className="">
                {tasks.length == 0 ? <div className="text-2xl  flex justify-center items-center w-full">
                    <h1>You do not have any tasks</h1>
                </div> : tasks.map((task) => (
                    <div
                        key={task.id}
                        className='border border-gray-300 rounded-lg p-2 my-2 flex justify-between items-center'
                    >
                        <p>{task.title}</p>
                        <div className="flex items-center">

                            {/* Update button  */}
                            <button
                                onClick={() => navigate(`/update/${task.id}`)}
                                className='px-3'
                            >
                                <FaPenAlt className='text-lime-500 text-2xl' />
                            </button>


                            <button
                                onClick={() => {
                                    const updatedTasks = tasks.filter(
                                        (t) => t.id !== task.id
                                    );
                                    setTasks(updatedTasks);
                                    localStorage.setItem(
                                        'tasks',
                                        JSON.stringify(updatedTasks)
                                    );
                                }}
                                className='bg-red-500 text-white rounded-lg px-2 py-1'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
