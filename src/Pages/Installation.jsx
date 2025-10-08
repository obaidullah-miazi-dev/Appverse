import React, { useState } from 'react';
import { getApp } from '../Utilities/LocalStorageFunc';
import InstalledAppCard from '../Components/InstalledAppCard';
import Container from '../Components/Container';

const Installation = () => {

    const [installedApps, setInstalledApps] = useState(() => getApp())
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
                    <h2 className='text-3xl font-bold  '>Installed Apps <span className='text-lg text-gray-500'>({installedApps.length}) Apps Found</span></h2>


                    <div>
                        <h1 className='btn'>sort</h1>
                    </div>

                </div>
                {
                    installedApps.map(app => <InstalledAppCard key={app.id} app={app}></InstalledAppCard>)
                }
            </Container>
        </div>
    );
};

export default Installation;