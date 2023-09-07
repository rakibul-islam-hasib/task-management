import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/task')
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1 className='px-1'>Home</h1>
        </div>
    );
};

export default Home;