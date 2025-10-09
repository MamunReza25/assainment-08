import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import dowunloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import likeImg from '../assets/icon-review.png'
import { addToProductDB } from '../jsComponent/addToInstalltion ';
const DetailsProduct = () => {
    const { id } = useParams();
    const productId = parseInt(id)
    const data = useLoaderData();
    const detaise = data.find(product => product.id === productId);
    console.log(detaise)
    const { image, companyName, title, reviews, downloads, ratingAvg } = detaise;

    const handleInstallation = (id) => {
        addToProductDB(id)
    }
    return (
        <div className='py-10'>
            <h1>product details</h1>
            <div className='flex justify-center items-center  gap-5 border-b-2 border-amber-700 pt-2 pb-7'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <div>
                        <div className='pb-5'>
                            <h1 className='text-3xl text-[#001931] font-bold'>{companyName}</h1>
                            <p className='text-[20px] font-semibold  bg-gradient-to-r from-[#9a999c]  to-[#632EE3] bg-clip-text text-transparent'>{title}</p>
                        </div>
                        <div className='flex justify-between items-center gap-5 border-t-2 border-amber-700 pt-5'>
                            <div>
                                <img src={dowunloadImg} alt="" />
                                <h2>Downloads</h2>
                                <h1 className='text-3xl font-extrabold text-[#001931]'>{downloads / 100000}M</h1>
                            </div>
                            <div>
                                <img src={ratingImg} alt="" />
                                <h2>Average Ratings</h2>
                                <h1 className='text-3xl font-extrabold text-[#001931]'>{ratingAvg}M</h1>
                            </div>
                            <div>
                                <img src={likeImg} alt="" />
                                <h2>Average Ratings</h2>
                                <h1 className='text-3xl font-extrabold text-[#001931]'>{parseInt(reviews / 1000)}k</h1>
                            </div>
                        </div>
                        <button onClick={() => handleInstallation(id)} className='btn'>Install Now (291 MB) </button>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default DetailsProduct;