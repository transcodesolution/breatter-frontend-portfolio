import React from "react";

import Container from 'react-bootstrap/Container';

const QA_Banner = () =>{
    return(
        <div className="qa_banner_wrapper">
            <div className="qa_banner_wrap">
               <Container>
                    <div className="qa_banner_block">
                        <div className="qa_banner_title">
                            <h2>Profile</h2>
                        </div>  
                    </div>
               </Container>
            </div>
        </div>
    )
}

export default QA_Banner;