import React from 'react';
import logoImg from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
const Navbar = () => {
    const links = <>
        <div className=' flex justify-center items-center gap-5 text-[16px] font-semibold'>
            <Link to='/'> <li>Home</li></Link>

            <Link to='/apps'><li>Apps</li> </Link>
            <Link to='/installation'> <li>Installation</li></Link>


        </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img className='w-[50px] h-[50px]' src={logoImg} alt="" />
                        <a className="text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[16px] font-semibold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "> <span className='text-white'><FaGithub /></span>Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;