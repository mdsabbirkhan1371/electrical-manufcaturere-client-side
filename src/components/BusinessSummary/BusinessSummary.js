import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faListAlt, faUser, faMessage } from '@fortawesome/free-regular-svg-icons';

const BusinessSummary = () => {
    return (
        <div className=' p-5 business-summary'>
            <div className='mb-5 text-center'>
                <h2 className='text-info fs-1'>MILLIONS BUSINESS TRUST US</h2>
                <p>TRY TO UNDERSTAND USER EXPECTATION</p>
            </div>

            <div className="row text-center">
                <div className="col-md-3 ">
                    <FontAwesomeIcon className='fs-1 my-4 text-info' icon={faFlag}></FontAwesomeIcon>
                    <h1>72</h1>
                    <p className='text-info'>Countries</p>
                </div>
                <div className="col-md-3">
                    <FontAwesomeIcon className='fs-1 my-4 text-info' icon={faListAlt}></FontAwesomeIcon>
                    <h1>535+</h1>
                    <p className='text-info'>Complete Projects</p>
                </div>
                <div className="col-md-3">
                    <div className='fs-1 my-4 text-info'>
                        <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                        <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                        <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                    </div>
                    <h1>273+</h1>
                    <p className='text-info'>Happy Clients</p>
                </div>
                <div className="col-md-3">
                    <FontAwesomeIcon className='fs-1 my-4 text-info' icon={faMessage}></FontAwesomeIcon>
                    <h1>432+</h1>
                    <p className='text-info'>Feedbacks</p>
                </div>
            </div>

            <div className='row bg-dark rounded  p-4'>
                <div className="col-md-8 ">
                    <h3 className='text-info fs-2'>Have Any question about us to get a product request? </h3>
                    <p>Don't hesitate To Contact us</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <button className='btn btn-info mb-2'>Request For Quote</button>
                    <button className='btn btn-success mx-3'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;