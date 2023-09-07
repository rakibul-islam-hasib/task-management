// Register.js
import React, { useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { BiPhotoAlbum } from 'react-icons/bi';
import { AiOutlineFileText } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();



    const handleRegister = () => {

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter a username and password.');
            return;
        }

        const userData = { username, password, photo, bio };
        localStorage.setItem('user', JSON.stringify(userData));

        setUsername('');
        setPassword('');
        // If user then navigate to /task page 
        navigate('/task');
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-4 text-center rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <div className="mb-4 flex items-center">
                    <FiUser className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border outline-none rounded py-2 px-3 w-full"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <FiLock className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border outline-none rounded py-2 px-3 w-full"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <BiPhotoAlbum className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Photo URL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="border outline-none rounded py-2 px-3 w-full"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <AiOutlineFileText className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="border outline-none rounded py-2 px-3 w-full"
                    />
                </div>
                <button
                    onClick={handleRegister}
                    className="bg-lime-500 hover:bg-transparent border border-lime-500 font-bold duration-300  hover:text-black text-white py-2 px-4 rounded"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
