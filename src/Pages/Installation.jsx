
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredProduc } from '../jsComponent/addToInstalltion ';
import InstallCard from './InstallCard';

const Installation = () => {

    const [install, setInstall] = useState([]);
    const productsdata = useLoaderData();


    useEffect(() => {
        const storedData = getStoredProduc();
        const converPersIn = storedData.map(id => parseInt(id));
        const installationData = productsdata.filter(product => converPersIn.includes(product.id));
        setInstall(installationData)
    }, [])
    return (
        <div>
            <div>
                <h1>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <h1>{install.length}  Apps Found</h1>
                <button className='btn'>Sort By Size</button>
            </div>
            <div>
                {
                    install.map(product => <InstallCard key={product.id} product={product}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default Installation;