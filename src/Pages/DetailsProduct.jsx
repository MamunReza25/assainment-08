import React, { Suspense, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dowunloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import likeImg from '../assets/icon-review.png'
import { addToProductDB } from '../jsComponent/addToInstalltion ';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const DetailsProduct = () => {
    const { id } = useParams();
    const productId = parseInt(id)
    const data = useLoaderData();
    const detaise = data.find(product => product.id === productId);
    // console.log(detaise)
    const { image, companyName, title, reviews, downloads, ratingAvg, ratings, description } = detaise;
    console.log(ratings)
    const [change, setChange] = useState(false)

    const handleInstallation = (id) => {
        addToProductDB(id)
        setChange(true);
    }
    // console.log(ratings)


    return (

        <div className='py-10 bg-[#F5F5F5]'>

            <div className='flex flex-col md:flex-row justify-start items-center  gap-5  border-b-1 border-gray-400 pt-2 pb-7'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <div className='pl-5'>
                        <div className='pb-5  border-b-1 border-gray-400 w-full'>
                            <div className='w-full'>
                                <h1 className='text-3xl text-[#001931] font-bold'>{companyName}</h1>
                                <p className='text-[20px] font-semibold  text-[#4a0dd8]'><span className='text-gray-400'>Developed by </span>{title}</p>
                            </div>

                        </div>
                        <div className='flex justify-between items-center gap-10 py-3'>
                            <div>
                                <img src={dowunloadImg} alt="" />
                                <h2 className='text-[#001931] text-[16px]'>Downloads</h2>
                                <h1 className='text-3xl font-extrabold text-[#001931]'>{downloads / 100000}M</h1>
                            </div>
                            <div>
                                <img src={ratingImg} alt="" />
                                <h2 className='text-[#001931] text-[16px]'>Average Ratings</h2>
                                <h1 className='text-3xl font-extrabold text-[#001931]'>{ratingAvg}M</h1>
                            </div>
                            <div>
                                <img src={likeImg} alt="" />
                                <h2 className='text-[#001931] text-[16px]'>Reviews</h2>
                                <h1 className='text-3xl font-extrabold text-[#001931]'>{parseInt(reviews / 1000)}k</h1>
                            </div>
                        </div>
                        <button onClick={() => handleInstallation(id)} className={`btn  bg-[#00D390] text-white ${change ? "bg-amber-400" : "bg-[#00D390]"}`} disabled={change} >{change ? "installed" : "Install Now (291 MB)"} </button>

                    </div>
                </div>
            </div>
            {/* rating part */}
            <div className='pt-5'>
                <h1 className='text-black font-bold text-[16px] py-10 pl-5'>Ratings</h1>
                <div className='w-[600px]'>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ratings} >
                            <XAxis dataKey="name" stroke="#8884d8"></XAxis>
                            <Tooltip></Tooltip>
                            <YAxis  ></YAxis>
                            <Bar dataKey="count" fill="#FF8811" barSize={30}>
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className=' px-5'>
                    <h1 className='text-black font-bold text-[16px] pt-10'>Description</h1>
                    <p className='text-[20px]  text-[#627382]'>
                        {description}
                    </p>
                </div>

            </div>

        </div >

    );
};

export default DetailsProduct;