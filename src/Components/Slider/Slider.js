import React from 'react';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    return (
        <div className='container'>
            <div className='slider py-5'>
                <h3>Title 1</h3>
                <div className='d-flex justify-content-center'>
                   <div className='me-1' style={{width:'27px',height:"4.5px",backgroundColor:"#644F9C",borderRadius:"40px"}}></div>
                   <div className='dash me-1'></div>
                   <div className='dash me-1' ></div>
                   <div className='dash'></div>
                </div>
                <div className='row g-4 align-items-ceneter mt-4'>
                    <div className='col-md-6 col-12'>
                        <div className=' slide'>
                        <div className='slide-border'>
                        <div className=' row align-items-ceneter'>
                        <div className='col-md-4 col-12 '>
                            <div className='slide-img '>

                            </div>
                            </div>
                            <div className='col-md-8 col-12'>
                                <div className='slide-content text-start mt-2'>
                                 <h6 className='mb-3'>Title 1</h6>
                                 <p>Hello, Here will be a text</p>
                         </div>
                         </div>
                        </div>
                        </div>
                    </div>
                    </div>
                <div className='col-md-6 col-12'>
                <div className=' slide'>
                        <div className='slide-border'>
                        <div className=' row align-items-ceneter'>
                        <div className='col-md-4 col-12 '>
                            <div className='slide-img '>

                            </div>
                            </div>
                            <div className='col-md-8 col-12'>
                                <div className='slide-content text-start mt-2'>
                                 <h6 className='mb-3'>Title 1</h6>
                                 <p>Hello, Here will be a text</p>
                         </div>
                         </div>
                        </div>
                        </div>
                    </div>
              </div>
            </div>
          <div className='mt-5'>
          <FontAwesomeIcon className='slider-icon me-5' icon={faAngleLeft} />
            <FontAwesomeIcon className='slider-icon' icon={faAngleRight} />
          </div>
        </div>
        </div>
    );
};

export default Slider;