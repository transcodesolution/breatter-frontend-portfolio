import React from "react";

import footer_logo from '../../Assets/images/footer_logo.png';


import f_icon from '../../Assets/images/f_icon.svg';
import t_icon from '../../Assets/images/t_icon.svg';
import i_icon from '../../Assets/images/i_icon.svg';
import g_icon from '../../Assets/images/g_icon.svg';
import in_icon from '../../Assets/images/in_icon.svg';
import p_icon from '../../Assets/images/p_icon.svg';

const QA_Footer = () =>{
    return(
        <div className="qa_footer_wrapper">
            <div className="footer_wrapper">
                <div className="footer_wrap">
                    <div className="footer_sec">
                        <div className="footer_block">
                            <ul className="footer_item"> 
                                <li>
                                    <div className="footer_logo">
                                        <a href="#0">
                                            <img src={footer_logo} alt="logo" />
                                        </a>
                                        <p>
                                            a social questions & Answers <br />
                                            Engine which will help you <br />
                                            establis your community and <br />
                                            connect with other people
                                        </p>
                                    </div>
                                </li>
                                <li>
                                <div className="footer_menu_block">
                                    <h3 className="footer_title">service</h3>
                                        <ul className="footer_menu">
                                            <li><a href="#0">Home</a></li>
                                            <li><a href="#0">About Us</a></li>
                                            <li><a href="#0">Service</a></li>
                                            <li><a href="#0">Blog</a></li>
                                            <li><a href="#0">Contact us</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer_menu_block">
                                        <h3 className="footer_title">Useful Links</h3>
                                        <ul className="footer_menu">
                                            <li><a href="#0">Question & Answer </a></li>
                                            <li><a href="#0">Solutions</a></li>
                                            <li><a href="#0">Service</a></li>
                                            <li><a href="#0">Terms & Condition</a></li>
                                            <li><a href="#0">FAQs</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer_conte">
                                        <h3 className="footer_title">Our Newsletter</h3>
                                        <p>Stay up to date with news and promotions <br /> by signing up for our newsletter</p>
                                        <label for="email" className="footer_label">
                                            <input id="email" type="email" placeholder="Your Mail" />
                                            <a href="#0" className="email_send"> <span>
                                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.6895 1H2.6562C2.37948 1 2.12896 1.11193 1.94761 1.29289C1.76628 1.47386 1.65411 1.72386 1.65411 2V14C1.65411 14.5523 2.10277 15 2.6562 15H18.6895C19.243 15 19.6916 14.5523 19.6916 14V2C19.6916 1.72386 19.5795 1.47386 19.3981 1.29289C19.2167 1.11193 18.9662 1 18.6895 1Z" stroke="#49BEB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M1.94739 1.29297L9.25549 8.58582C10.0381 9.36692 11.3072 9.36692 12.0898 8.58582L19.3979 1.29297" stroke="#49BEB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span> Send</a>
                                        </label>
                                        <ul>
                                            <li><a href="#0">
                                                <img src={f_icon} alt="icon" />
                                            </a></li>
                                            <li><a href="#0">
                                                <img src={t_icon} alt="icon" />
                                            </a></li>
                                            <li><a href="#0">
                                                <img src={i_icon} alt="icon" />
                                            </a></li>
                                            <li><a href="#0">
                                                <img src={g_icon} alt="icon" />
                                            </a></li>
                                            <li><a href="#0">
                                                <img src={in_icon} alt="icon" />
                                            </a></li>
                                            <li><a href="#0">
                                                <img src={p_icon} alt="icon" />
                                            </a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QA_Footer;