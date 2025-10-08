import React from 'react';
import { useParams } from 'react-router';
import useData from '../Hook/useData';
import Container from './Container';
import downloadImg from '../assets/icon-downloads.png'
import staricon from '../assets/icon-ratings.png'
import reviewicon from '../assets/icon-review.png'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Barcode } from 'lucide-react';

const AppDetails = () => {
    const { id } = useParams()
    const data = useData()
    const { appData } = data

    const singleApp = appData.find(app => app.id === Number(id))
    if (!singleApp) return <div><p>error</p></div>

    const rating = singleApp.ratings
    // console.log(rating);



    return (
        <>
            <Container>
                <div className='flex justify-between items-center gap-8 mt-20 pb-8 border-b-2 border-gray-200'>
                    <div className='w-80'>
                        <img src={singleApp.image} alt={singleApp.title} className='rounded-xl' />
                    </div>


                    <div className='flex-2 space-y-3'>
                        <h2 className='md:text-4xl text-3xl font-bold'>{singleApp.title}</h2>
                        <p className='text-gray-500 border-b-2 border-gray-200 pb-4'>Developed by <span className='text-[#632EE3] font-semibold'>{singleApp.companyName}</span></p>

                        <div className='flex items-center gap-16 mt-8'>

                            <div>
                                <div>
                                    <img src={downloadImg} alt="download icon" />
                                    <p>Downloads</p>
                                </div>
                                <h2 className='font-black text-4xl'>{singleApp.downloads}</h2>
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
                            <button className='cursor-pointer bg-[#00D390] py-2 px-5 rounded-md text-white font-semibold text-xl mt-5'>Install Now <span>({singleApp.size} MB)</span></button>
                        </div>

                    </div>
                </div>


                <div className='h-[500px] mt-12 '>
                    <h2 className='text-3xl my-8 font-bold'>Ratings</h2>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={rating}
                           
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#FF8811"  />

                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='py-24'>
                   <h2 className='text-3xl font-bold mb-5'>Description</h2>
                   <p className='text-gray-500 text-xl'>{singleApp.description}</p>
                </div>
            </Container>
        </>
    );
};

export default AppDetails;