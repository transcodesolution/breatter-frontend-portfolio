import React from "react";

import QA_Header from "../Profile/QA_Header";
import QA_Banner from "../Profile/QA_Banner";
import Profile from "../Profile/Profile";
import QA_Footer from "../Profile/QA_Footer";


const Profilepage = () => {


  return (
    <div className="profilepage">
      {/* <QA_Header /> */}
      <QA_Banner />
      <Profile />
      {/* <QA_Footer /> */}
    </div>
  );
};

export default Profilepage;
