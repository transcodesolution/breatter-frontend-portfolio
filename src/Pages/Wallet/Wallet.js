import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import { toast } from "react-toastify";
import { ApiGetUser, ApiPostUser } from "../../Helpers/Api/ApiData";
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wallet = () => {
    const amount = useRef(null)
    const withdraw = useRef(null)
    const user = useSelector((state) => state.user.profile)
    const currency = useSelector((state) => state.currency);
    console.log(user)
    const handleAddAmount = () => {
        console.log(amount.current.value)
        if (amount.current.value >= 100 && amount.current.value) {

            try {
                ApiPostUser('/wallet/balance/add', {
                    amount: amount.current.value/currency.rate,
                    value: {
                        currCode: currency.code,
                        value: amount.current.value
                    }
                }).then((response) => {
                    // console.log(response)
                    // toast.success("Money Added To Account")
                    // handleAddClose()
                    // amount.current.value=""
                    const res = response.data.data;
                    ApiGetUser(`/stripe/pay?orderId=${res._id}&userId=${user._id}`).then((response) => {

                        window.open(response?.data?.data, 'noreferrer')
                    })
                }).catch((err) => {
                    console.log(err)
                })
            } catch (error) {

            }
        } else {
            toast.error("Money Must Be Greater Then 100")
        }
    }

    const handleWithdrawRequest = () => {
        console.log((withdraw.current.value))
        if (withdraw.current.value <= 1000 && withdraw.current.value) {
            try {
                ApiPostUser('/wallet/withdraw/req', {
                    amount: withdraw.current.value
                }).then((response) => {
                    console.log(response)
                    toast.success("Money Requested Successfully")
                    handleClose()
                    withdraw.current.value = ""
                }).catch((err) => {
                    console.log(err)
                })
            } catch (error) {
                toast.error("Error Occure")
            }
        } else {
            toast.error("Amount Must be Less Then 1000")
        }
    }
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);
    const [questionBalancePop, setQuestionBalancePop] = useState(false)

    const handleAddShow = () => {
        setAdd(true)
    }

    const handleAddClose = () => {
        setAdd(false)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleQuestionClose = () => setQuestionBalancePop(false)
    const handleQuestionOprn = () => setQuestionBalancePop(true)
    return (<>
        <div className="wallet_wrapper">
            <div className="wallet_wrap">
                <Container>
                    <div className="wallet_block">
                        <div className="wallet_sec">
                            <div className="wallet_inner_block">
                                <h2>your wallet</h2>
                                <div className="wallet_inner_btn">
                                    <a href="#0">{user?.balance * currency.rate}{currency.symbol}</a>
                                </div>
                            </div>
                            <div className="wallet_amount">

                                <a href="#0" onClick={handleAddShow}>Add amount</a>
                            </div>
                            <div className="question_balance_btn">
                                <div className="question_balance_btn1">
                                    <a href="#0" onClick={handleQuestionOprn}>Question Balance</a>
                                </div>
                                <div className="question_balance_btn1">
                                    <a href="#0" onClick={handleShow} >Withdrawal</a>
                                </div>
                            </div>
                            <div className="wallet_transaction">
                                <Link to="/Historypage" > transaction history</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


        </div>
        <Modal show={show} onHide={handleClose} centered className='wallet_popup'>
            <Modal.Body>
                <div className=''>
                    <div className='wallet_popup_title'>
                        <h3>Withdrawal</h3>
                    </div>
                    <div className='wallet_popup_sec'>
                        {/* <h2>Your wallet :-$25846</h2> */}
                        <h2>Make Withdraw Request</h2>
                        <label className='wallet_popup_label'>
                            <input type="number" placeholder={currency.symbol} ref={withdraw} />
                            <p>Max {currency.symbol} 1000 can withdraw</p>
                            {/* <span>complete KYC to increse withdrawal limit to   $1,00,000</span> */}
                        </label>
                    </div>
                    <div className='wallet_popup_btn'>
                        <a href='#0' onClick={handleWithdrawRequest}>Withdraw</a>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        <Modal show={add} onHide={handleAddClose} centered className='wallet_popup'>
            <Modal.Body>
                <div className=''>
                    <div className='wallet_popup_title'>
                        <h3>Add Balance</h3>
                    </div>
                    <div className='wallet_popup_sec'>
                        <h2>Enter Amount</h2>
                        <label className='wallet_popup_label'>
                            <input type="number" placeholder={currency.symbol} ref={amount} />
                            {/* <p style={{ margin: '12px' }}> Min $100 Require To Add</p> */}
                            {/* <span>complete KYC to increse withdrawal limit to ₹1,00,000</span> */}
                        </label>
                    </div>
                    <div className='wallet_popup_btn'>
                        <a href='#0' onClick={handleAddAmount}> Add Amount</a>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        <Modal show={questionBalancePop} onHide={handleQuestionClose} centered className='wallet_popup'>
            <Modal.Body>
                <div className=''>
                    <div className='wallet_popup_title'>
                        <h3>Question Balance</h3>
                    </div>
                    <div className='wallet_popup_sec'>

                        <label className='wallet_popup_label'>
                            <input type="number" readOnly defaultValue={user?.questionBalance} />

                        </label>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    </>
    )
}

export default Wallet;