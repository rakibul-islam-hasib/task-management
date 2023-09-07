    import React from 'react';
    import { Outlet } from 'react-router-dom';

    const MainLayout = () => {
        return (
            <div className='grid grid-cols-5 '>
                <div className="col-span-4">
                    <Outlet />
                </div>
                <div className="">
                    <h1>Profile</h1>
                </div>
            </div>
        );
    };

    export default MainLayout;