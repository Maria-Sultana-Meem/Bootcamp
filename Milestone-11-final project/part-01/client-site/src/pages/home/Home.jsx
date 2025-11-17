import React from 'react';
import Banner from './Banner';
import HowItWorks from '../../components/HowItWorks';
import Services from '../../components/Services';
import Brands from '../../components/Brands';
import Features from '../../components/Features';
import Reviews from '../../components/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json())

const Home = () => {
    return (
        <div className='mt-20'>
           <Banner></Banner> 
           <HowItWorks></HowItWorks>
           <Services></Services>
           <Brands></Brands>
           <Features></Features>
           <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;