import React from "react";

import QA_Header from '../PaymentGetway/QA_Header';
import QA_Banner from '../PaymentGetway/QA_Banner';
import Summary from '../PaymentGetway/Summary';
import PaymentCard from '../PaymentGetway/PaymentCard';
import QA_Footer from '../PaymentGetway/QA_Footer';

const PaymentGetwaypage = () =>{
    return(
        <div>
             {/* <QA_Header /> */}
            <QA_Banner />
            <Summary />
            <PaymentCard />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default PaymentGetwaypage;