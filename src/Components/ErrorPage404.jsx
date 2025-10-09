import React from 'react';
import Error404Img from '../assets/error-404.png'
import { NavLink } from 'react-router';

const ErrorPage404 = () => {
    return (
        <div className='h-screen text-center space-y-5 mt-48'>
            <img src={Error404Img} alt="error image" className='flex mx-auto' />
            <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
            <p className='font-semibold text-xl'>The page you are looking for is not available.</p>
            <NavLink to='/' className="flex justify-center items-center mb-5">
                <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                    Go Back
                </button>
            </NavLink>
        </div>
    );
};

export default ErrorPage404;