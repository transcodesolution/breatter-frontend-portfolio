import React, { useState } from "react";
import Container from 'react-bootstrap/Container';

import logo from '../../Assets/images/logo.png';

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qa_profile from '../../Assets/images/QA_pages/qa_profile.png';
import { setLogout } from "../../Store/Reducers/Authreducer/auth";
import { ApiGet, ApiPost, ApiPostUser } from "../../Helpers/Api/ApiData";
import { toast } from "react-toastify";

import user_popup from '../../Assets/images/user_popup.png';

import Modal from "react-bootstrap/Modal";
import moment from "moment";


const Header = () => {

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [notifications, setNotifications] = useState([])

    const user = useSelector((state) => state.user.profile);
    const token = useSelector((state) => state.auth.token);
    const [hide, setHide] = useState(false)
    const [active1, setActive1] = useState()
    const [active, setActive] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [fix, setFix] = useState()

    const setFixed = () => {
        if (window.scrollY >= 300) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    const toggleClass1 = () => {
        setActive1(!active1);
    }
    window.addEventListener("scroll", setFixed)

    const toggleClass = () => {
        setActive(!active);
        document.documentElement.classList.toggle("cm_overflow");
    }
    const toggle_profile_dropdown = () => {
        setActive(!active);
        document.documentElement.classList.toggle("profile_layer_open");
    }
    const handleLogOut = () => {
        let deviceToken = localStorage.getItem("deviceToken")
        dispatch(setLogout())
        navigate('/')
        ApiPostUser('/auth/logout', {
            "deviceToken": deviceToken
        }).then(() => toast.success("You Logged Out"))
    }

    const getAllnotifications=()=>{
            ApiGet('/notification').then((response)=>{
                setNotifications(response?.data?.data)
            })
    }

    return (
        <div>
            <div className="top_header_block" style={{ display: `${hide ? 'none' : ''}` }}>
                <p>Get Answers for All YourAcademic Questions</p>
                <span onClick={() => setHide(true)} style={{ cursor: 'pointer' }}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4846 11.3391L22.4096 2.4283C22.6763 2.16153 22.8262 1.79972 22.8262 1.42246C22.8262 1.0452 22.6763 0.683394 22.4096 0.41663C22.1428 0.149866 21.781 0 21.4037 0C21.0265 0 20.6647 0.149866 20.3979 0.41663L11.4871 9.34163L2.57622 0.41663C2.30946 0.149866 1.94765 3.34949e-07 1.57039 3.3776e-07C1.19313 3.4057e-07 0.831319 0.149866 0.564555 0.41663C0.297792 0.683394 0.147926 1.0452 0.147926 1.42246C0.147926 1.79972 0.297792 2.16153 0.564555 2.4283L9.48956 11.3391L0.564555 20.25C0.431773 20.3817 0.326382 20.5383 0.25446 20.711C0.182537 20.8836 0.145508 21.0688 0.145508 21.2558C0.145508 21.4428 0.182537 21.628 0.25446 21.8006C0.326382 21.9732 0.431773 22.1299 0.564555 22.2616C0.696253 22.3944 0.852938 22.4998 1.02557 22.5717C1.19821 22.6437 1.38337 22.6807 1.57039 22.6807C1.75741 22.6807 1.94257 22.6437 2.11521 22.5717C2.28784 22.4998 2.44452 22.3944 2.57622 22.2616L11.4871 13.3366L20.3979 22.2616C20.5296 22.3944 20.6863 22.4998 20.8589 22.5717C21.0315 22.6437 21.2167 22.6807 21.4037 22.6807C21.5907 22.6807 21.7759 22.6437 21.9485 22.5717C22.1212 22.4998 22.2779 22.3944 22.4096 22.2616C22.5423 22.1299 22.6477 21.9732 22.7197 21.8006C22.7916 21.628 22.8286 21.4428 22.8286 21.2558C22.8286 21.0688 22.7916 20.8836 22.7197 20.711C22.6477 20.5383 22.5423 20.3817 22.4096 20.25L13.4846 11.3391Z" fill="#FF001D" />
                    </svg>
                </span>
            </div>
            <div className={`header_wrapper ${(fix ? 'sticky' : '')}`} style={{ zoom: '125%' }}>

                <div className={`header_wrap ${(active ? 'menu_open' : '')}`}>
                    <Container>
                        <div className="header_block">
                            <div className="logo_block">
                                <NavLink to="/">
                                    <img src={logo} alt="" />
                                </NavLink>
                            </div>
                            <div className="mobile_menu">
                                <div className="menu_wrap">
                                  <ul className="menu_block">
                                        <li><NavLink to='/'>Home </NavLink></li>
                                        <li><NavLink to='/QuestionAnswer'>Upload Question </NavLink></li>
                                        <li><NavLink to="/QuestionPage1">Q & A</NavLink></li>
                                        <li><NavLink to="/faq">FAQ</NavLink></li>
                                     {token &&   <li><a href="#0">
                                            <div className={`notifaction_open ${(active1 ? 'notifaction' : '')}`}>
                                                <div className="home_notifaction_icon" onClick={handleShow1}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.172-.939-2.122-2.097-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-6.728 12.055h-1.882c1.245-2.741.879-9.012 3.873-10.655-1.761 2.067-.95 7.504-1.991 10.655zm3.591-13c-.552 0-1-.448-1-1 0-.551.448-1 1-1s1 .449 1 1c0 .552-.448 1-1 1zm-3 18h6c0 1.598-1.393 3-2.971 3-1.579 0-3.029-1.402-3.029-3z"></path></svg>
                                                </div>
                                            </div>
                                        </a></li>}
                                        {/* <li><a onClick={handleLogOut}>Log Out</a></li> */}
                                    </ul>
                                </div>
                                <div className="comman_btn">
                                    <div className="qa_profile">


                                        {!token ? <NavLink to="/Loginpage">Login</NavLink> : <>   <div className="comman_btn">
                                            <div className="qa_profile">
                                                <a href="#0" onClick={toggle_profile_dropdown}>
                                                    {user?.profilePhoto ? <img src={user?.profilePhoto} className="profilePhoto" alt="qa_profile" /> : <> <div className="headerlogo">{user?.firstName && user?.firstName?.substring(0, 1)}</div></>}

                                                    <span>{user?.firstName?.substring(0, 15)}  </span>
                                                </a>
                                            </div>
                                        </div></>}
                                        <div className={`qa_profile_dropdown ${(active1 ? 'menu_open' : '')}`}>
                                            <div className="qa_profile_dropdown_block">
                                                <div className="qa_profile_dropdown_menu">
                                                    <div className="qa_profile_dropdown_item">
                                                        <Link to='/profile'>
                                                            <span>
                                                                <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.1025 11.7339C12.2633 11.7358 13.3985 11.3933 14.3646 10.7498C15.3307 10.1063 16.0841 9.19064 16.5297 8.11876C16.9752 7.04689 17.0927 5.86694 16.8674 4.72823C16.6421 3.58952 16.0841 2.54324 15.264 1.72177C14.4438 0.900309 13.3985 0.340587 12.2601 0.113435C11.1218 -0.113718 9.94166 0.00190927 8.86905 0.445684C7.79645 0.889459 6.87959 1.64144 6.2345 2.60646C5.58941 3.57148 5.24507 4.70618 5.24507 5.86696C5.24507 7.42132 5.86188 8.91216 6.96009 10.0122C8.0583 11.1122 9.54813 11.7314 11.1025 11.7339ZM11.1025 1.91749C11.8863 1.9156 12.6531 2.14643 13.3056 2.58073C13.9581 3.01502 14.467 3.63324 14.7678 4.35704C15.0687 5.08084 15.1479 5.87765 14.9954 6.64651C14.843 7.41537 14.4657 8.12168 13.9115 8.67593C13.3572 9.23018 12.6509 9.60743 11.8821 9.75989C11.1132 9.91234 10.3164 9.83313 9.59258 9.53231C8.86877 9.23148 8.25056 8.72256 7.81626 8.07005C7.38197 7.41753 7.15114 6.65078 7.15303 5.86696C7.15555 4.82027 7.57246 3.81717 8.31258 3.07704C9.05271 2.33692 10.0558 1.92001 11.1025 1.91749ZM21.9588 24.6317C20.814 27.5795 15.6053 28.6289 11.1025 28.6289C6.59972 28.6289 1.391 27.5795 0.246229 24.6317C-0.364317 23.0576 0.179451 20.7204 1.66766 18.5358C2.70286 16.9732 4.10272 15.686 5.74644 14.7852C7.39017 13.8844 9.22839 13.397 11.1025 13.3652C13.3143 13.4137 15.4669 14.0895 17.3095 15.3139C19.1521 16.5384 20.609 18.2612 21.5104 20.2816C21.5748 20.3973 21.6143 20.5251 21.6266 20.657C21.6388 20.7888 21.6235 20.9218 21.5816 21.0474C21.5396 21.173 21.472 21.2885 21.383 21.3865C21.294 21.4845 21.1856 21.563 21.0646 21.6168C20.9436 21.6707 20.8128 21.6987 20.6803 21.6992C20.5479 21.6997 20.4169 21.6727 20.2955 21.6198C20.1741 21.5668 20.0651 21.4892 19.9753 21.3919C19.8855 21.2945 19.817 21.1796 19.7742 21.0543C19.0099 19.3791 17.7933 17.9505 16.2613 16.9292C14.7293 15.9079 12.9427 15.3343 11.1025 15.2732C9.53974 15.3048 8.00821 15.7166 6.64028 16.4729C5.27234 17.2291 4.10916 18.3072 3.25126 19.6138C1.97293 21.474 1.71535 23.1626 2.02063 23.9448C2.65025 25.5571 6.46616 26.7209 11.1025 26.7209C15.7388 26.7209 19.5547 25.5571 20.1844 23.9448C20.2877 23.7274 20.4694 23.557 20.6931 23.4679C20.9168 23.3789 21.1659 23.3777 21.3904 23.4646C21.6149 23.5515 21.7983 23.7201 21.9037 23.9366C22.0091 24.153 22.0288 24.4013 21.9588 24.6317Z" fill="#000" />
                                                                </svg>
                                                            </span>
                                                            Profile
                                                        </Link>
                                                    </div>
                                                    <div className="qa_profile_dropdown_item qa_profile_dropdown_item1">
                                                        <Link to="/wallet">
                                                            <span>
                                                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M23.0001 14.0993H18.3466C16.6379 14.0982 15.253 12.7143 15.252 11.0057C15.252 9.29705 16.6379 7.91316 18.3466 7.91211H23.0001" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M18.8743 10.9351H18.5156" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.03213 1H16.9677C20.2991 1 22.9998 3.70074 22.9998 7.03213V15.2821C22.9998 18.6135 20.2991 21.3142 16.9677 21.3142H7.03213C3.70074 21.3142 1 18.6135 1 15.2821V7.03213C1 3.70074 3.70074 1 7.03213 1Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M6.21484 6.21643H12.4209" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            Wallet
                                                        </Link>
                                                    </div>
                                                    <div className="qa_profile_dropdown_item qa_profile_dropdown_item1" onClick={handleLogOut}>
                                                        <Link to="/wallet">
                                                            <span style={{ marginRight: '12px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                                </svg>
                                                            </span>
                                                            LogOut
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="menu_toggle_btn" onClick={toggleClass}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </Container>
                </div>
                <Modal
                show={show1}
                className="user_popup manager_popup home_page_popup"
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="user_popup_block">
                    <div className="home_page_popup_wrap">
                        <ul className="home_page_popup_sec">
                       {notifications.length==0 &&     <div style={{height:'500px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                No New Notifications
                            </div>}
                            {
                                notifications?.map((singleData)=>{
                                    return      <li>
                                    <div className="home_page_popup_block">
                                        <div className="home_page_popup_img">
                                            <img src={user_popup} alt="user_popup" />
                                        </div>
                                        <div className="home_page_popup_conte">
                                            <div>
                                                <div className="home_page_popup_title">
                                                    <h3>{singleData?.title}</h3>
                                                    <span>
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="home_page_popup_title1">
                                                    <p>{singleData?.description}</p>
                                                </div>
                                                <div className="home_page_popup_title2">
                                                    <p>{moment(singleData?.createdAt).format('dddd')}</p>
                                                    <p>{moment(singleData?.createdAt).format('MM/DD/YYYY')}</p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                })
                            }
                            {/* <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title1">
                                                <p>this is looking great! let’s get started on it.</p>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title1">
                                                <p>this is looking great! let’s get started on it.</p>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title1">
                                                <p>this is looking great! let’s get started on it.</p>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="home_page_popup_block">
                                    <div className="home_page_popup_img">
                                        <img src={user_popup} alt="user_popup" />
                                    </div>
                                    <div className="home_page_popup_conte">
                                        <div>
                                            <div className="home_page_popup_title">
                                                <h3>abc commented on your post</h3>
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8.5" r="8" fill="#444982"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="home_page_popup_title2">
                                                <p>friday 2.20pm</p>
                                                <p>sep 20,2004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
            </div>
        </div>
    )
}



export default Header;