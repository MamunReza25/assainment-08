import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const AllApps = ({ app }) => {
    return (
        <div className="card bg-base-100 w-[280px]] p-3 shadow-sm">
            <figure className='h-[250px]'>
                <img className='h-full rounded-md bg-[#D9D9D9] w-full'
                    src={app.image}
                    alt={app.companyName} />
            </figure>
            <div className="card-body py-2 w-[280px]">
                <h2 className="card-title ">{app.companyName}</h2>

                <div className="card-actions flex justify-between items-center">
                    <button className=' flex justify-center items-center gap-2 text-[#00D390] bg-[#F1F5E8] text-[16px] font-medium px-2 rounded-md'><span><FaDownload /></span>{app.downloads / 100000}M</button>
                    <button className="flex justify-center items-center text-[#FF8811] bg-[#FFF0E1]  text-[16px] font-medium px-2 rounded-md"> <span><FaStar /></span>{app.ratingAvg}</button>
                </div>
            </div>
        </div>
    );
};

export default AllApps;