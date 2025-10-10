import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from './AllApps';

const Apps = () => {
    const apps = useLoaderData();
    const [search, setSearch] = useState("");
    const term = search.trim().toLocaleLowerCase();
    const searchApps = term ? apps.filter(product => product.companyName.toLocaleLowerCase().includes(term)) : apps
    console.log(searchApps)

    return (
        <div className='pb-6'>
            <div className='py-10 bg-[#F5F5F5] px-5 md:px-0'>
                <h1 className='text-[48px] font-bold text-center text-[#001931]'>Our All Applications</h1>
                <p className='text-[20px] text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>


            <div className='flex justify-between items-center py-5 px-5 md:px-0'>
                <div>
                    <h1 className='text-[20px] font-semibold'>({searchApps.length}) Apps Found</h1>
                </div>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <Suspense fallback={<h1>wait for loadding</h1>}>
                <div className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-4 gap-5 bg-[#F5F5F5]'>
                    {
                        searchApps.map(app => <AllApps key={app.id} app={app}></AllApps>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Apps;