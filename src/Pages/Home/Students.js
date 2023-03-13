import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Students = () =>{

    var student = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                }
              },
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
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
      };

    return(
        <div className="student_wrapper">
            <div className="student_wrap">
                <div className="student_block">
                    <div className="cm_title cm_title2">
                        <h3>What our students are saying</h3>
                    </div>
                    <div className="student_slider">
                        <div className="student_sec">
                            <Slider {...student}>
                                <div>
                                    <div className="student_slider_block">
                                        <div className="student_box">
                                            <p>
                                                You guys are absolutely 
                                                amazing. Every question 
                                                that I needed help with, 
                                                you guys helped me 
                                                tremendously.
                                            </p>
                                            <h4>Lamonica H.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="student_slider_block">
                                        <div className="student_box">
                                            <p>
                                                You guys are absolutely 
                                                amazing. Every question 
                                                that I needed help with, 
                                                you guys helped me 
                                                tremendously.
                                            </p>
                                            <h4>Lamonica H.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="student_slider_block">
                                        <div className="student_box">
                                            <p>
                                                You guys are absolutely 
                                                amazing. Every question 
                                                that I needed help with, 
                                                you guys helped me 
                                                tremendously.
                                            </p>
                                            <h4>Lamonica H.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="student_slider_block">
                                        <div className="student_box">
                                            <p>
                                                You guys are absolutely 
                                                amazing. Every question 
                                                that I needed help with, 
                                                you guys helped me 
                                                tremendously.
                                            </p>
                                            <h4>Lamonica H.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="student_slider_block">
                                        <div className="student_box">
                                            <p>
                                                You guys are absolutely 
                                                amazing. Every question 
                                                that I needed help with, 
                                                you guys helped me 
                                                tremendously.
                                            </p>
                                            <h4>Lamonica H.</h4>
                                        </div>
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

export default Students;
