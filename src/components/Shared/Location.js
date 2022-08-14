import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import './Location.css'

const Location = () => {
    return (
        <div className='p-3 location'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <p className='ms-3 '><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Malad West</p>
                    <p className='ms-3'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></p>
                    <p className='ms-3'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></p>
                    <p className='ms-3'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></p>
                    <p className='ms-3'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></p>
                </div>

                <div className='d-flex'>
                    <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +8801625645510</p>
                    <p className='ms-2'><FontAwesomeIcon icon={faEnvelope} />  mdsabbirkhan1971@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Location;