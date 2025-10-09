import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import staricon from '../assets/icon-ratings.png'
import { NavLink } from 'react-router';

const AppCard = ({ app }) => {
    // console.log(app.id);
    const { image, title, downloads, ratingAvg } = app
    return (
        <>
            <NavLink to={`/app/${app.id}`}>
                <div className='p-5 shadow-md rounded-xl space-y-5 cursor-pointer bg-white h-full'>
                    <img src={image} className='w-full rounded-xl mx-auto' alt={title} />
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='px-2 py-1 font-semibold bg-green-50 text-green-500 rounded-md flex justify-between items-center gap-2'>
                            <img src={downloadImg} alt="download icon" className='w-4 h-4' />
                            <p>{downloads}</p>
                        </div>
                        <div className='px-2 py-1 font-semibold bg-orange-50 text-orange-500 rounded-md flex justify-between items-center gap-2'>
                            <img src={staricon} alt="star icon" className='w-4 h-4' />
                            <p>{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
};

export default AppCard;