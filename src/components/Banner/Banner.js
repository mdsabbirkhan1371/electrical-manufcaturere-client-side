import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/for carosel/img1.jpg'
import img2 from '../../images/for carosel/img2.jpg'
import img3 from '../../images/for carosel/img3.jpg'
import img4 from '../../images/tools&parts/CompanyProfile_UniversalHero_171220.jpg'
import Button from 'react-bootstrap/Button';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                    <Carousel.Caption className='py-5'>
                        <h3>Wire Manufacturing</h3>
                        <p>We have developed the process optimization technology that can be applied to the production preparation processes for factories outside of Japan. In order to shorten the lead time of the production preparation for oversea factories, manufacturing companies focus on two points: First, measuring process data such as the temperature of a part after being heated for a hot forging process is focused</p>
                        <Button variant="success">Enquire Now</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='py-5'>
                        <h3>Adjusted Video Cable && Wire Manufacturing </h3>
                        <p>We have developed the process optimization technology that can be applied to the production preparation processes for factories outside of Japan. In order to shorten the lead time of the production preparation for oversea factories, manufacturing companies focus on two points: First, measuring process data such as the temperature of a part after being heated for a hot forging process is focused</p>
                        <Button variant="success">Enquire Now</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='py-5'>
                        <h3>Electronics && Electrical Manufacturing</h3>
                        <p>
                            We have developed the process optimization technology that can be applied to the production preparation processes for factories outside of Japan. In order to shorten the lead time of the production preparation for oversea factories, manufacturing companies focus on two points: First, measuring process data such as the temperature of a part after being heated for a hot forging process is focused
                        </p>
                        <Button variant="success">Enquire Now</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;