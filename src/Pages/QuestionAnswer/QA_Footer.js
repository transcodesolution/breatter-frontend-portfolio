import React from "react";

import {NavLink } from "react-router-dom";

import footer_logo from '../../Assets/images/footer_logo.png';



const QA_Footer = () =>{
    return(
        <div className="footer_wrapper"  style={{zoom:'125%'}}>
            <div className="footer_wrap">
                <div className="footer_sec">
                    <div className="footer_block">
                        <ul className="footer_item"> 
                            <li>
                                <div className="footer_logo">
                                    <a href="#0">
                                        <img src={footer_logo} alt="logo" />
                                    </a>
                                    <p>
                                        a social questions & Answers <br />
                                        Engine which will help you <br />
                                        establis your community and <br />
                                        connect with other people
                                    </p>
                                </div>
                            </li>
                            <li>
                            <div className="footer_menu_block">
                                <h3 className="footer_title">service</h3>
                                    <ul className="footer_menu">
                                        <li><a href="#0">Home</a></li>
                                        <li><a href="#0">About Us</a></li>
                                        <li><NavLink to="/ChatUspage">Service</NavLink></li>
                                        <li><NavLink to="/Faqpage">Blog</NavLink></li>
                                        <li><NavLink to="/faq">Contact us</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="footer_menu_block">
                                    <h3 className="footer_title">Useful Links</h3>
                                    <ul className="footer_menu">
                                        <li><a href="#0">Question & Answer </a></li>
                                        <li><a href="#0">Solutions</a></li>
                                        <li><NavLink to="/Walletpage">Service</NavLink></li>
                                        <li><NavLink to="/Historypage">Terms & Condition</NavLink></li>
                                        <li><NavLink to="/QuestionPage1">FAQs</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="footer_conte">
                                    <h3 className="footer_title">Our Newsletter</h3>
                                    <p>Stay up to date with news and promotions <br /> by signing up for our newsletter</p>
                                    <label for="email" className="footer_label">
                                        <input id="email" type="email" placeholder="Your Mail" />
                                        <a href="#0" className="email_send"> <span>
                                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6895 1H2.6562C2.37948 1 2.12896 1.11193 1.94761 1.29289C1.76628 1.47386 1.65411 1.72386 1.65411 2V14C1.65411 14.5523 2.10277 15 2.6562 15H18.6895C19.243 15 19.6916 14.5523 19.6916 14V2C19.6916 1.72386 19.5795 1.47386 19.3981 1.29289C19.2167 1.11193 18.9662 1 18.6895 1Z" stroke="#49BEB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M1.94739 1.29297L9.25549 8.58582C10.0381 9.36692 11.3072 9.36692 12.0898 8.58582L19.3979 1.29297" stroke="#49BEB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span> Send</a>
                                    </label>
                                    <ul>
                                    <li><a href="#0">
                                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1455 6.875H6.39551V4.375C6.39551 4.04348 6.5272 3.72554 6.76162 3.49112C6.99605 3.2567 7.31399 3.125 7.64551 3.125H8.89551V0H6.39551C5.40095 0 4.44712 0.395088 3.74386 1.09835C3.0406 1.80161 2.64551 2.75544 2.64551 3.75V6.875H0.145508V10H2.64551V20H6.39551V10H8.89551L10.1455 6.875Z" fill="#1976D2"/>
                                            </svg>
                                        </a></li>
                                        <li><a href="#0">
                                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.1455 1.92358C19.3932 2.25171 18.5975 2.46978 17.783 2.57108C18.6413 2.06187 19.2831 1.25554 19.5868 0.304834C18.783 0.781505 17.9037 1.11718 16.9868 1.29733C16.4246 0.697058 15.6948 0.279733 14.8924 0.0995771C14.0899 -0.0805784 13.2518 -0.0152363 12.487 0.287114C11.7221 0.589465 11.0659 1.11485 10.6035 1.795C10.1412 2.47516 9.89404 3.27865 9.89426 4.10108C9.89426 4.42608 9.92176 4.73858 9.98926 5.03608C8.35811 4.95611 6.7622 4.53277 5.30588 3.79373C3.84956 3.05469 2.56562 2.0166 1.53801 0.747334C1.01153 1.64966 0.848769 2.71872 1.08286 3.73684C1.31695 4.75496 1.9303 5.64557 2.79801 6.22733C2.14895 6.20993 1.5136 6.03673 0.945508 5.72233V5.76733C0.946595 6.71412 1.27384 7.63163 1.87215 8.36541C2.47047 9.09919 3.30332 9.60443 4.23051 9.79608C3.87974 9.88853 3.51824 9.93392 3.15551 9.93108C2.89499 9.93572 2.63474 9.91225 2.37926 9.86108C2.64418 10.6749 3.15487 11.3865 3.841 11.898C4.52713 12.4095 5.35496 12.6958 6.21051 12.7173C4.75918 13.8524 2.96922 14.4681 1.12676 14.4661C0.790508 14.4661 0.468008 14.4511 0.145508 14.4098C2.02036 15.618 4.2051 16.2571 6.43551 16.2498C13.9805 16.2498 18.1055 9.99983 18.1055 4.58233C18.1055 4.40108 18.0993 4.22608 18.0905 4.05233C18.8992 3.47357 19.5956 2.75219 20.1455 1.92358Z" fill="#03A9F4"/>
                                            </svg>
                                        </a></li>
                                        <li><a href="#0">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8955 0H6.39551C4.7379 0 3.14819 0.65848 1.97609 1.83058C0.803988 3.00269 0.145508 4.5924 0.145508 6.25L0.145508 13.75C0.145508 15.4076 0.803988 16.9973 1.97609 18.1694C3.14819 19.3415 4.7379 20 6.39551 20H13.8955C15.5531 20 17.1428 19.3415 18.3149 18.1694C19.487 16.9973 20.1455 15.4076 20.1455 13.75V6.25C20.1455 4.5924 19.487 3.00269 18.3149 1.83058C17.1428 0.65848 15.5531 0 13.8955 0ZM18.2705 13.75C18.2705 16.1625 16.308 18.125 13.8955 18.125H6.39551C3.98301 18.125 2.02051 16.1625 2.02051 13.75V6.25C2.02051 3.8375 3.98301 1.875 6.39551 1.875H13.8955C16.308 1.875 18.2705 3.8375 18.2705 6.25V13.75Z" fill="url(#paint0_linear_592_2910)"/>
                                            <path d="M10.1455 5C8.81943 5 7.54766 5.52678 6.60997 6.46447C5.67229 7.40215 5.14551 8.67392 5.14551 10C5.14551 11.3261 5.67229 12.5979 6.60997 13.5355C7.54766 14.4732 8.81943 15 10.1455 15C11.4716 15 12.7434 14.4732 13.681 13.5355C14.6187 12.5979 15.1455 11.3261 15.1455 10C15.1455 8.67392 14.6187 7.40215 13.681 6.46447C12.7434 5.52678 11.4716 5 10.1455 5ZM10.1455 13.125C9.31701 13.124 8.52273 12.7944 7.9369 12.2086C7.35106 11.6228 7.0215 10.8285 7.02051 10C7.02051 8.27625 8.42301 6.875 10.1455 6.875C11.868 6.875 13.2705 8.27625 13.2705 10C13.2705 11.7225 11.868 13.125 10.1455 13.125Z" fill="url(#paint1_linear_592_2910)"/>
                                            <path d="M15.5198 5.29124C15.8877 5.29124 16.186 4.99295 16.186 4.62499C16.186 4.25703 15.8877 3.95874 15.5198 3.95874C15.1518 3.95874 14.8535 4.25703 14.8535 4.62499C14.8535 4.99295 15.1518 5.29124 15.5198 5.29124Z" fill="url(#paint2_linear_592_2910)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_592_2910" x1="1.97551" y1="18.17" x2="18.3155" y2="1.83" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFC107"/>
                                            <stop offset="0.507" stop-color="#F44336"/>
                                            <stop offset="0.99" stop-color="#9C27B0"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_592_2910" x1="6.61051" y1="13.535" x2="13.6805" y2="6.465" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFC107"/>
                                            <stop offset="0.507" stop-color="#F44336"/>
                                            <stop offset="0.99" stop-color="#9C27B0"/>
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_592_2910" x1="15.0485" y1="5.09624" x2="15.991" y2="4.15374" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFC107"/>
                                            <stop offset="0.507" stop-color="#F44336"/>
                                            <stop offset="0.99" stop-color="#9C27B0"/>
                                            </linearGradient>
                                            </defs>
                                            </svg>
                                        </a></li>
                                        <li><a href="#0">
                                            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4684 6.8186C11.6346 5.83863 9.87879 4.9377 8.08398 3.99707V9.62417C9.97267 8.59745 11.9634 7.65719 13.4762 6.8186H13.4684Z" fill="white"/>
                                            <path d="M13.4684 6.8186C11.6346 5.83863 8.08398 3.99707 8.08398 3.99707L12.8179 7.17889C12.8179 7.17889 11.9556 7.65719 13.4684 6.8186Z" fill="#E8E0E0"/>
                                            <path d="M8.4286 14.029C4.61969 13.9588 3.31876 13.8958 2.51913 13.731C1.97812 13.6215 1.50799 13.3785 1.16328 13.026C0.89686 12.7592 0.684986 12.3522 0.520607 11.7874C0.379605 11.3169 0.324688 10.9254 0.246395 9.96922C0.126543 7.81115 0.0979714 6.04677 0.246395 4.07533C0.368844 2.98665 0.428213 1.69425 1.24157 0.940262C1.62562 0.587385 2.07237 0.360298 2.57404 0.26642C3.35772 0.117626 6.6965 0 10.1529 0C13.6015 0 16.9477 0.117626 17.7321 0.26642C18.3589 0.384045 18.9466 0.73655 19.2917 1.1911C20.0338 2.35845 20.0468 3.81003 20.1221 4.94546C20.1533 5.48647 20.1533 8.55846 20.1221 9.09946C20.0049 10.8939 19.9106 11.5288 19.6442 12.187C19.4795 12.6026 19.3388 12.8219 19.0954 13.065C18.7137 13.439 18.227 13.6878 17.7002 13.7781C14.4041 14.026 11.6052 14.0798 8.4286 14.029ZM13.4761 6.81857C11.6423 5.8386 9.88649 4.92988 8.09168 3.98925V9.61672C9.98037 8.59 11.9715 7.64937 13.4839 6.81077L13.4761 6.81857Z" fill="#CD201F"/>
                                            </svg>
                                        </a></li>
                                        <li><a href="#0">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.145508 6.25H4.61801V20H0.145508V6.25ZM16.8005 6.41125C16.753 6.39625 16.708 6.38 16.658 6.36625C16.598 6.35266 16.5375 6.34099 16.4768 6.33125C16.2127 6.27726 15.9438 6.25003 15.6743 6.25C13.0668 6.25 11.413 8.14625 10.868 8.87875V6.25H6.39551V20H10.868V12.5C10.868 12.5 14.248 7.7925 15.6743 11.25V20H20.1455V10.7212C20.1437 9.73392 19.8142 8.77512 19.2089 7.99513C18.6035 7.21515 17.7565 6.65808 16.8005 6.41125Z" fill="#1976D2"/>
                                            <path d="M2.33301 4.375C3.54113 4.375 4.52051 3.39562 4.52051 2.1875C4.52051 0.979377 3.54113 0 2.33301 0C1.12488 0 0.145508 0.979377 0.145508 2.1875C0.145508 3.39562 1.12488 4.375 2.33301 4.375Z" fill="#1976D2"/>
                                            </svg>
                                        </a></li>
                                        <li><a href="#0">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_592_2905)">
                                            <path d="M14.2573 0H6.0747C5.66496 0.000413644 5.27212 0.163026 4.98239 0.452153C4.69266 0.74128 4.52971 1.1333 4.5293 1.54219V18.4578C4.52971 18.8667 4.69266 19.2587 4.98239 19.5478C5.27212 19.837 5.66496 19.9996 6.0747 20H14.2573C14.6671 19.9996 15.0599 19.837 15.3496 19.5478C15.6394 19.2587 15.8023 18.8667 15.8027 18.4578V1.54219C15.8023 1.1333 15.6394 0.74128 15.3496 0.452153C15.0599 0.163026 14.6671 0.000413644 14.2573 0ZM7.66081 0.625H12.6712V1.09375C12.6725 1.13514 12.6653 1.17636 12.65 1.21486C12.6348 1.25336 12.6117 1.28833 12.5824 1.31762C12.5531 1.3469 12.518 1.36987 12.4794 1.38511C12.4409 1.40036 12.3995 1.40755 12.3581 1.40625H7.97396C7.93248 1.40755 7.89118 1.40036 7.8526 1.38511C7.81401 1.36987 7.77897 1.3469 7.74963 1.31762C7.72028 1.28833 7.69726 1.25336 7.68199 1.21486C7.66671 1.17636 7.6595 1.13514 7.66081 1.09375V0.625ZM15.1764 18.4578C15.176 18.7009 15.0791 18.934 14.9068 19.1059C14.7345 19.2778 14.501 19.3746 14.2573 19.375H6.0747C5.83106 19.3746 5.59753 19.2778 5.42525 19.1059C5.25298 18.934 5.15601 18.7009 5.1556 18.4578V1.54219C5.15601 1.29906 5.25298 1.06601 5.42525 0.894094C5.59753 0.722178 5.83106 0.625413 6.0747 0.625H7.03451V1.09375C7.03325 1.21721 7.05669 1.33968 7.10346 1.45399C7.15023 1.5683 7.21938 1.67215 7.30686 1.75946C7.39435 1.84676 7.49842 1.91577 7.61296 1.96244C7.72751 2.00911 7.85024 2.0325 7.97396 2.03125H12.3581C12.4818 2.0325 12.6045 2.00911 12.7191 1.96244C12.8336 1.91577 12.9377 1.84676 13.0252 1.75946C13.1127 1.67215 13.1818 1.5683 13.2286 1.45399C13.2753 1.33968 13.2988 1.21721 13.2975 1.09375V0.625H14.2573C14.501 0.625413 14.7345 0.722178 14.9068 0.894094C15.0791 1.06601 15.176 1.29906 15.1764 1.54219V18.4578Z" fill="#E1A145"/>
                                            <path d="M12.8281 10.625H11.7712L10.528 8.49527L10.9492 7.76559C10.9737 7.73011 10.9906 7.68995 10.9988 7.64764C11.007 7.60533 11.0064 7.56179 10.9969 7.51974C10.9875 7.4777 10.9694 7.43806 10.9438 7.40332C10.9183 7.36858 10.8858 7.33949 10.8484 7.31788C10.8111 7.29626 10.7696 7.2826 10.7267 7.27773C10.6838 7.27287 10.6404 7.27691 10.5991 7.28961C10.5578 7.30231 10.5197 7.32338 10.4869 7.35152C10.4542 7.37965 10.4277 7.41423 10.409 7.45309L10.1663 7.8734L9.91895 7.45152C9.90028 7.41267 9.87375 7.37809 9.84104 7.34995C9.80833 7.32182 9.77014 7.30074 9.72887 7.28804C9.68761 7.27535 9.64415 7.2713 9.60125 7.27617C9.55834 7.28103 9.5169 7.2947 9.47954 7.31631C9.44218 7.33793 9.40971 7.36702 9.38416 7.40176C9.3586 7.4365 9.34053 7.47613 9.33106 7.51818C9.3216 7.56023 9.32095 7.60377 9.32916 7.64608C9.33737 7.68839 9.35426 7.72854 9.37877 7.76402L9.80465 8.49371L8.56144 10.625H7.50456C7.4215 10.625 7.34185 10.6579 7.28313 10.7165C7.2244 10.7751 7.19141 10.8546 7.19141 10.9375C7.19141 11.0203 7.2244 11.0998 7.28313 11.1584C7.34185 11.217 7.4215 11.25 7.50456 11.25H8.19662L7.72689 12.0593C7.70606 12.0948 7.69245 12.1341 7.68684 12.1748C7.68123 12.2155 7.68373 12.257 7.69421 12.2968C7.70468 12.3365 7.72291 12.3738 7.74787 12.4066C7.77282 12.4393 7.80401 12.4668 7.83963 12.4875C7.88739 12.5145 7.94127 12.5291 7.9962 12.5297C8.05112 12.5296 8.10505 12.5151 8.1526 12.4877C8.20014 12.4603 8.23962 12.4209 8.26708 12.3734L8.92157 11.25H11.4189L12.075 12.375C12.1025 12.4224 12.1419 12.4618 12.1895 12.4893C12.237 12.5167 12.291 12.5312 12.3459 12.5312C12.4008 12.5306 12.4547 12.5161 12.5024 12.489C12.5381 12.4683 12.5693 12.4409 12.5942 12.4081C12.6192 12.3754 12.6374 12.3381 12.6479 12.2983C12.6583 12.2585 12.6608 12.2171 12.6552 12.1764C12.6496 12.1356 12.636 12.0964 12.6152 12.0609L12.1455 11.2515H12.8281C12.9112 11.2515 12.9908 11.2186 13.0496 11.16C13.1083 11.1014 13.1413 11.0219 13.1413 10.939C13.1413 10.8561 13.1083 10.7767 13.0496 10.7181C12.9908 10.6594 12.9112 10.6265 12.8281 10.6265V10.625ZM9.28639 10.625L10.1663 9.11559L11.0463 10.625H9.28639Z" fill="#E1A145"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_592_2905">
                                            <rect width="20.0417" height="20" fill="white" transform="translate(0.145508)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QA_Footer;