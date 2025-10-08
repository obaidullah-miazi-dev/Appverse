import React from 'react';
import logoicon from '../assets/navbar-logo-icon.png'

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='animate-spin w-96' src={logoicon} alt="logo icon loading" />
        </div>
    );
};

export default Loader;