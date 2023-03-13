import React from "react";

import QA_Header from '../FAQ/QA_Header';
import QA_Banner from '../FAQ/QA_Banner';
import Faq from '../FAQ/Faq';
import QA_Footer from '../FAQ/QA_Footer';


const Faqpage = () =>{  
    return(
        <div className="faq_page">
            <QA_Header />
            <QA_Banner />
            <Faq />
            <QA_Footer />
        </div>
    )
}

export default Faqpage;