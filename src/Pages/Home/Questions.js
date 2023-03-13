import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import questions_img1 from '../../Assets/images/questions_img1.png'
import questions_img2 from '../../Assets/images/questions_img2.png'
import questions_img3 from '../../Assets/images/questions_img3.png'
import questions_img4 from '../../Assets/images/questions_img4.png'
import questions_img5 from '../../Assets/images/questions_img5.png'
import questions_img6 from '../../Assets/images/questions_img6.png'

const Questions = () =>{

    var questions = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [
            {
              breakpoint: 1360,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                }
              },
          ]
      };

    return(
        <div className="questions_wrapper">
            <div className="questions_wrap">
                <div className="questions_block">
                    <div className="cm_title">
                        <h3>Browse Subject Questions</h3>
                    </div>
                    <div className="questions_sec">
                        <div className="questions_slider">
                            <Slider {...questions}>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img1} alt="questions_img" />
                                            </div>
                                            <h4>Maths</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img2} alt="questions_img" />
                                            </div>
                                            <h4>Physics</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img3} alt="questions_img" />
                                            </div>
                                            <h4>Chemistry</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img4} alt="questions_img" />
                                            </div>
                                            <h4>Biology</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img5} alt="questions_img" />
                                            </div>
                                            <h4>Science</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img6} alt="questions_img" />
                                            </div>
                                            <h4>GK</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img1} alt="questions_img" />
                                            </div>
                                            <h4>Maths</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img2} alt="questions_img" />
                                            </div>
                                            <h4>Physics</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="questions_item">
                                        <div className="questions_slider_block">
                                            <div className="questions_img">
                                                <img src={questions_img3} alt="questions_img" />
                                            </div>
                                            <h4>Chemistry</h4>
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

export default Questions;