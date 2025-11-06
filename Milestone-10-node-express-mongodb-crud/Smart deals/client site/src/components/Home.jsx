import React, { Suspense } from 'react';
import LatestProducts from './LatestProducts';
import Banner from './Banner';

const latestProductPromise = fetch('https://smart-deals-psi.vercel.app/latest-products').then(res=>res.json())

const Home = () => {
    return (
        <div>
            <h1></h1>
            <Banner></Banner>
            <Suspense fallback={<p>Loading........</p>}>
                <LatestProducts latestProductPromise={latestProductPromise}></LatestProducts>
            </Suspense>
        </div>
    );
};

export default Home;