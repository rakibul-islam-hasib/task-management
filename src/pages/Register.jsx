import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
    const { registerUser } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        console.log(formData);
        registerUser(formData.email, formData.password);
    }

    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={e => handleSubmit(e)} className="flex flex-col">
                    <div className="relative">
                        <input
                            placeholder='username'
                            type="email"
                            required
                            name='email'
                            className="border-b mt-5 placeholder:text-purple-600 w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />

                    </div>
                        <input
                            type="text"
                            id="bio"
                            name='bio'
                            placeholder='bio'
                            className="border-b mt-5 placeholder:text-purple-600 w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />
                        <input
                            type="text"
                            id="photoURL"
                            name='photoURL'
                            placeholder='photoURL'
                            className="border-b mt-5 placeholder:text-purple-600 w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />

                    <input
                        type="password"
                        name='password'
                        placeholder='password'
                        className="border-b mt-5 placeholder:text-purple-600 w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />

                    <div className="mt-5">
                        <button type='submit' className='w-[300px] bg-purple-600 text-white font-bold py-3'>Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;