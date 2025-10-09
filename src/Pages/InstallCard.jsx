import React from 'react';

const InstallCard = ({ product }) => {
    console.log(product)
    const { image, companyName, downloads, ratingAvg } = product;
    return (
        <div>
            <div className='flex justify-center items-center gap-2 h-[70px] bg-gray-400'>
                <div>
                    <img className='w-[50px] h-[50px]  border-2 border-amber-600' src={image} alt="" />
                </div>
                <div>
                    <h1>{companyName}</h1>
                    <div>
                        <h2>{downloads / 100000}M</h2>
                        <h2>{ratingAvg}</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InstallCard;