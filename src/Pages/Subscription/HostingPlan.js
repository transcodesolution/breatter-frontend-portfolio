import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { ApiGetUser, ApiPostUser } from "../../Helpers/Api/ApiData";
import Modal from 'react-bootstrap/Modal';
import { toggleUpdate } from "../../Store/Reducers/Userreducer/user";



const HostingPlan = () => {

    const [subscriptions, setSubscriptions] = useState([])
    const [selectedSpecial, setSelectedSpecial] = useState({})
    const [showSpecial, setShowSpecial] = useState(false)
    const [show, setShow] = useState(false);

    const user = useSelector((state) => state.user.profile);
    const currency = useSelector((state) => state.currency);
    const [selectedPlan, setSelectedPlan] = useState({})
    const dispatch = useDispatch()



    const handleClose = () => {
        setShow(false)
        setSelectedPlan({})
    };
    const handleShow = () => {
        setShow(true)

    };
    const handleCloseSpecial = () => {
        setShowSpecial(false)
        setSelectedSpecial({})
    };

    const handleShowSpecial = () => {
        setShowSpecial(true)
    };

    const getAllSubscriptoin = () => {
        try {
            ApiGetUser('/subscription').then((response) => {
                console.log(response, "Sub")
                let res = response.data.data;
                setSubscriptions(res)
            })
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleGetPlane = (where) => {
        try {
            ApiPostUser('/subscription/buy', {
                "subscriptionId": selectedPlan._id,
                "isFromWallet": where,
                "value": {
                    currCode: currency.code,
                    value: selectedPlan.price * currency?.rate
                }
            }).then((response) => {
                if (response.status == '200') {
                    let res = response.data.data
                    !where && ApiGetUser(`/stripe/pay?orderId=${res._id}&userId=${user._id}`).then((response) => {
                        console.log(response)
                        window.open(response?.data?.data, '_blank', 'noreferrer')
                    })
                    if (where) {
                        toast.dark(response.data.message)
                    }
                    dispatch(toggleUpdate())
                } else if (response.status == '204') {
                    toast.error("Already Have Subscription")
                } else {
                    toast.error(response.data.message)
                }


            })
            handleClose()
        } catch (error) {
            toast.error(error.message)
        }

    }
    const handleSpecialPlane = (where) => {
        try {
            ApiPostUser('/subscription/special/buy', {
                "subscriptionId": selectedSpecial._id,
                "isFromWallet": where
            }).then((response) => {
                console.log(response)
                if (response.status == '200') {
                    let res = response.data.data;
                    !where && ApiGetUser(`/stripe/pay?orderId=${res._id}&userId=${user._id}`).then((response) => {
                        console.log(response)
                        window.open(response?.data?.data, '_blank', 'noreferrer')
                    })
                    if (where) {
                        toast.success(response.data.message)
                    }
                } else if(response.status==204) {
                    toast.error('Please First Buy Regural Plan')
                }else{
                    toast.error(response.data.message)
                }

            })
        } catch (error) {
            toast.error(error.message)
        }
        handleCloseSpecial()

    }
    var hostingplan = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    useEffect(() => {
        getAllSubscriptoin()
    }, [])

    return (
        <>
            <div className="hostingplan_wrapper">
                <div className="hostingplan_wrap">
                    <Container>
                        <div className="hostingplan_block">
                            <div className="hostingplan_title">
                                <h3>Choose Regural  Hosting plan</h3>
                            </div>
                            <div className="hosting_block">
                                <div className="">
                                    <Slider {...hostingplan}>
                                        {
                                            subscriptions?.filter((singleSub) => singleSub.type == '0')?.map((singleData) => {
                                                return <div className="hosting_sec">
                                                    <div>
                                                        <div className="hosting_box">
                                                            <div className="hosting_plan_box">
                                                                <p>Startup Plan</p>
                                                                <div>
                                                                    <h4>{currency?.symbol}{singleData.price * currency?.rate}</h4>
                                                                    <span>per month</span>
                                                                </div>
                                                            </div>
                                                            <div className="hosting_plan">
                                                                <ul className="hosting_plan_name">
                                                                    <li>{singleData.noOfQuestion} Questions</li>
                                                                    <li>{singleData.month} Months</li>
                                                                    <li>{singleData?.feature1}</li>
                                                                    <li>{singleData?.feature2}</li>
                                                                    <li>{singleData?.feature3}</li>
                                                                    <li>{singleData?.feature4}</li>

                                                                </ul>
                                                            </div>
                                                            <div className="hosting_btn">
                                                                <a href="#0" onClick={() => {
                                                                    handleShow()
                                                                    setSelectedPlan(singleData)
                                                                }}>Get plan</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }


                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className="hostingplan_block" style={{ marginTop: '5em' }}>
                            <div className="hostingplan_title">
                                <h3>Choose Special Subscription</h3>
                            </div>
                            <div className="hosting_block">
                                <div className="">
                                    <Slider {...hostingplan}>
                                        {
                                            subscriptions?.filter((singleSub) => singleSub.type == '1')?.map((singleData) => {
                                                return <div className="hosting_sec">
                                                    <div>
                                                        <div className="hosting_box">
                                                            <div className="hosting_plan_box">
                                                                <p>Startup Plan</p>
                                                                <div>
                                                                    <h4>{currency?.symbol}{singleData.price * currency?.rate}</h4>
                                                                    <span>per month</span>
                                                                </div>
                                                            </div>
                                                            <div className="hosting_plan">
                                                                <ul className="hosting_plan_name">
                                                                    <li>{singleData.noOfQuestion} Questions</li>
                                                                    <li>{singleData?.feature1}</li>
                                                                    <li>{singleData?.feature2}</li>
                                                                    <li>{singleData?.feature3}</li>
                                                                    <li>{singleData?.feature4}</li>

                                                                </ul>
                                                            </div>
                                                            <div className="hosting_btn">
                                                                <a href="#0" onClick={() => {
                                                                    handleShowSpecial()
                                                                    setSelectedSpecial(singleData)
                                                                }}>Get plan</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }


                                    </Slider>
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
                            <h3>Choose From Where Money Diduct?</h3>
                        </div>

                        <div className="hosting_btn">
                            <a href="#0" onClick={() => handleGetPlane(true)}>Wallet</a>
                        </div>
                        <div className="hosting_btn">
                            <a href="#0" onClick={() => handleGetPlane(false)}>Bank</a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showSpecial} onHide={handleCloseSpecial} centered className='wallet_popup'>
                <Modal.Body>
                    <div className=''>
                        <div className='wallet_popup_title'>
                            <h3>Choose From Where Money Diduct?</h3>
                        </div>

                        <div className="hosting_btn">
                            <a href="#0" onClick={() => handleSpecialPlane(true)}>Wallet</a>
                        </div>
                        <div className="hosting_btn">
                            <a href="#0" onClick={() => handleSpecialPlane(false)}>Bank</a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default HostingPlan; 