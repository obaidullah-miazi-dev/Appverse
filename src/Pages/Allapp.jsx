import React, { useEffect, useState } from 'react';
import useData from '../Hook/useData';
import AppCard from '../Components/AppCard';
import Container from '../Components/Container';
import Loader from '../Components/Loader';
import AppNotFoundErrorPage from '../Components/AppNotFoundErrorPage';
import { NavLink } from 'react-router';

const Allapp = () => {
    const data = useData()
    const { appData, loading, error } = data
    console.log(loading);

    const [search, setSearch] = useState('')
    const [searchLoading, setSearchLoading] = useState(false)
    const [searchedData, setSearchedData] = useState(appData)

    useEffect(() => {
        setSearchLoading(true)
        const loadingTimer = setTimeout(() => {
            const terms = search.trim().toLocaleLowerCase()
            const searchedApps = terms ? appData.filter(app => app.title.toLocaleLowerCase().includes(terms)) : appData
            setSearchedData(searchedApps)
            setSearchLoading(false)

        }, 500);

        return () => clearTimeout(loadingTimer)
    }, [search, appData])

    // console.log(appData);
    if (loading) return <Container><Loader></Loader></Container>;
    if (error) return <Container><AppNotFoundErrorPage></AppNotFoundErrorPage></Container>


    return (
        <>
            <Container>
                <div className='text-center mt-16 space-y-4'>
                    <h1 className='font-bold md:text-5xl text-4xl '>Our All Applications</h1>
                    <p className='text-xl text-gray-500'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>


                <div className='flex sm:flex-row flex-col justify-between items-center mt-24 sm:space-y-0 space-y-5'>
                    <h2 className='text-3xl font-bold  '>All Apps <span className='text-lg text-gray-500'>({searchedData.length}) Apps Found</span></h2>


                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>

                </div>


                {
                    searchLoading ? (<Loader></Loader>) :
                        searchedData.length === 0 ? (
                            <div className='text-center space-y-5 md:my-48 my-20'>
                                <h1 className='md:text-7xl text-4xl font-bold'>No App Found</h1>
                                <p className='font-semibold text-lg text-gray-500'>Please Search with Correct Name</p>
                                <NavLink to='/' className="flex justify-center items-center mb-5">
                                    <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                                        Go Back
                                    </button>
                                </NavLink>
                            </div>
                        )
                            :
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12 mb-8 mt-8'>
                                {
                                    searchedData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                                }
                            </div>
                }
            </Container >
        </>
    );
};

export default Allapp;