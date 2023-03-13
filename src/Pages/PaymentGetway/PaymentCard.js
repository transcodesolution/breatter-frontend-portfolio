import React from "react";
import Container from 'react-bootstrap/Container';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import payment_img from '../../Assets/images/payment_img.png';

const PaymentCard = () =>{
    return(
        <div className="payment_card_wrapper">
            <div className="payment_card_wrap">
                <Container>
                    <div className="my_questions_block">
                        <div className="my_questions_sec">
                            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                <Tab eventKey="home" title="Card">
                                    <div className="my_questions_tab_sec">
                                        <div className="payment_tab_block">
                                            <from>
                                                <div className="payment_tab_input">
                                                    <ul>
                                                        <li>
                                                            <label className="payment_tab_label">
                                                                <p>first name</p>
                                                                <input type="text" />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="payment_tab_label">
                                                                <p>last name</p>
                                                                <input type="text" />
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="payment_card_box_block">
                                                    <div className="payment_card_box">
                                                        <div className="payment_card_img">
                                                            <img src={payment_img} alt="payment_img" />
                                                        </div>
                                                        <div className="payment_card_number">
                                                            <label>
                                                                <p>card number</p>
                                                                <input type="text" placeholder="0000 0000 0000" />
                                                            </label>
                                                        </div>
                                                        <div className="payment_card_cvv">
                                                            <div className="payment_card_month">
                                                                <div className="payment_card_year">
                                                                    <p>month and year</p>
                                                                    <div>
                                                                        <span>00</span>
                                                                        <span>/</span>
                                                                        <span>00</span>
                                                                    </div>
                                                                </div>
                                                                <div className="payment_cvv_block">
                                                                    <p>CVV code</p>
                                                                    <div>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notify_check">
                                                    <div className="login_check">
                                                        <input type="checkbox" id="login_check1" />
                                                        <label for="login_check1">Notify Me</label>
                                                    </div>
                                                </div>
                                                <div className="payment_card_btn">
                                                    <a href="#0">pay</a>
                                                </div>
                                            </from>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="home2" title="Net Banking">
                                    <div className="my_questions_tab_sec u_questions_tab_sec">
                                        lorem text
                                    </div>
                                </Tab>
                                <Tab eventKey="home3" title="UPI">
                                    <div className="my_questions_tab_sec u_questions_tab_sec">
                                         lorem text
                                    </div>
                                </Tab>
                                <Tab eventKey="home4" title="PayPal">
                                    <div className="my_questions_tab_sec u_questions_tab_sec">
                                        lorem text
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PaymentCard;