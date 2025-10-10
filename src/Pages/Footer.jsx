import React from 'react';
import logoImg from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div >
            <footer className=" bg-[#001931] text-white p-10 px-20">

                <div className='flex justify-between flex-col md:flex-row'>

                    <div>
                        <div className='flex justify-center items-center gap-2 pb-5'>
                            <img className='w-[80px] h-[80px]' src={logoImg} alt="" />
                            <h1 className='text-4xl text-[#9358EC] font-extrabold'>HERO.IO</h1>
                        </div>
                        <div>
                            <p>
                                AppS Industries Ltd.
                                <br />
                                Providing reliable tech since 2002
                            </p>
                        </div>
                    </div>

                    <div className='pt-5 '>
                        <a className='flex justify-center items-center gap-2 pb-4'> <span className='text-3xl '><FaFacebook /></span> Facebook</a>
                        <a className='flex justify-center items-center gap-2 pb-4'> <span className='text-3xl '><FaLinkedin /></span>Linkedin</a>
                        <a className='flex justify-center items-center gap-2 pb-4'> <span className='text-3xl '><FaYoutube /></span>Youtube</a>
                    </div>
                </div>
                <div className=' w-full flex justify-center'>
                    <h1 className=''>Copyright © 2025 - All right reserved</h1>
                </div>
            </footer>

        </div>
    );
};

export default Footer;