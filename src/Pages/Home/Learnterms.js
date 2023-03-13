import React from "react";

import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Learnterms = () =>{
    const token = useSelector((state) => state.auth.token);
    return(
        <>
         <div className="learnterms_wrap" style={{marginTop:'80px'}}>
                <div className="learnterms_wrapper">
                <Container>
                    <div className="learnterms_block">
                        <div className="learnterms_sec">
                            <h3>Learn on your terms</h3>
                            <p>Choose the subscription that fits the support you need, cancel anytime.</p>
                            <div className="learnterms_btn">
                                <Link to="/SignupPage">Sign Up</Link>
                            </div>
                        </div>  
                    </div>
                </Container>
            </div>
        </div>
            
        </>
    )
}

export default Learnterms;