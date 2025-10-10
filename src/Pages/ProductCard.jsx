import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const ProductCard = ({ product }) => {

    // const [image, companyName] = product
    return (
        <Link to={`/detailsProduct/${product.id}`}>
            <div className="card bg-base-100 w-[280px]] p-3 shadow-sm">
                <figure className='h-[250px] bg-gray-400'>
                    <img className='h-full rounded-md bg-[#D9D9D9] w-full'
                        src={product.image}
                        alt={product.companyName} />
                </figure>
                <div className="card-body py-2 w-[280px]">
                    <h2 className="card-title ">{product.companyName}</h2>

                    <div className="card-actions flex justify-between items-center">
                        <button className=' flex justify-center items-center gap-2 text-[#00D390] bg-[#F1F5E8] text-[16px] font-medium px-2 rounded-md'><span><FaDownload /></span>{product.downloads / 100000}M</button>
                        <button className="flex justify-center items-center text-[#FF8811] bg-[#FFF0E1]  text-[16px] font-medium px-2 rounded-md"> <span><FaStar /></span>{product.ratingAvg}</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;