import React, { useState } from 'react';
import { getApp } from '../Utilities/LocalStorageFunc';
import InstalledAppCard from '../Components/InstalledAppCard';
import Container from '../Components/Container';

const Installation = () => {

    const [installedApps, ] = useState(() => getApp())
    const [sortApp, setSortApp] = useState('none')
    const sortedAppList = (()=> {
        if(sortApp === 'size-low'){
            return [...installedApps].sort((a,b) => a.size - b.size)
        }
        else if(sortApp === 'size-high'){
            return [...installedApps].sort((a,b) => b.size - a.size)
        }
        else{
            return installedApps
        }
    })()
    console.log(installedApps);
    return (
        <div className='pb-30'>
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
                                <option value="none">Sort By Size</option>
                                <option value="size-low">Low to High</option>
                                <option value="size-high">High to Low</option>
                            </select>
                        </label>
                    </div>

                </div>
                {
                    sortedAppList.map(app => <InstalledAppCard key={app.id} app={app}></InstalledAppCard>)
                }
            </Container>
        </div>
    );
};

export default Installation;