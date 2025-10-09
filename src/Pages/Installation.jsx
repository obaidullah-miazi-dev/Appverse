import React, { useState } from 'react';
import { getApp } from '../Utilities/LocalStorageFunc';
import InstalledAppCard from '../Components/InstalledAppCard';
import Container from '../Components/Container';
import { NavLink } from 'react-router';

const Installation = () => {

    const [installedApps, setInstalledApps] = useState(() => getApp())
    const [sortApp, setSortApp] = useState('none')
    const sortedAppList = (() => {
        if (sortApp === 'size-low') {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads)
        }
        else if (sortApp === 'size-high') {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return installedApps
        }
    })()
    console.log(installedApps);
    return (
        <div className='pb-96'>
            <Container>
                <div className='text-center mt-16 space-y-4 mb-12'>
                    <h1 className='font-bold md:text-5xl text-4xl '>Your Installed Apps</h1>
                    <p className='text-xl text-gray-500'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className='flex sm:flex-row flex-col justify-between items-center mt-24 sm:space-y-0 space-y-5'>
                    <h2 className='md:text-3xl text-xl font-bold  '>Installed Apps <span className='md:text-lg text-sm text-gray-500'>({installedApps.length}) Apps Found</span></h2>


                    <div>
                        <label className='form-control w-full max-w-xs'>
                            <select className='select' onChange={(e) => setSortApp(e.target.value)}>
                                <option value="none">Sort By Downloads</option>
                                <option value="size-low">Low to High</option>
                                <option value="size-high">High to Low</option>
                            </select>
                        </label>
                    </div>

                </div>
                {
                    sortedAppList.length === 0 ? (<div className='text-center space-y-5 md:my-48 my-20'>
                        <h1 className='md:text-7xl text-4xl font-bold'>No App Installed Yet</h1>
                        <p className='font-semibold text-lg text-gray-500'>Please Download Any App </p>
                        <NavLink to='/' className="flex justify-center items-center mb-5">
                            <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                                Go Back
                            </button>
                        </NavLink>
                    </div>)
                        :
                        sortedAppList.map(app => <InstalledAppCard key={app.id} app={app} setInstalledApps={setInstalledApps}></InstalledAppCard>)

                }
            </Container>
        </div>
    );
};

export default Installation;