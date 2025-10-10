import React from 'react';
import logoicon from '../assets/navbar-logo-icon.png'

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center gap-5'>
            <img className='animate-spin md:w-64 w-24' src={logoicon} alt="logo icon loading" />
            <h1 className='md:text-8xl text-3xl font-black text-[#ad0eb0] animate-pulse'>Loading</h1>
        </div>
    );
};

export default Loader;