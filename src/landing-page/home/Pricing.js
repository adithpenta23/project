import React from 'react';
function Pricing() {
    return ( 
        <div className='container text-center'>
            <div className='row'>
                <div className='col-4 p-6'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='fs-6 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-2'></div>
                <div className='col-6 pl-2'>
                    <div className='row text-center'>
                    <div className='col p-2 border'>
                        <h1>₹0</h1>
                        <br/>
                        <p>Free account
                        opening</p>
                    </div>
                    <div className='col p-2 border'>
                        <h1>₹20</h1>
                        <br/>
                        <p>Intraday and
                        F&O</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;