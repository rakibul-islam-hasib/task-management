// Register.js
import React, { useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleRegister = () => {
      
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter a username and password.');
            return;
        }

        const userData = { username, password };
        localStorage.setItem('user', JSON.stringify(userData));

        setUsername('');
        setPassword('');
        // If user then navigate to /task page 
        navigate('/task');
        console.log('Register', userData)
    };

    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <div className="mb-4 flex items-center">
                <FiUser className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border rounded py-2 px-3 w-full"
                />
            </div>
            <div className="mb-4 flex items-center">
                <FiLock className="text-gray-500 mr-2" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded py-2 px-3 w-full"
                />
            </div>
            <button onClick={handleRegister} className="bg-blue-500 text-white py-2 px-4 rounded">
                Register
            </button>
        </div>
    );
};

export default Register;
