import React from 'react';
function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    <p className='text-muted'>Customer-first always
That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.

No spam or gimmicks
No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.

The Zerodha universe
Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.

Do better with money
With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/ecosystem.png' style={{width:"90%"}}/>
                </div>
                
            </div>

        </div>
     );
}

export default Stats;