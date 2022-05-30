import React from 'react';
import './FactArea.css'

const FactArea = () => {
    return (
        <div className='fact-area '>
            <div className='container'>
                <h4 className='mb-5'>Title 1</h4>
                <div className='row g-4 align-items-center justify-content-center  '>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='fact-1'>
                            <h1>1 BN+</h1>
                            <p>Daily Impressions</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='fact-2'>
                            <h1>$500K+</h1>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='fact-3'>
                        <h1>8K+</h1>
                        <p>Global Publishers</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default FactArea;