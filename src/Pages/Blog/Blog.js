import React from "react";

import Container from 'react-bootstrap/Container';

import blog_img from '../../Assets/images/blog_img.png';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { ApiGetUser } from "../../Helpers/Api/ApiData";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
const Blog = () => {
    const [currentBlog, setcurrentBlog] = useState()
    const [discription, setdiscription] = useState()
    var blog = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const { id } = useParams()


    const getSingleBlog = () => {
        ApiGetUser(`/blog/${id}`).then((response) => {setcurrentBlog(response?.data?.data)
        setdiscription(response?.data?.data.description.substr(0,600))
        }).catch((err) => toast.error(err.message))
    }

    useEffect(() => {
        getSingleBlog()
    }, [])
console.log(currentBlog)
    return (
        <div className="blog_page_wrapper">
            <Container>
                <div className="blog_page_wrap">
                    <div className="blog_page_block">
                        <div className="blog_page_img">
                            <Slider {...blog}>
                                {   
                                    currentBlog?.images?.map((image)=>{
                                        return   <div>
                                        <div className="testimonials_img">
                                            <img src={image} alt="blog_img" />
                                        </div>
                                    </div>
                                    })
                                }
                                                         
                            </Slider>
                        </div>
                        <div className="blog_page_sec">
                            <h3>{currentBlog?.title}</h3>
                            <h4>
                                <span>
                                    <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5625 10.3161C19.3867 10.3161 15.1875 14.5153 15.1875 19.6911C15.1875 24.8669 19.3867 29.0661 24.5625 29.0661C29.7383 29.0661 33.9375 24.8669 33.9375 19.6911C33.9375 14.5153 29.7383 10.3161 24.5625 10.3161ZM24.5625 24.3786C21.9258 24.3786 19.875 22.3278 19.875 19.6911C19.875 17.152 21.9258 15.0036 24.5625 15.0036C27.1016 15.0036 29.25 17.152 29.25 19.6911C29.25 22.3278 27.1016 24.3786 24.5625 24.3786ZM24.5625 0.941086C11.1836 0.941086 0.34375 11.7809 0.34375 25.1598C0.34375 38.5387 11.1836 49.3786 24.5625 49.3786C37.9414 49.3786 48.7812 38.5387 48.7812 25.1598C48.7812 11.7809 37.9414 0.941086 24.5625 0.941086ZM24.5625 44.6911C19.6797 44.6911 15.1875 42.9333 11.7695 40.0036C13.2344 37.7575 15.7734 36.195 18.6055 36.195C20.6562 36.7809 22.6094 37.0739 24.5625 37.0739C26.418 37.0739 28.3711 36.7809 30.4219 36.195C33.2539 36.2926 35.793 37.7575 37.2578 40.0036C33.8398 42.9333 29.3477 44.6911 24.5625 44.6911ZM40.3828 36.488C38.0391 33.4606 34.3281 31.4098 30.1289 31.4098C29.1523 31.4098 27.5898 32.3864 24.5625 32.3864C21.4375 32.3864 19.875 31.4098 18.8984 31.4098C14.6992 31.4098 10.9883 33.4606 8.64453 36.488C6.30078 33.363 5.03125 29.4567 5.03125 25.1598C5.03125 14.4176 13.7227 5.62859 24.5625 5.62859C35.3047 5.62859 44.0938 14.4176 44.0938 25.1598C44.0938 29.4567 42.7266 33.363 40.3828 36.488Z" fill="#696969" />
                                    </svg>
                                </span>
                               {currentBlog?.author}
                            </h4>
                          <p>{discription}</p> <br/> {discription?.length!= currentBlog?.description?.length && <span className="read_more" style={{cursor:'pointer'}} hide onClick={()=>setdiscription(currentBlog.description)}>Read More</span>}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Blog;