import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from 'react-bootstrap/Container';

import { Link, NavLink } from "react-router-dom";

import blog_img1 from '../../Assets/images/blog_img1.png';
import blog_img2 from '../../Assets/images/blog_img2.png';
import blog_img3 from '../../Assets/images/blog_img3.png';
import { ApiGetNoAuth, ApiGetUser, ApiPost } from "../../Helpers/Api/ApiData";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {

const [blogs, setBlogs] = useState([])
    var blog = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
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


    const getAllBlog =()=>{
        ApiGetNoAuth('/user/blog/all').then((response)=>{
            console.log(response,'blogs ')
            setBlogs(response.data.data)
        })
    }

    useEffect(() => {
        getAllBlog()
    }, [])


    return (
        <div className="testimonials_wrapper blog_wrapper">
            <div className="testimonials_wrap">
                <Container>
                    <div className="testimonials_block">
                        <div className="cm_title cm_title2">
                            <h3>Blog</h3>
                        </div>
                        <div className="testimonials_slider">
                            <div className="testimonials_sec">
                                <Slider {...blog}>
                                    {
                                        blogs?.map((singleBlog)=>{
                                            return    <div>
                                            <div className="blog_wrap">
                                                <div className="blog_img">
                                                    <img src={singleBlog.images[0]} height={225} alt="blog_img" />
                                                </div>
                                                <div className="blog_block">
                                                    <p> <span>
                                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.97656 4.50781C6.59635 3.88802 7.34896 3.57812 8.23438 3.57812C9.11979 3.57812 9.8724 3.88802 10.4922 4.50781C11.112 5.1276 11.4219 5.88021 11.4219 6.76562C11.4219 7.65104 11.112 8.40365 10.4922 9.02344C9.8724 9.64323 9.11979 9.95312 8.23438 9.95312C7.34896 9.95312 6.59635 9.64323 5.97656 9.02344C5.35677 8.40365 5.04688 7.65104 5.04688 6.76562C5.04688 5.88021 5.35677 5.1276 5.97656 4.50781ZM7.10547 7.89453C7.41536 8.20443 7.79167 8.35938 8.23438 8.35938C8.67708 8.35938 9.05339 8.20443 9.36328 7.89453C9.67318 7.58464 9.82812 7.20833 9.82812 6.76562C9.82812 6.32292 9.67318 5.94661 9.36328 5.63672C9.05339 5.32682 8.67708 5.17188 8.23438 5.17188C7.79167 5.17188 7.41536 5.32682 7.10547 5.63672C6.79557 5.94661 6.64062 6.32292 6.64062 6.76562C6.64062 7.20833 6.79557 7.58464 7.10547 7.89453ZM2.39062 2.81445C4.00651 1.19857 5.95443 0.390625 8.23438 0.390625C10.5143 0.390625 12.4512 1.19857 14.0449 2.81445C15.6608 4.4082 16.4688 6.34505 16.4688 8.625C16.4688 10.9049 15.6608 12.8529 14.0449 14.4688C12.4512 16.0625 10.5143 16.8594 8.23438 16.8594C5.95443 16.8594 4.00651 16.0625 2.39062 14.4688C0.796875 12.8529 0 10.9049 0 8.625C0 6.34505 0.796875 4.4082 2.39062 2.81445ZM3.91797 13.6719C5.15755 14.7344 6.59635 15.2656 8.23438 15.2656C9.8724 15.2656 11.3112 14.7344 12.5508 13.6719C12.0195 12.8307 11.2448 12.388 10.2266 12.3438C9.5625 12.5651 8.89844 12.6758 8.23438 12.6758C7.59245 12.6758 6.92839 12.5651 6.24219 12.3438C5.24609 12.3659 4.47135 12.8086 3.91797 13.6719ZM13.6465 12.4766C14.4655 11.3255 14.875 10.0417 14.875 8.625C14.875 6.78776 14.222 5.22721 12.916 3.94336C11.6322 2.63737 10.0716 1.98438 8.23438 1.98438C6.39714 1.98438 4.82552 2.63737 3.51953 3.94336C2.23568 5.22721 1.59375 6.78776 1.59375 8.625C1.59375 10.0417 2.00326 11.3255 2.82227 12.4766C3.72982 11.3255 4.89193 10.75 6.30859 10.75C6.375 10.75 6.60742 10.8053 7.00586 10.916C7.42643 11.0267 7.83594 11.082 8.23438 11.082C8.63281 11.082 9.03125 11.0267 9.42969 10.916C9.85026 10.8053 10.0938 10.75 10.1602 10.75C11.5768 10.75 12.7389 11.3255 13.6465 12.4766Z" fill="#696969" />
                                                        </svg>
                                                    </span> {singleBlog.author}</p>
                                                    <h3 style={{wordWrap:'break-word'}}>{singleBlog.title.substr(0,100)}</h3>
                                                    <div className="blog_btn">
                                                        <Link to={`/blog/${singleBlog._id}`}>read more
                                                            <span>
                                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.79297 1.32617L6.37695 0.767578C6.49544 0.649089 6.63932 0.589844 6.80859 0.589844C6.97786 0.589844 7.12174 0.649089 7.24023 0.767578L12.166 5.69336C12.2845 5.81185 12.3438 5.95573 12.3438 6.125C12.3438 6.29427 12.2845 6.43815 12.166 6.55664L7.24023 11.4824C7.12174 11.6009 6.97786 11.6602 6.80859 11.6602C6.63932 11.6602 6.49544 11.6009 6.37695 11.4824L5.79297 10.9238C5.67448 10.8053 5.61523 10.6615 5.61523 10.4922C5.63216 10.3229 5.69987 10.179 5.81836 10.0605L8.86523 7.14062H1.57812C1.40885 7.14062 1.26497 7.08138 1.14648 6.96289C1.02799 6.8444 0.96875 6.70052 0.96875 6.53125V5.71875C0.96875 5.54948 1.02799 5.4056 1.14648 5.28711C1.26497 5.16862 1.40885 5.10938 1.57812 5.10938H8.86523L5.81836 2.18945C5.69987 2.07096 5.63216 1.92708 5.61523 1.75781C5.61523 1.58854 5.67448 1.44466 5.79297 1.32617Z" fill="#696969" />
                                                                </svg>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        })
                                    }
                                  
                                    
                                </Slider>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Blog;