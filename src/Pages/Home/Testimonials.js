import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from 'react-bootstrap/Container';

import testimonials_img1 from '../../Assets/images/testimonials_img1.png';
import testimonials_img2 from '../../Assets/images/testimonials_img2.png';
import testimonials_img3 from '../../Assets/images/testimonials_img3.png';
import testimonials_img4 from '../../Assets/images/testimonials_img4.png';

const Testimonials = () => {

    var testimonials = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
    
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
      };

    return(
        <div className="testimonials_wrapper">
            <div className="testimonials_wrap">
                <Container>
                    <div className="testimonials_block">
                        <div className="cm_title cm_title2">
                            <h3>Testimonials</h3>
                        </div>
                        <div className="testimonials_slider">
                            <div className="testimonials_sec">
                                <Slider {...testimonials}>
                                    <div>
                                        <div className="testimonials_img">
                                            <img src={testimonials_img1} alt="testimonials_img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonials_img">
                                            <img src={testimonials_img2} alt="testimonials_img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonials_img">
                                            <img src={testimonials_img3} alt="testimonials_img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonials_img">
                                            <img src={testimonials_img4} alt="testimonials_img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonials_img">
                                            <img src={testimonials_img3} alt="testimonials_img" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Testimonials;