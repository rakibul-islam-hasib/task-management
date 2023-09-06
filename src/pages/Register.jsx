import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <form className="flex flex-col">
                    <div className="relative">
                        <input type="text" id="username" className="border-b w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />
                        <label htmlFor="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">Username</label>
                    </div>
                    <div className="relative mt-5">
                        <input
                            type="text"
                            id="bio"
                            className="border-b w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />
                        <label htmlFor="bio" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">Bio</label>
                    </div>
                    <div className="relative mt-5">
                        <input
                            type="text"
                            id="photoURL"
                            className="border-b w-[300px] py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />
                        <label
                            htmlFor="photoURL"
                            className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">Photo URL</label>
                    </div>
                    <div className="mt-5">
                        <button className='w-[300px] bg-purple-600 text-white font-bold py-3'>Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;