import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import staricon from '../assets/icon-ratings.png'

const InstalledAppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads, size } = app
    return (
        <>
            
                <div className='flex gap-4 items-center bg-white rounded-xl my-5 p-5'>
                    <div className='w-24'>
                        <img src={image} alt={title} className='rounded-xl' />
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-xl font-bold'>{title}</h2>

                        <div className='flex justify-between items-center gap-8'>
                            <div className=' font-semibold text-green-500 rounded-md flex justify-between items-center gap-2'>
                                <img src={downloadImg} alt="download icon" className='w-4 h-4' />
                                <p>{downloads}</p>
                            </div>
                            <div className='font-semibold  text-orange-500 rounded-md flex justify-between items-center gap-2'>
                                <img src={staricon} alt="star icon" className='w-4 h-4' />
                                <p>{ratingAvg}</p>
                            </div>
                            <div>
                                <p>{size}</p>
                            </div>
                        </div>

                    </div>
                </div>
            
        </>
    );
};

export default InstalledAppCard;