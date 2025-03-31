import React from 'react';
function Brokerage () {
    return (
        <div className='container'>
        <div className='row mt-5 p-5 text-center border-top'>
                <div className='col p-4'>
                <a href=''style={{textDecoration:"none"}} className='text-center'>Brokerage</a>
                <ul style={{textAlign:"left", lineHeight:"2.8"}} className='text-muted mt-5'>
                <li>₹100 per order for futures and options.</li>
                <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                </ul>
             </div>
            </div>
        </div>
     );
}

export default Brokerage;