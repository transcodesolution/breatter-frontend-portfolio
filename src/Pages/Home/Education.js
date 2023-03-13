import React from "react";

import Container from 'react-bootstrap/Container';

import education_img from '../../Assets/images/education_img.png';

const Education = () => {
    return (
        <div className="education_wrapper">
            <Container>
                <div className="education_wrap">
                    <div className="education_block">
                        <div className="education_sec">
                            <div className="education_img">
                                <img src={education_img} alt="education" />
                            </div>
                        </div>
                        <div className="education_sec">
                            <div className="education_cont">
                                <div className="education_title">
                                    <h3>Instant Answer</h3>
                                </div>
                                <p>An hour long live chat with one of our subject experts to guide you on your doubts and queries. Instant answers within 2 minutes for your questions which can be set both via text and photo both. The session can be renewed for another hour depending on requirements. This is the best mode for those who are in urgent need of an expert
                                </p>
                                <p>
                                    Do you have an academic question? When the earth spins,
                                    why don’t we spin? How does light travel? Such questions
                                    and more are answered on this online discussion platform.
                                    You will find education experts coming forward to answer
                                    your academic questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education;