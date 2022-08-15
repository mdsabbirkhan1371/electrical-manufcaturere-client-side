import React from 'react';
import aboutImg from '../../images/tools&parts/aboutus.webp'
const AboutUs = () => {
    return (
        <div className='row align-items-center'>
            <div className="col-md-6 py-5">
                <img src={aboutImg} alt="" />
            </div>
            <div className="col-md-6 px-5">
                <p className='fs-3'>About Us</p>
                <p>Schweitzer Engineering Laboratories (SEL) is an electrical/electronic manufacturing company headquartered in the Pullman, WA area, that employs 1001 to 5000 people. The company has its best ratings for maternity and adoptive leave (3.7 stars) and wellness initiatives (3.6 stars).

                    Here’s what one woman writes about working for Schweitzer Engineering Laboratories (SEL):</p>
            </div>
        </div>
    );
};

export default AboutUs;