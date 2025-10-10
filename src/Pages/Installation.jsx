
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredProduc } from '../jsComponent/addToInstalltion ';
import InstallCard from './InstallCard';
import { IoMdArrowDropdown } from "react-icons/io";

const Installation = () => {

    const [install, setInstall] = useState([]);
    const productsdata = useLoaderData();
    const [sort, setSort] = useState("");

    useEffect(() => {
        const storedData = getStoredProduc();
        const converPersIn = storedData.map(id => parseInt(id));
        const installationData = productsdata.filter(product => converPersIn.includes(product.id));
        setInstall(installationData)
    }, []);

    const handleSort = (type) => {
        setSort(type);
        if (type === "size") {
            const sortedSize = [...install].sort((a, b) => a.size - b.size);
            setSort(sortedSize);
            console.log(sortedSize)
        }
        if (type === "Number") {
            const sortedDownloads = [...install].sort((a, b) => b.ratingAvg - a.ratingAvg);
            setSort(sortedDownloads);
            console.log(sortedDownloads)
        }
    }
    return (
        <div className='bg-[#F5F5F5] py-20'>
            <div className='text-center'>
                <h1 className='text-[#001931] text-5xl font-bold py-4'>Your Installed Apps</h1>
                <p className='text-[#627382] text-[20px] pb-3'>Explore All Trending Apps on the Market developed by us</p>

            </div>

            <div className='flex justify-between items-center pb-2'>
                <h1 className="text-xl font-bold ml-5">
                    {install.length}
                    <span className="text-[20px] font-semibold ml-1">App Found</span>
                </h1>

                <div>
                    <details className="dropdown">
                        <summary className="btn m-1 text-[#627382] " >Sort By Size: <span><IoMdArrowDropdown /></span> </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("size")} className='text-[#627382] '>Size</a></li>
                            <li><a onClick={() => handleSort("Number")} className='text-[#627382] '>Number</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className='bg-[#F5F5F5]'>
                {
                    install.map(product => <InstallCard key={product.id} product={product}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default Installation;