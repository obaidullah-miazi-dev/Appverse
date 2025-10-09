import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import staricon from '../assets/icon-ratings.png'
import { removeApp } from '../Utilities/LocalStorageFunc';
import Swal from 'sweetalert2';

const MyInstallation = ({ app, setInstalledApps }) => {
    const { image, title, ratingAvg, downloads, size, id } = app

    const unistallApp = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to uninstall this app?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7B3FE4",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Uninstalled!",
                    text: "The app has been successfully removed from your device.",
                    icon: "success",
                    confirmButtonColor: "#7B3FE4"
                });
            }
        });

        removeApp(id)
        setInstalledApps(apps => apps.filter(a => a.id !== id))

    }

    return (
        <>

            <div className='flex flex-col md:flex-row gap-4 items-center justify-between bg-white rounded-xl my-5 p-5'>
                <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
                    <div className='md:w-24 w-full'>
                        <img src={image} alt={title} className='rounded-xl' />
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-2xl md:text-xl font-bold'>{title}</h2>

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
                                <p className='font-semibold text-gray-500'>{size} MB</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-full md:w-28'>
                    <button onClick={() => unistallApp(id)} className='cursor-pointer bg-[#00D390] py-2 px-5 rounded-md text-white font-semibold text-xl mt-5 md:mt-0 w-full'>Unistall</button>
                </div>
            </div>

        </>
    );
}

export default MyInstallation;