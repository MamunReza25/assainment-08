import React from 'react';
import bannarImg from '../assets/hero.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
const Bannar = () => {
    return (
        <div className=' bg-[#D2D2D2]'>
            <h1 className='text-[60px] font-bold text-center'>We Build <br />
                <span className='text-[#7941E9] text-[70px] font-black'> Productive </span>Apps
            </h1>
            <p className='text-[#627382] text-[16px] font-medium text-center'>
                At,HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex justify-center items-center gap-5 pt-10'>
                <button className='btn bg-[#D2D2D2] px-6 py-3 text-[20px] text-[#001931] font-semibold'><img src={playstore} alt="" />Google Play</button>
                <button className='btn bg-[#D2D2D2] px-6 py-3  text-[20px] text-[#001931] font-semibold'>  <img src={appstore} alt="" />App Store</button>

            </div>
            <div className='pt-10 flex justify-center items-center'>
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