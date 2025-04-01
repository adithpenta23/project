import React from 'react';
function Hero() {
    return ( 
        <section className='container' id='supportHero'>
            <div className='p-5 mt-5 mb-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-5 mt-5 '>
                <div className='col-6 p-5 mb-5'>
                    <h1>Search for an answer or browse help topics to create a ticket</h1>
                    <input id='supportInput' placeholder='Eg:how do i activate F&O, why is my order getting rejected'/><br/>
                    <a href=''>Track account opening</a>

                    <a href=''>Track segment activation</a>

                    <a href=''>Intraday margins</a>

                    <a href=''>Kite user manual</a>
                </div>
                <div className='col-6 p-5 mb-5'>
                    <h1>Featured</h1>
                    <p>1.Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</p>
                    <p>2.Surveillance measure on scrips - April 2025</p>
                </div>
                
            </div>
        </section>
     );
}

export default Hero;