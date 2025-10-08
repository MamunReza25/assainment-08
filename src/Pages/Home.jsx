import React, { Suspense } from 'react';
import Bannar from '../Components/Bannar';
import { Link, useLoaderData } from 'react-router';
import ProductCard from './ProductCard';


const Home = () => {
    const products = useLoaderData();
    const allProducts = products.slice(0, 8);
    console.log(products)
    return (
        <div>
            <Bannar></Bannar>

            <div className='py-10 bg-[#F5F5F5] px-5 md:px-0'>
                <h1 className='text-[48px] font-bold text-center text-[#001931]'>Trending Apps</h1>
                <p className='text-[20px] text-[#627382] text-center'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <Suspense fallback={<h1>wait for loading....</h1>}>
                <div className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-4 gap-5 bg-[#F5F5F5]'>
                    {
                        allProducts.map(product => <ProductCard product={product}></ProductCard>)
                    }
                </div>

            </Suspense>
            <div className='text-center py-10 bg-[#F5F5F5]'>
                <Link to={'/apps'}>
                    <button className='btn px-10  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[16px] font-semibold text-white'>Show All</button>
                </Link>
            </div>

        </div>
    );
};

export default Home;