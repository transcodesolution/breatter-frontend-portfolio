import React from "react";

import Container from 'react-bootstrap/Container';

const Summary = () =>{
    return(
        <div className="summary_wrapper">
            <div className="summary_wrap">
                <Container>
                    <div className="summary_block">
                        <div className="summary_sec">
                            <div className="summary_title">
                                <h3>order summary</h3>
                            </div>
                            <div className="summary_slot">
                                <p>chat slot</p>
                                <div className="summary_video_slot">
                                    <span>video chat</span>
                                    <h4>$750</h4>
                                </div>
                            </div>
                            <div className="summary_total">
                                <span>total     :</span>
                                <p>$750</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Summary;