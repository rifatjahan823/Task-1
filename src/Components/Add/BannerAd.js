import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink} from '@fortawesome/free-solid-svg-icons';

const BannerAd = () => {
    return (
        <div className='container'>
          <div className='row g-4 align-items-center'>
           <div className='col-12 col-md-5 pe-5'>
           <div className='banner-area'>
               <h6>Ad Format</h6>
               <p>Explanation graphics of ad format</p>
               <p>(Image will be changed)</p>
            </div>
           </div>
           <div className='col-12 col-md-7 ps-5 text-start '>
            <h3 className='banner-title'>BANNER AD</h3>
            <p className='banner-content pt-3 pb-5 mb-5'>Choose between the available banner formats. Highlyeffective ad for visibility.</p>
                <div className='mt-5 pt-4'><a className='' href="#" style={{textDecoration:"none",color:'#644F9C',fontSize:"18px"}}>Learn more  <FontAwesomeIcon className='banner-icon' icon={faExternalLink} /></a></div>
           </div>
        </div>
        </div>
    );
};

export default BannerAd;