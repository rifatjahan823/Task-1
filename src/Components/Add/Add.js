import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Add = () => {
    return (
        <div>
        <div className='d-flex align-items-center pt-5 mt-5'>
        <div style={{borderTop:"1px dashed #644F9C",width:"32%"}} className=' '></div>
        <h3 className='px-5'style={{fontSize:"30px",color:'#644F9C'}}>VERSATILE AD FORMATS</h3>
        <div style={{borderTop:"1px dashed #644F9C",width:"32%"}} className=''></div>
      </div>

        <div className='container'>      
            <div className='row my-5'>
                <div className='col-lg-3 col-md-6 col-6'>
                <li className='me-5 list-unstyled'> <CustomLink to="/">POP-UNDER</CustomLink></li>
                </div>
                <div className='col-lg-3 col-md-6 col-6'>
                <li className='me-5 list-unstyled'> <CustomLink to="BannerAd">BANNER AD </CustomLink> </li>
                </div>
             <div className='col-lg-3 col-md-6 col-6'>
             <li className='me-5 list-unstyled'> <CustomLink className='text-decoration-none' to="Native">NATIVE</CustomLink> </li>
             </div >
             <div className='col-lg-3 col-md-6 col-6'>      
         <li className='list-unstyled'> <CustomLink className='text-decoration-none' to="skim">SKIM</CustomLink> </li>
         </div>
            </div>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Add;