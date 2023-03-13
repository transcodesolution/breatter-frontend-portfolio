import React from "react";

import Container from 'react-bootstrap/Container';

import chat_export_img from '../../Assets/images/chat_export_img.png'

const Chatexport = () =>{
    return(
        <div className="chatexport_wrapper">
            <div className="chatexport_wrap">
                <Container>
                    <div className="chatexport_block">
                        <div className="chatexport_sec">
                            <div className="chatexport_conte">
                                <div className="education_title"><h3>chat with export</h3></div>
                                <p>
                                    Do you have an academic question? When the earth spins, 
                                    why don’t we spin? How does light travel? Such questions 
                                    and more are answered on this online discussion platform. 
                                    You will find education experts coming forward to answer 
                                    your academic questions.
                                </p>
                                <p>
                                    Do you have an academic question? When the earth spins, 
                                    why don’t we spin? How does light travel? Such questions 
                                    and more are answered on this online discussion platform. 
                                    You will find education experts coming forward to answer 
                                    your academic questions.
                                </p>
                                <a href="#0">read more..</a>
                            </div>
                        </div>
                        <div className="chatexport_img">
                            <div className="chatexport_img_block">
                                <img src={chat_export_img} alt="chat_export_img" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Chatexport;