import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center'>
            <div className='row mt-5 p-5 border-bottom'>
            <h1>Charges</h1>
            <p>List of all charges and taxes</p>
            </div>
            <div className='row mt-5 p-5'>
                <div className='col-4 p-5'>
                    <img src='media/pricingEquity.svg'/>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                <img src='media/intradayTrades.svg'/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                <img src='media/pricingEquity.svg'/>
                    <h2>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>

     );
}

export default Hero;