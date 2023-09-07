import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import TaskPage from './TaskPage';

const TaskManage = () => {
    const { id } = useParams();
    const [data, setData] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [thisTask, setThisTask] = useState({});
    const [newUserEmail, setNewUserEmail] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('tasks')) || []);
    }, []);


    useEffect(() => {
        const task = data.find((item) => item.id === Number(id));
        setThisTask(task);

        // Initialize the users state with existing users if they exist
        if (task && task.users) {
            setUsers([...task.users]);
        }
    }, [data, id]);

    const handleAddUser = () => {
        if (newUserEmail.trim() === '') {
            return;
        }

        const newUser = {
            email: newUserEmail,
        };

        // Update the users state and thisTask
        setUsers([...users, newUser]);
        setNewUserEmail('');

        if (thisTask) {
            thisTask.users = [...users, newUser];

            // Update the data and store it in local storage
            const newData = data.map((task) => (task.id === thisTask.id ? thisTask : task));
            setData(newData);
            localStorage.setItem('tasks', JSON.stringify(newData));
        }
    };

    // Function to handle user deletion
    const handleDeleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);

        if (thisTask) {
            thisTask.users = updatedUsers;
            const newData = data.map((task) => (task.id === thisTask.id ? thisTask : task));
            setData(newData);
            localStorage.setItem('tasks', JSON.stringify(newData));
        }
        setUsers(updatedUsers);
    };

    return (
        <div className='max-w-screen-xl mx-auto my-3'>
            <h1 className='text-2xl font-bold mb-4'>Task Management</h1>
            <p className='text-xl mb-2'>Task Title: <span className='font-bold'>{thisTask.title}</span></p>

            <div className="flex items-center gap-4">
                <p className='text-xl'>Users:</p>
                <div className="flex gap-2 items-center">
                    <input
                        type="email"
                        placeholder="Enter username"
                        value={newUserEmail}
                        onChange={(e) => setNewUserEmail(e.target.value)}
                        className='border outline-none border-gray-300 rounded-lg p-2'
                    />
                    <button
                        onClick={handleAddUser}
                        className='bg-lime-500 text-white rounded-lg px-4 py-2 flex items-center gap-2'
                    >
                        <FaPlus />
                        Add User
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <h2 className='text-xl font-semibold mb-2'>Users List:</h2>
                <ul className="list-decimal grid grid-cols-2 gap-x-8 w-fit pl-6">
                    {users.map((user, index) => (
                        <li key={index} className='text-gray-800'>
                            {user.email}
                            <button
                                onClick={() => handleDeleteUser(index)}
                                className='ml-2 text-red-600 hover:text-red-800'
                            >
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="">
                <TaskPage id={id} data={data} thisTask={thisTask} />
            </div>


        </div>
    );
};

export default TaskManage;
