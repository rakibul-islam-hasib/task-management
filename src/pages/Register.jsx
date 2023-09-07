// Register.js
import React, { useState } from 'react';

const Register = ({ onRegister }) => {
    // State for registration form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Validate and register the user
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter a username and password.');
            return;
        }

        // Store user data in local storage (you can replace this with an API call)
        const userData = { username, password };
        localStorage.setItem('user', JSON.stringify(userData));

        // Clear form fields
        setUsername('');
        setPassword('');

        // Call the callback function to inform the parent component
        onRegister(userData);
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
