import React from 'react';
import Navbar from './Pages/Navbar';
import { Outlet } from 'react-router';
import Footer from './Pages/Footer';

const Root = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;