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
        <nav >
           <ul className='d-flex justify-content-center  list-unstyled my-5 py-4'>
               <li className='me-5'> <CustomLink to="/">POP-UNDER</CustomLink></li>
               <li className='me-5'> <CustomLink to="BannerAd">BANNER AD </CustomLink> </li>
               <li className='me-5'> <CustomLink className='text-decoration-none' to="Native">NATIVE</CustomLink> </li>
               <li> <CustomLink className='text-decoration-none' to="skim">SKIM</CustomLink> </li>
           </ul>
           </nav>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Add;