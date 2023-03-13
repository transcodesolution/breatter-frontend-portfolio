import React from "react";
import Loginpages from "../Pages/Login/Loginpage";
import Signuppage from "../Pages/Signup/Signuppage";
import { Route, redirect, Navigate, Routes } from "react-router-dom";
import Homepages from "../Pages/Home/Homepages";
import QuestionPage1 from "../Pages/Questionpage1/QuestionPage1";

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<Homepages />} />
      <Route path="/Loginpage" element={<Loginpages />} />
      <Route path="/Signuppage" element={<Signuppage />} />
      <Route path="/QuestionPage1" element={<QuestionPage1 />} />
      <Route path="*" element={<Navigate replace to="/Loginpage" />} />
    </Routes>
  );
}

export default PublicRoute;
