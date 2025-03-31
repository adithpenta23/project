import React from 'react';
function Team() {
    return ( 
        <div className='container p-5'>
            <div className='row mt-5 mb-5 '>
                <h1 className='text-center'style={{fontSize:"30px"}}>People</h1>
            </div>
            <div className='row p-5 mt-5 border-top'>
                <div className='col-6 p-5'>
                    <img  src='media/nithinKamath.jpg' style={{borderRadius:"100%", width:"60%"}}/>
                    <h1 className='mt-5 text-center'>Nithin Kamath</h1>
                    <h3 className='mt-2 text-muted text-center'>Founder,CEO</h3>


                </div>
                <div className='col-6 p-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

Playing basketball is his zen.</div>
        </div>
        </div>
     );
}

export default Team;