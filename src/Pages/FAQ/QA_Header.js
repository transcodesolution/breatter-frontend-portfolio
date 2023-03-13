import React, { useState } from "react";
import {NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import qa_logo from '../../Assets/images/QA_pages/qa_logo.png';
import qa_profile from '../../Assets/images/QA_pages/qa_profile.png';

const QA_Header = () =>{

    const [active, setActive] = useState()
    const toggleClass = () =>{
        setActive(!active);
        document.documentElement.classList.toggle("cm_overflow");
    }

    const [active1, setActive1] = useState()
    const toggle_profile_dropdown = () =>{
        setActive(!active);
        document.documentElement.classList.toggle("profile_layer_open");
    }

    return(
        <div className="qa_header_block">
             <div className="header_wrapper">
                <div className={ `header_wrap ${(active ? 'menu_open' : '')}` }>
                    <Container>
                        <div className="header_block">
                            <div className="logo_block">
                                <NavLink to="/">
                                    <img src={qa_logo} alt="" />
                                </NavLink>
                            </div>
                            <div className="mobile_menu">
                                <div className="menu_wrap">
                                    <ul className="menu_block">
                                        <li><NavLink to="/SlotBookpage">Home</NavLink></li>
                                        <li><a href="#0" className="active">Q & A</a></li>
                                        <li><NavLink to="/Subscriptionpage">Subscription</NavLink></li>
                                    </ul>
                                </div>
                                <div className="comman_btn">
                                    <div className="qa_profile">
                                        <a href="#0"  onClick={toggle_profile_dropdown}>
                                            <img src={qa_profile} alt="qa_profile" />
                                            <span>Coli Den </span>
                                            <div className={ `qa_profile_dropdown ${(active1 ? 'menu_open' : '')}` }>
                                                <div className="qa_profile_dropdown_block">
                                                    <div className="qa_profile_dropdown_menu">
                                                        <div className="qa_profile_dropdown_item">
                                                            <a href="#0">
                                                                <span>
                                                                    <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.1025 11.7339C12.2633 11.7358 13.3985 11.3933 14.3646 10.7498C15.3307 10.1063 16.0841 9.19064 16.5297 8.11876C16.9752 7.04689 17.0927 5.86694 16.8674 4.72823C16.6421 3.58952 16.0841 2.54324 15.264 1.72177C14.4438 0.900309 13.3985 0.340587 12.2601 0.113435C11.1218 -0.113718 9.94166 0.00190927 8.86905 0.445684C7.79645 0.889459 6.87959 1.64144 6.2345 2.60646C5.58941 3.57148 5.24507 4.70618 5.24507 5.86696C5.24507 7.42132 5.86188 8.91216 6.96009 10.0122C8.0583 11.1122 9.54813 11.7314 11.1025 11.7339ZM11.1025 1.91749C11.8863 1.9156 12.6531 2.14643 13.3056 2.58073C13.9581 3.01502 14.467 3.63324 14.7678 4.35704C15.0687 5.08084 15.1479 5.87765 14.9954 6.64651C14.843 7.41537 14.4657 8.12168 13.9115 8.67593C13.3572 9.23018 12.6509 9.60743 11.8821 9.75989C11.1132 9.91234 10.3164 9.83313 9.59258 9.53231C8.86877 9.23148 8.25056 8.72256 7.81626 8.07005C7.38197 7.41753 7.15114 6.65078 7.15303 5.86696C7.15555 4.82027 7.57246 3.81717 8.31258 3.07704C9.05271 2.33692 10.0558 1.92001 11.1025 1.91749ZM21.9588 24.6317C20.814 27.5795 15.6053 28.6289 11.1025 28.6289C6.59972 28.6289 1.391 27.5795 0.246229 24.6317C-0.364317 23.0576 0.179451 20.7204 1.66766 18.5358C2.70286 16.9732 4.10272 15.686 5.74644 14.7852C7.39017 13.8844 9.22839 13.397 11.1025 13.3652C13.3143 13.4137 15.4669 14.0895 17.3095 15.3139C19.1521 16.5384 20.609 18.2612 21.5104 20.2816C21.5748 20.3973 21.6143 20.5251 21.6266 20.657C21.6388 20.7888 21.6235 20.9218 21.5816 21.0474C21.5396 21.173 21.472 21.2885 21.383 21.3865C21.294 21.4845 21.1856 21.563 21.0646 21.6168C20.9436 21.6707 20.8128 21.6987 20.6803 21.6992C20.5479 21.6997 20.4169 21.6727 20.2955 21.6198C20.1741 21.5668 20.0651 21.4892 19.9753 21.3919C19.8855 21.2945 19.817 21.1796 19.7742 21.0543C19.0099 19.3791 17.7933 17.9505 16.2613 16.9292C14.7293 15.9079 12.9427 15.3343 11.1025 15.2732C9.53974 15.3048 8.00821 15.7166 6.64028 16.4729C5.27234 17.2291 4.10916 18.3072 3.25126 19.6138C1.97293 21.474 1.71535 23.1626 2.02063 23.9448C2.65025 25.5571 6.46616 26.7209 11.1025 26.7209C15.7388 26.7209 19.5547 25.5571 20.1844 23.9448C20.2877 23.7274 20.4694 23.557 20.6931 23.4679C20.9168 23.3789 21.1659 23.3777 21.3904 23.4646C21.6149 23.5515 21.7983 23.7201 21.9037 23.9366C22.0091 24.153 22.0288 24.4013 21.9588 24.6317Z" fill="#000"/>
                                                                    </svg>
                                                                </span>
                                                                Profile
                                                            </a>
                                                        </div>
                                                        <div className="qa_profile_dropdown_item qa_profile_dropdown_item1">
                                                            <a href="#0">
                                                                <span>
                                                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M23.0001 14.0993H18.3466C16.6379 14.0982 15.253 12.7143 15.252 11.0057C15.252 9.29705 16.6379 7.91316 18.3466 7.91211H23.0001" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M18.8743 10.9351H18.5156" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.03213 1H16.9677C20.2991 1 22.9998 3.70074 22.9998 7.03213V15.2821C22.9998 18.6135 20.2991 21.3142 16.9677 21.3142H7.03213C3.70074 21.3142 1 18.6135 1 15.2821V7.03213C1 3.70074 3.70074 1 7.03213 1Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M6.21484 6.21643H12.4209" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>
                                                                </span>
                                                                Wallet
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="menu_toggle_btn" onClick={toggleClass}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default QA_Header;