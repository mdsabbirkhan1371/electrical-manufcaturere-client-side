import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' py-5'>
            <footer className='text-center bg-dark p-5'>
                <div className="row">
                    <div className="col-md-3">
                        <h4>Our Partners</h4>
                    </div>
                    <div className="col-md-3 fs-4">

                        <h4>Useful Links</h4>
                        <Link to='/home'>Home</Link> <br />
                        <Link to='/contact'>Contact Us</Link> <br />
                        <Link to='/about'>About Us</Link> <br />
                        <Link to='/blogs'>Blogs</Link> <br />

                        <Link to='/to0ls'>Tools&Parts</Link>
                        <br />
                        <Link to='/business'>Business Summary</Link>

                    </div>
                    <div className="col-md-3">
                        <h4>Social Media</h4>

                        <div className='d-flex justify-content-center fs-3 text-white'>
                            <a href="https://twitter.com/"><p className='ms-2'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></p></a>
                            <a href="https://www.facebook.com/"><p className='ms-2'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></p></a>
                            <a href="https://www.linkedin.com/"><p className='ms-2'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></p></a>
                            <a href="https://www.instagram.com/"><p className='ms-2'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></p></a>
                        </div>
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