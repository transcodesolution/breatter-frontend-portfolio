import React from "react";

import QA_Header from '../History/QA_Header';
import QA_Banner from '../History/QA_Banner';
import History from '../History/History';
import QA_Footer from '../History/QA_Footer';

const Historypage = () =>{
    return(
        <div className="historypage"> 
            {/* <QA_Header /> */}
            <QA_Banner />
            <History />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default Historypage;