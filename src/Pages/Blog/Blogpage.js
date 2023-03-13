import React from "react";

import QA_Header from './QA_Header';
import QA_Banner from './QA_Banner';
import Blog from './Blog';
import QA_Footer from './QA_Footer';

const Blogpage = () =>{
    return(
        <div className="blog_page">
            {/* <QA_Header /> */}
            <QA_Banner />
            <Blog />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default Blogpage;