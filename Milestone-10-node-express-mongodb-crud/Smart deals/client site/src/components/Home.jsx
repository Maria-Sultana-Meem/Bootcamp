import React, { Suspense } from 'react';
import LatestProducts from './LatestProducts';

const latestProductPromise = fetch('http://localhost:3000/latest-products').then(res=>res.json())

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Suspense fallback={<p>Loading........</p>}>
                <LatestProducts latestProductPromise={latestProductPromise}></LatestProducts>
            </Suspense>
        </div>
    );
};

export default Home;