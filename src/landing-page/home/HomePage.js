import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Openacc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
            
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Openacc/>
            

        </>
     );
}

export default HomePage;