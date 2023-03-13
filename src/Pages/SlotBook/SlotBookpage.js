import React from "react";

import QA_Header from '../SlotBook/QA_Header';
import QA_Banner from '../SlotBook/QA_Banner';
import SelectSlot from '../SlotBook/SelectSlot';
import QA_Footer from '../SlotBook/QA_Footer';

const SlotBookpage = () => {
    return(
        <div className="slot_book_page">
            {/* <QA_Header /> */}
            <QA_Banner />
            <SelectSlot />
            {/* <QA_Footer /> */}
        </div> 
    )
}

export default SlotBookpage;