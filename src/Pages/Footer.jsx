import React from 'react';
import logoImg from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#001931] text-white p-10">

                <img className='w-[80px] h-[80px]' src={logoImg} alt="" />

                <div className=' w-full flex justify-center'>
                    <h1 className=''>Copyright © 2025 - All right reserved</h1>
                </div>
            </footer>

        </div>
    );
};

export default Footer;