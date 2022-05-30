import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn,faPaperPlane,faUser} from '@fortawesome/free-solid-svg-icons';


const Service = () => {
    return (
<div>
<div className='d-flex align-items-center pt-5'>
        <div style={{borderTop:"1px dashed #644F9C",width:"32%"}} className=' '></div>
        <h3 className='px-5'style={{fontSize:"30px",color:'#644F9C'}}> AVAILABLE FOR EVERYONE</h3>
        <div style={{borderTop:"1px dashed #644F9C",width:"32%"}} className=''></div>
      </div>
        <div className='container'>
        <div className='service '>
            <h5 className='text-center'>Here will be a text</h5>
            <div className='row g-4 align-items-center justify-content-center mt-5 '>
                <div className='col-lg-4 col-md-6 col-12  '>
                <div className=''>
                <FontAwesomeIcon className='icon' icon={faBullhorn} />
                <h4 className='my-4'>text 1</h4>
                <button className='btn'>Hello 1</button>
                </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <div>
                <FontAwesomeIcon className='icon' icon={faPaperPlane} />
                <h4 className='my-4'>text 2</h4>
                <button className='btn'>Hello 2</button>
                </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <div className=''>
                <FontAwesomeIcon className='icon' icon={faUser} />
                <h4 className='my-4'> text 3</h4>
                <button className='btn'>Hello 3</button>
                </div>
                </div>
            </div>
        </div>
     </div>
</div>
    );
};

export default Service;