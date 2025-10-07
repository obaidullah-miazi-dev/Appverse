import React from 'react';
import Container from '../Components/Container';
import Playstorelogo from '../assets/playstore-logo.png'
import Appstorelogo from '../assets/Appstore-logo.png'
import BannerImg from '../assets/hero.png'

const Banner = () => {
    return (
        <>
            <Container>
                <div className='space-y-7 mb-12 mt-20'>
                    <h1 className='text-7xl font-bold text-center mx-auto md:max-w-xl'>
                        We Build <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                    </h1>
                    <p className='text-gray-500 text-xl text-center'>
                        At Appverse, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='flex gap-4 items-center mx-auto justify-center'>
                        <button className='border-2 border-gray-200 rounded-md py-3 px-8'>
                            <a href="#" className='flex gap-4 items-center'>
                                <img src={Playstorelogo} alt="play store logo" />
                                <p>Play Store</p>
                            </a>
                        </button>
                        <button className='border-2 border-gray-200 rounded-md py-3 px-7'>
                            <a href="#" className='flex gap-4 items-center'>
                                <img src={Appstorelogo} alt="app store logo" />
                                <p>App Store</p>
                            </a>
                        </button>
                    </div>

                </div>
            </Container>

            <div>
                <img src={BannerImg} alt="Banner image" className='mx-auto' />
                <div className='text-center  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-20'>
                    <h2 className='text-5xl font-bold mb-16'>Trusted by Millions, Built for You</h2>

                    <div className='flex justify-center items-center gap-48'>
                        <div className='space-y-3'>
                            <p>Total Downloads</p>
                            <h3 className='text-6xl font-bold'>29.6M</h3>
                            <p>21% more than last month</p>
                        </div>
                        <div className='space-y-3'>
                            <p>Total Reviews</p>
                            <h3 className='text-6xl font-bold'>906K</h3>
                            <p>46% more than last month</p>
                        </div>
                        <div className='space-y-3'>
                            <p>Active Apps</p>
                            <h3 className='text-6xl font-bold'>132+</h3>
                            <p>31 more will Launch</p>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Banner;