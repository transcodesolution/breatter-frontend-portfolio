import React from "react";

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import pdf from '../../Assets/images/QA_pages/fpdf.png'
import { ApiGetUser, ApiPost, ApiPostUser } from "../../Helpers/Api/ApiData";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const Question = () => {
    const [questions, setQuestions] = useState([])
    const [active, setActive] = useState(false)
    const [subjects, setSubjects] = useState([])
    const [filter, setFilter] = useState({
        time: 'year',
        subject: ''
    })
    const toggleClass = () => {
        setActive(!active);
    }

    const getAllQuestion = () => {
        ApiPostUser('/question/admin/get', {
            "dateFilter": {
                "type": filter.time,
             
            },
            "subjectFilter": filter?.subject
        }).then((response) => {
            console.log(response)
            setQuestions(response?.data?.data)
            setActive(false)
        }).catch((error) => toast.error(error.message))
    }
    const getAllSubject = () => {
        try {
            ApiGetUser("/subject/all").then((response) => {
                const res = response.data.data;
                setSubjects(res)
            });
        } catch (error) { toast.error(error.message) }
    }
    useEffect(() => {
        getAllSubject()
    }, [])

    useEffect(() => {
        getAllQuestion()
    }, [filter])

    return (
        <div className={`question_accordion_wrapper  ${(active ? 'history_popup_open' : '')}`}>
            <div className="question_accordion_wrap">
                <Container>
                    <div className="question_accordion_block">
                        <div className="question_accordion_sec">
                            <div className="history_year">
                                <ul>
                                    <li>
                                        <a href="#0" onClick={() => {
                                            setFilter((data) => {
                                                return {
                                                    ...data,
                                                    time:filter.time=='today' ? '' : 'today'
                                                }
                                            })
                                        }} className={`${filter.time == 'today' && 'active'}`}>today</a>
                                    </li>
                                    <li>
                                        <a href="#0" onClick={() => {
                                            setFilter((data) => {
                                                return {
                                                    ...data,
                                                    time:filter.time=='month' ? '' : 'month'
                                                }
                                            })
                                        }} className={`${filter.time == 'month' && 'active'}`}>monthly</a>
                                    </li>
                                    <li>
                                        <a href="#0" onClick={() => {
                                            setFilter((data) => {
                                                return {    
                                                    ...data,
                                                    time: filter.time=='year' ? '' :'year'
                                                }
                                            })
                                        }} className={`${filter.time == 'year' && 'active'}`}>yearly</a>
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
                                                    {
                                                        subjects?.map((singleSub) => {
                                                            return <li onClick={() => {
                                                                setFilter((data) => {
                                                                    return {
                                                                        ...data,
                                                                        subject: singleSub?._id
                                                                    }
                                                                })
                                                            }}><a href="#0"  style={{color:`${singleSub?._id==filter.subject ? 'rgb(146 210 207)' :'black'}`}}>{singleSub?.name}</a></li>
                                                        })
                                                    }



                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="question_accordion">
                                <Accordion>
                                    {questions.map((data) => {
                                        return <Accordion.Item eventKey={data}>
                                            <Accordion.Header><p>{data.question}</p></Accordion.Header>
                                            <Accordion.Body>
                                                <div className="question_accordion_conte">
                                                    <h3>ANSWER :-</h3>
                                                    <p>
                                                        <div dangerouslySetInnerHTML={{ __html: data.answer[0].answer }}></div>

                                                    </p>
                                                    <div className="question_accordion_doc">

                                                        {
                                                            data.answer[0].docs?.map((singleDoc, idx) => {
                                                                return <div className="question_accordion_doc1">
                                                                    <span > <img src={pdf}></img></span> <span><a href={singleDoc} className="uploaded_files"> Doc File -{idx + 1}</a></span>
                                                                </div>
                                                            })
                                                        }
                                                        {
                                                            data.answer[0].images?.map((singleDoc, idx) => {
                                                                return <div className="question_accordion_doc1">
                                                                    <span > <img src={pdf}></img></span> <span><a href={singleDoc} className="uploaded_files"> Image File -{idx + 1}</a></span>
                                                                </div>
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    })}



                                </Accordion>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Question;