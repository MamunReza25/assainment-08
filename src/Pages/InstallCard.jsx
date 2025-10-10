import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const InstallCard = ({ product }) => {
    console.log(product)
    const { image, companyName, downloads, ratingAvg } = product;
    return (
        <div>
            <div className='flex justify-between items-center h-[70px] bg-white  rounded-md shadow-2xl px-5 mb-5'>
                <div className='flex justify-center items-center gap-2 '>
                    <div>
                        <img className='w-[50px] h-[50px]' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#001931] '>{companyName}</h1>
                        <div className='flex justify-start items-center gap-5'>
                            <h2 className='flex items-center text-[#00D390]'><span className=''><FaDownload /></span>{downloads / 100000}M</h2>
                            <h2 className='flex items-center'><span className=' text-[#FF8811]'><FaStar /> </span> <span className=' text-[#FF8811]'>{ratingAvg}</span>  <span className='text-gray-500 ml-2'>255MB</span> </h2>
                        </div>
                    </div>

                </div>

                <div>
                    <button className='btn bg-[#00D390] text-white'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstallCard;