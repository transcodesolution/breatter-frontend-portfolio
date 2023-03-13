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
                                        <li><a href="#0">Home</a></li>
                                        <li><a href="#0" className="active">Q & A</a></li>
                                        <li><a href="#0">Subscription</a></li>
                                    </ul>
                                </div>
                                <div className="comman_btn">
                                    <div className="qa_profile">
                                        <a href="#0">
                                            <img src={qa_profile} alt="qa_profile" />
                                            <span>Coli Den </span>
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