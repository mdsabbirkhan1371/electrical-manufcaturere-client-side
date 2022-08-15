import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (

        <div className='container '>
            <p className='text-center fs-3 my-5'>Contact Us</p>
            <div class="row ps-5">
                <div class="col-md-7">
                    <p className='fs-5'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Our Office Address</p>
                    <p>Dhaka,Kallanpur-1210,road#5 house#22</p>

                    <p className='fs-5'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> General Enquires</p>
                    <p>mdsabbirkhan1971@gmail.com</p>

                    <p className='fs-5'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Call Us</p>
                    <p>+8801625645510</p>

                    <p className='fs-5'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Our Timing</p>
                    <p>Mon-Sun : 10:00 AM -07:00 PM</p>
                </div>
                <div class="col-md-5">
                    <input className=' w-75 my-2 p-2' type="text" name="" id="" placeholder='Your Name' /><br />
                    <input className=' w-75 mb-2 p-2' type="text" name="" id="" placeholder='Your Email' /><br />
                    <input className=' w-75 mb-2 p-2' type="text" name="" id="" placeholder='Your Number' /><br />
                    <textarea name="message" className='w-75 p-2' placeholder='Write Your Message'></textarea>
                    <br />

                    <input className='text-white rounded-pill p-2 fs-4  w-75 bg-success' type="submit" name="" id="" />
                </div>
            </div>
        </div>

    );
};

export default ContactUs;