import moment from "moment/moment";
import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ApiGetUser, ApiPostUser } from "../../Helpers/Api/ApiData";

const History = () => {

    const [active, setActive] = useState(false)
    const [date, setDate] = useState('')
    const [filter, setFilter] = useState(0)
        const currency = useSelector((state) => state.currency);
    const toggleClass = () => {
        setActive(!active);
    }
    const [history, setHistory] = useState([])


    const getAllHistoryWallet = () => {
        try {
            ApiPostUser('/wallet/history', {
                "dateFilter": {
                    "type": date,
                }
            }).then((response) => {
                let res = response.data.data;
                setHistory(res)
                setActive(false)
            })
        } catch (error) {
            toast.error(error.message)
        }
    }
    const getHistoryByFilter = () => {
        try {
            ApiPostUser('/order/history ', {
                "orderFilter": filter,
                "dateFilter": {
                    "type": date,
                }
            }).then((response) => {
                let res = response.data.data;
                setHistory(res)
                setActive(false)
            })
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        filter != 0 && getHistoryByFilter()
    }, [date, filter])

    useEffect(() => {
        filter == 0 && getAllHistoryWallet()
    }, [date])


    return (
        <>
            <div className={`history_wrapper ${(active ? 'history_popup_open' : '')}`}>
                <div className="history_wrap">
                    <Container>
                        <div className="history_block">
                            <div className="history_sec">
                                <div className="history_year">
                                    <ul>
                                        <li>
                                            <a href="#0" className={`${date == 'today' && 'active'}`} onClick={() => {
                                                setDate((data) => {
                                                    return data == 'today' ? '' : 'today'
                                                })
                                            }}>today</a>
                                        </li>
                                        <li>
                                            <a href="#0" className={`${date == 'month' && 'active'}`} onClick={() => {
                                                setDate((data) => {
                                                    return data == 'month' ? '' : 'month'
                                                })
                                            }}>monthly</a>
                                        </li>
                                        <li>
                                            <a href="#0" className={`${date == 'year' && 'active'}`} onClick={() => {
                                                setDate((data) => {
                                                    return data == 'year' ? '' : 'year'
                                                })
                                            }}>yearly</a>
                                        </li>
                                        <li>
                                            <div className="history_popup">
                                                <div className="history_popup_btn">
                                                    <span onClick={toggleClass}>
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17 0.5H3C2.20435 0.5 1.44129 0.816071 0.87868 1.37868C0.316071 1.94129 1.80878e-07 2.70435 1.80878e-07 3.5V4.67C-0.000143207 5.08294 0.0849664 5.49147 0.25 5.87V5.93C0.39128 6.25097 0.591392 6.54266 0.84 6.79L7 12.91V19.5C6.99966 19.6699 7.04264 19.8372 7.12487 19.9859C7.20711 20.1346 7.32589 20.2599 7.47 20.35C7.62914 20.4486 7.81277 20.5006 8 20.5C8.15654 20.4991 8.31068 20.4614 8.45 20.39L12.45 18.39C12.6149 18.3069 12.7536 18.1798 12.8507 18.0227C12.9478 17.8656 12.9994 17.6847 13 17.5V12.91L19.12 6.79C19.3686 6.54266 19.5687 6.25097 19.71 5.93V5.87C19.8888 5.49443 19.9876 5.08578 20 4.67V3.5C20 2.70435 19.6839 1.94129 19.1213 1.37868C18.5587 0.816071 17.7956 0.5 17 0.5ZM11.29 11.79C11.1973 11.8834 11.124 11.9943 11.0742 12.1161C11.0245 12.2379 10.9992 12.3684 11 12.5V16.88L9 17.88V12.5C9.00076 12.3684 8.97554 12.2379 8.92577 12.1161C8.87601 11.9943 8.80268 11.8834 8.71 11.79L3.41 6.5H16.59L11.29 11.79ZM18 4.5H2V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H17C17.2652 2.5 17.5196 2.60536 17.7071 2.79289C17.8946 2.98043 18 3.23478 18 3.5V4.5Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="history_popup_block">
                                                    <ul>
                                                        <li onClick={() => {
                                                            getAllHistoryWallet()
                                                            setFilter(0)
                                                        }} key="1" ><a href="#0" style={{ color: `${filter == 0 ? 'rgb(146 210 207)' : ''}` }}>Wallet</a></li>
                                                        <li key="2"><a href="#0" style={{ color: `${filter == 1 ? 'rgb(146 210 207)' : ''}` }} onClick={() => {
                                                            setFilter(1)
                                                        }}>Chat</a></li>
                                                        <li key="3"><a href="#0" style={{ color: `${filter == 2 ? 'rgb(146 210 207)' : ''}` }} onClick={() => {
                                                            setFilter(2)
                                                        }}>Video</a></li>
                                                        <li key="4"><a href="#0" style={{ color: `${filter == 3 ? 'rgb(146 210 207)' : ''}` }} onClick={() => {
                                                            setFilter(3)
                                                        }}>Subscription</a></li>
                                                        <li key="5"><a href="#0" style={{ color: `${filter == 4 ? 'rgb(146 210 207)' : ''}` }} onClick={() => {
                                                            setFilter(4)
                                                        }}>Special Sub</a></li>


                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="history_list_block">
                                    <ul className="history_list">

                                        {
                                            history?.map((singleData) => {
                                                return <li>

                                                    <div className="history_item">
                                                        <h5>{moment(singleData?.createdAt).format('DD/MM/YYYY')}</h5>
                                                        <p>

                                                            {
                                                                singleData?.type == 0 ? 'Money Add To Wallet' : singleData?.type == 1 ? 'Chat' : singleData?.type == 2 ? 'Video' : singleData?.type == 3 ? 'Regular Subscription' : 'Special Subscription'
                                                            }
                                                        </p>
                                                        <h3 style={{ color: `${singleData?.type == 0 ? 'green' : 'red'}` }}>{currency.symbol}{  singleData?.amount}</h3>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
           
        </>

    )
}

export default History;