import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container'>
            <div className='row g-4 align-items-center mt-3'>
                <div className='col-md-8 col-12 text-start'>
                    <div className='content-area'>
                        <h1>Here will be a Title</h1>
                        <p>Here will be a Text</p>
                    </div>
                </div>
                <div className='col-md-4 col-12 '>
                    <div className='img-area ms-auto'>
                    <h1 >Artwork for title 1</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;