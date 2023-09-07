import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    console.log(userInfo)
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className=" mt-3">
                <h2 className='text-2xl font-bold'>Hey , <span className='text-lime-500'>{userInfo.username}</span></h2>
                <div className="flex gap-3">
                    <img src={userInfo.photo} className='h-[100px] mt-2  rounded-lg w-[100px]' alt="" />
                    <div className=" mt-4">
                        <p>Name : {userInfo.username}</p>
                        <p>Bio : {userInfo.bio}</p>
                    </div>
                </div>
            </div>
            {/* Tasks */}
            <div className="mt-4 pt-4 ">
                <h1 className='border-y text-center text-2xl py-3 font-bold border-gray-800'>Your <span className='text-lime-500'>Tasks</span></h1>
            </div>
            <div className="my-2">
                <button className='bg-lime-500 rounded-lg text-white py-2  px-2 font-bold '>Add New Task</button>
            </div>
        </div>
    );
};

export default Dashboard;