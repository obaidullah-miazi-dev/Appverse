import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../Hook/useData';
import Container from './Container';
import downloadImg from '../assets/icon-downloads.png'
import staricon from '../assets/icon-ratings.png'
import reviewicon from '../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from './Loader';
import AppNotFoundErrorPage from './AppNotFoundErrorPage';
import { saveApp, getApp } from '../Utilities/LocalStorageFunc';
import Swal from 'sweetalert2';

const AppDetails = () => {
    const { id } = useParams()
    const data = useData();
    const { appData, loading } = data
    const [disabledBtn, setDisabledBtn] = useState(false)
    // console.log(setAppData);

    const singleApp = appData?.find(app => app.id === Number(id))

    useEffect(() => {
        const savedAppInLs = getApp()
        const checkInstalled = savedAppInLs.some(app => app.id === Number(id))
        setDisabledBtn(checkInstalled)
    }, [id])

    if (loading) return <Loader></Loader>
    if (!singleApp) return <div><AppNotFoundErrorPage></AppNotFoundErrorPage></div>


    const rating = singleApp.ratings
    // console.log(rating);

    const handleSaveApp = (singleApp) => {
        saveApp(singleApp)
        setDisabledBtn(true)
        Swal.fire({
            title: "App Installed Successfully",
            text: `Enjoy our ${singleApp.title} App`,
            icon: "success"
        });
    }





    return (
        <>
            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-20 pb-8 border-b-2 border-gray-200'>
                    <div className='w-80 px-5 md:px-0'>
                        <img src={singleApp.image} alt={singleApp.title} className='rounded-xl' />
                    </div>


                    <div className='md:flex-2 space-y-3'>
                        <h2 className='md:text-4xl text-3xl font-bold'>{singleApp.title}</h2>
                        <p className='text-gray-500 border-b-2 border-gray-200 pb-4'>Developed by <span className='text-[#632EE3] font-semibold'>{singleApp.companyName}</span></p>

                        <div className='flex flex-col md:flex-row md:items-center gap-16 mt-8'>

                            <div>
                                <div>
                                    <img src={downloadImg} alt="download icon" />
                                    <p>Downloads</p>
                                </div>
                                <h2 className='font-black text-4xl'>{singleApp.downloads}K+</h2>
                            </div>
                            <div>
                                <div>
                                    <img src={staricon} alt="star icon" />
                                    <p>Average Ratings</p>
                                </div>
                                <h2 className='font-black text-4xl'>{singleApp.ratingAvg}</h2>
                            </div>
                            <div>
                                <div>
                                    <img src={reviewicon} alt="review icon" />
                                    <p>Total Reviews</p>
                                </div>
                                <h2 className='font-black text-4xl'>{singleApp.reviews}</h2>
                            </div>

                        </div>

                        <div>
                            <button disabled={disabledBtn} onClick={() => handleSaveApp(singleApp)} className={`bg-[#00D390] py-2 px-5 rounded-md text-white font-semibold text-xl mt-5 ${disabledBtn ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#00D390] cursor-pointer'}`}>{disabledBtn ? 'Installed' : `Install Now (${`${singleApp.size}`}) MB`}</button>
                        </div>

                    </div>
                </div>


                <div className='h-[500px] mt-12 '>
                    <h2 className='text-3xl my-8 font-bold'>Ratings</h2>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={rating}
                           
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis type="number" domain={[0, "dataMax + 1000"]} />
                            <YAxis
                                dataKey="name"
                                type="category"
                                axisLine={false}
                                tickLine={false}
                                width={40}
                            />
                            <Tooltip
                                cursor={{ fill: "rgba(255,165,0,0.1)" }}
                                formatter={(value) => [`${value.toLocaleString()}`, "Reviews"]}
                            />
                            <Bar
                                dataKey="count"
                                fill="#ff9500"
                                radius={[0, 2, 2, 0]}
                                barSize={25}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='py-24'>
                    <h2 className='text-3xl font-bold mb-5'>Description</h2>
                    <p className='text-gray-500 md:text-xl'>{singleApp.description}</p>
                </div>
            </Container>
        </>
    );
};

export default AppDetails;