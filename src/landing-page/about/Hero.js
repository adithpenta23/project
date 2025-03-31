import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row mt-5 mb-5 '>
                <h1 className='text-center'style={{fontSize:"30px"}}>We pioneered the discount broking model in India.<br/>
                Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row p-5 mt-5 border-top'>
                <div className='col-6 p-5'>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-6 p-5'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</div>
        </div>
        </div>
     );
}

export default Hero;