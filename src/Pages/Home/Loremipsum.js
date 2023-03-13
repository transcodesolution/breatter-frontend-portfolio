import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import loremipsum from '../../Assets/images/loremipsum.png';

const Loremipsum = () => {

    var blog = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(
        <div className="testimonials_wrapper blog_wrapper">
            <div className="testimonials_wrap">
                    <div className="testimonials_block">
                        <div className="testimonials_slider">
                            <div className="testimonials_sec">
                                <Slider {...blog}>
                                    <div>
                                        <div className="loremipsum_img">
                                            <img src={loremipsum} alt="blog_img" /> 
                                        </div>
                                    </div>
                                    <div>
                                        <div className="loremipsum_img">
                                            <img src={loremipsum} alt="blog_img" /> 
                                        </div>
                                    </div>
                                    <div>
                                        <div className="loremipsum_img">
                                            <img src={loremipsum} alt="blog_img" /> 
                                        </div>
                                    </div>
                                    <div>
                                        <div className="loremipsum_img">
                                            <img src={loremipsum} alt="blog_img" /> 
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Loremipsum;