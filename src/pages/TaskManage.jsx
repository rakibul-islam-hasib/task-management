import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const TaskManage = () => {
    const { id } = useParams();
    const [data, setData] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [thisTask, setThisTask] = useState({});
    const [newUserEmail, setNewUserEmail] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const task = data.find((item) => item.id === Number(id));
        setThisTask(task);
    }, [data, id]);

    const handleAddUser = () => {
        if (newUserEmail.trim() === '') {
            return;
        }

        const newUser = {
            email: newUserEmail,
        };
        setUsers([...users, newUser]);
        setNewUserEmail('');
        thisTask.users = [...users, newUser];
        localStorage.setItem('tasks', JSON.stringify([...data, thisTask]));
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
                        placeholder="Enter user email"
                        value={newUserEmail}
                        onChange={(e) => setNewUserEmail(e.target.value)}
                        className='border border-gray-300 rounded-lg p-2'
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
                <ul className="list-disc pl-6">
                    {users.map((user, index) => (
                        <li key={index} className='text-gray-800'>{user.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskManage;
