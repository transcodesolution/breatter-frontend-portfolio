import React from "react";

import Header from './Header';
import Banner from './Banner';
import Chatexport from './Chatexport';
import Blog from './Blog';
import Loremipsum from './Loremipsum';
import Education from './Education';
import Learnterms from './Learnterms';
import Questions from './Questions';
import Solutions from './Solutions';
import Students from './Students';
import Testimonials from './Testimonials';
import Footer from './Footer';


function Homepages() {
    return(
      <div className='main_wrapper'>
        <Header />
        <Banner />
        <Solutions />
        <Education />
        <Questions />
        <Learnterms />
        <Students />
        <Chatexport />
        <Loremipsum />
        <Blog />
        <Testimonials /> 
        <Loremipsum />      
        <Footer />       
      </div>
    )
}

export default Homepages;