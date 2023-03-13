import React from "react";
import { Route, redirect, Navigate, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import Blogpage from "../Pages/Blog/Blogpage";
import Chat from "../Pages/Chat/Chat";
import ChatUspage from "../Pages/ChatUs/ChatUspage";
import Faq from "../Pages/FAQ/Faq";
import Historypage from "../Pages/History/Historypage";
import Homepages from "../Pages/Home/Homepages";
import PaymentGetwaypage from "../Pages/PaymentGetway/PaymentGetwaypage";
import Profilepage from "../Pages/Profile/Profilepage";

import QuestionAnswer from "../Pages/QuestionAnswer/QuestionAnswer";
import QuestionPage1 from "../Pages/Questionpage1/QuestionPage1";
import SlotBookpage from "../Pages/SlotBook/SlotBookpage";
import Subscriptionpage from "../Pages/Subscription/Subscriptionpage";
import Walletpage from "../Pages/Wallet/Walletpage";

function PrivateRoute() {
  return (
    <>
      <Routes>
        <Route element={<Layout hideHeaderPaths={["/home"]} />}>
          <Route path="/home" element={<Homepages />} />
          <Route path="/QuestionAnswer" element={<QuestionAnswer />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/SlotBookpage" element={<SlotBookpage />} />
          <Route path="/Subscriptionpage" element={<Subscriptionpage />} />
          <Route path="/PaymentGetwaypage" element={<PaymentGetwaypage />} />
          <Route path="/Historypage" element={<Historypage />} />
          <Route path="/QuestionPage1" element={<QuestionPage1 />} />
          <Route path="/blog/:id" element={< Blogpage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/wallet" element={<Walletpage />} />
          <Route path="/ChatUspage" element={<ChatUspage />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Route>
      </Routes>
    </>
  );
}

export default PrivateRoute;
