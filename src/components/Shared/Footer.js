import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center bg-dark p-5'>
                <div className="row">
                    <div className="col-md-3">
                        <h4>Our Partners</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Useful Links</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Tools&Parts</p>
                        <p>Contact</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Tools&Parts</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact Us</h4>
                        <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Our Office Address</p>
                        <p>Dhaka,Kallanpur-1210,road#5 house#22</p>

                        <p ><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> General Enquires</p>
                        <p>mdsabbirkhan1971@gmail.com</p>

                        <p S><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Call Us</p>
                        <p>+8801625645510</p>

                    </div>
                </div>

                <p>
                    <small>Copywrite © {year} &All Rights Reserved By-Md.Sabbir Khan</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;