import React from 'react';
import Banner from '../Components/Banner';
import useData from '../Hook/useData';
import AppCard from '../Components/AppCard';
import Container from '../Components/Container';
import { NavLink } from 'react-router';

const Home = () => {
    const data = useData()
    const { appData,loading,error } = data

    if (loading) return <Container><p>loading.........</p></Container>;
    if (error) return <Container><p>app not found</p></Container>
    // console.log(appData);
    const featuredApp = appData.slice(0, 8)
    // console.log(featuredApp);

    return (
        <>
            <Banner></Banner>
            <Container>
                <div className='text-center mt-16 space-y-4'>
                    <h1 className='font-bold md:text-5xl text-4xl '>Trending Apps</h1>
                    <p className='text-xl text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12 mb-8 mt-16'>
                    {
                        featuredApp.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>

                <NavLink to='/allapp' className="flex justify-center items-center mb-5">
                    <button className="px-5 py-2.5  rounded-md hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold">
                        Show All
                    </button>
                </NavLink>
            </Container>

        </>
    );
};

export default Home;