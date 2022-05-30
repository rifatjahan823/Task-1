import React from 'react';
import './Footer.css';
import { FaLinkedinIn,FaTwitter,FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container'>
            <div className='footer mt-3'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <h2 className=''>We are social </h2>
                    <h3 className='my-3'>FOLLOW US</h3>
                    <FaFacebookF className='footer-icon'/>
                    <FaTwitter className='footer-icon'/>
                    <FaLinkedinIn className='footer-icon' />
                    <h2 className='mt-3' style={{color:"black",fontWeight:"700",fontSize:"30px"}}>LOGO</h2>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                <h2>Links</h2>
                    <p>ADVERTISERS</p>
                   <p> PUBLISHERS</p>
                    <p>INFLUENCERS</p>
                    <p>AD FORMATS </p>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <h2>Documentation</h2>
                    <p>TERMS & CONDITIONS</p>
                    <p>RIVACY POLICY</p>
                    <p>CANCELLATION POLIC</p>
                    <p>BLOG</p>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                <h2>Support</h2>
                    <h3 className='mt-3'>FAQ</h3>
                    <h3 className='my-3'>MEDIA KIT</h3>
                    <h3>CONTACT US</h3>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;