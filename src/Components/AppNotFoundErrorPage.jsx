import React from 'react';
import ErrorPng from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const AppNotFoundErrorPage = () => {
    return (
        <div className='h-screen text-center space-y-5 mt-48'>
            <img src={ErrorPng} alt="error image" className='flex mx-auto md:w-80 w-36' />
            <h1 className='md:text-5xl text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='md:font-semibold md:text-xl'>The App you are requesting is not found on our system.  please try another apps</p>
            <NavLink to='/' className="flex justify-center items-center mb-5">
                <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                    Go Back
                </button>
            </NavLink>
        </div>
    );
};

export default AppNotFoundErrorPage;