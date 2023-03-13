import React from "react";

import QA_Header from '../Subscription/QA_Header';
import QA_Banner from '../Subscription/QA_Banner';
import HostingPlan from '../Subscription/HostingPlan';
import QA_Footer from '../Subscription/QA_Footer';

const Subscriptionpage = () => {
    return(
        <div className="subscription_page">
            {/* <QA_Header /> */}
            <QA_Banner />
            <HostingPlan />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default Subscriptionpage;