import React from 'react';
import bannarImg from '../assets/hero.png'
const Bannar = () => {
    return (
        <div className='p-10 bg-[#D2D2D2]'>
            <h1 className='text-[60px] font-bold text-center'>We Build <br />
                <span className='text-[#7941E9] text-[70px] font-black'> Productive </span>Apps
            </h1>
            <p className='text-[#627382] text-[16px] font-medium text-center'>
                At,HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='pt-10'>
                <img src={bannarImg} alt="" />
            </div>


            <div className='bg-[#8148EB] px-40 py-10 text-white w-full'>
                <h1 className='text-center text-2xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-between items-center py-10 '>
                    <div>
                        <h3>Total Downloads</h3>
                        <h1 className='text-5xl font-extrabold py-3'>29.6M</h1>
                        <h4>21% more than last month</h4>
                    </div>
                    <div>
                        <h3>Total Reviews</h3>
                        <h1 className='text-5xl font-extrabold py-3'>906K</h1>
                        <h4>40% more than last month</h4>
                    </div>
                    <div>
                        <h3>Active Apps</h3>
                        <h1 className='text-5xl font-extrabold py-3'>132+</h1>
                        <h4>31 more will Launch</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;