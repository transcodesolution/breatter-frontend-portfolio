import React from "react";

import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

import solutions_img1 from '../../Assets/images/solutions_img1.png'
import solutions_img2 from '../../Assets/images/solutions_img2.png'
import solutions_img3 from '../../Assets/images/solutions_img3.png'

const Solutions = () => {

    return (
        <div className="solutions_wrapper">
            <div className="solutions_wrap">
                <Container>
                    <div className="solutions_block">
                        <div className="cm_title">
                            <h3>homework help solutions</h3>
                        </div>
                        <div className="solutions_sec">
                            <ul className="solutions_box">
                                <li>
                                    <div className="solutions_item ">
                                    <Link to='/QuestionPage1' >     <div className="solutions_img solutions_img1">
                                             <img src={solutions_img1} alt='solutions' /> 
                                        </div>
                                        <h3>  Answer Library  </h3> </Link>
                                        <p>A vast collection of questions comprising of different subjects across a period of time organized under suitable categories with expert answers which are reviewed and supervised to meet your best needs. This section is designed to meet your requirements should you be stuck in a problem.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="solutions_item">
                                    <Link to='/QuestionAnswer' >   <div className="solutions_img solutions_img2">
                                            <img src={solutions_img2} alt='solutions' />
                                        </div>
                                        <h3>Post Question</h3> </Link>
                                    <p>Do you have an question that needs to be answered? Do you want an answer that is both correct and precise? Then this is the place for you as we have the best of subject experts who will answer your question according to your needs!
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="solutions_item">
                                <Link to='/ChatUspage' >        <div className="solutions_img">
                                        <img src={solutions_img3} alt='solutions' />
                                    </div>
                                    <h3>Video Lessons</h3> </Link>
                                    <p>An hour long live interactive video session with our chosen best experts dedicated entirely to you for all your queries,doubts and even exams! This is the most sought way to ace in a subject or understand a fundamental concept clearly.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </Container>
            </div >
        </div >
    )
}

export default Solutions;