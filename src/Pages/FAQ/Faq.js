import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Accordion from '../FAQ/Accordion';

import faq_s_icon from '../../Assets/images/faq_s_icon.png';
import faq_sm_icon from '../../Assets/images/faq_sm_icon.png';
import { ApiPostUser } from "../../Helpers/Api/ApiData";
import { toast } from "react-toastify";

const Faq = () => {

    const [data, setData] = useState([]);

    const getAllFaq = (search) => {
        let body = {};

        if (search) {
            body.search = search
        }
        try {
            ApiPostUser("/faq", body).then((response) => {
                console.log("faq", response?.data?.data)
                setData(response?.data?.data)
            });
        } catch (error) { toast.error(error.message) }
    }

    const handleSearch = (e) => {
        getAllFaq(e.target.value)
    }

    useEffect(() => {
        getAllFaq()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="faq_wrapper">
            <Container>
                <div className="faq_wrap">
                    <div className="faq_title">
                        <h2>FAQ</h2>
                    </div>
                    <div className="faq_search_block">
                        <label>
                            <img src={faq_s_icon} />
                            <input type="text" onChange={handleSearch} placeholder="Search For any related question" />
                        </label>
                    </div>
                    <div className="faq_block">
                        <div className="faq_sec">
                            <Accordion data={data} />
                        </div>
                    </div>
                    <div className="franchise_block">
                    <a href="mailto:shubhamsutariya21k@gmail.com" style={{display:'flex'}}>

                        <img src={faq_sm_icon} />
                        <p>Let’s dive into direct mail for your franchise</p>
                    </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Faq;