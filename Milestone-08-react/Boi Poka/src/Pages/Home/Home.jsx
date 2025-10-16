import React from 'react';

import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
const Home = () => {
    const data = useLoaderData()
   
    return (
        <>
        <Banner></Banner>
      <Books data={data}></Books>
        </>
      
    );
};

export default Home;