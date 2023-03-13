import React from "react";

import QA_Header from '../Wallet/QA_Header';
import QA_Banner from '../Wallet/QA_Banner';
import Wallet from '../Wallet/Wallet';
import QA_Footer from '../Wallet/QA_Footer';

const Walletpage = () =>{
    return(
        <div className="wallet_page">
            {/* <QA_Header /> */}
            <QA_Banner />
            <Wallet />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default Walletpage;