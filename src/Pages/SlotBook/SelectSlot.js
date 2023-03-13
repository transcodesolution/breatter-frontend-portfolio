import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";
import Select from 'react-select';
import { toast } from "react-toastify";

import slot_icon1 from '../../Assets/images/SlotBook/slot_icon1.png'
import slot_icon2 from '../../Assets/images/SlotBook/slot_icon2.png'
import { ApiGetUser, ApiPost, ApiPostUser } from "../../Helpers/Api/ApiData";





const       SelectSlot = () => {
    const user = useSelector((state) => state.user.profile);
    const [subjects, setSubjects] = useState([{ value: "pysics", label: "physics" }]);
    const [slots, setSlots] = useState([])
    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedSlot, setSelectedSlot] = useState("");
    const [whichSelect, setWhichSelect] = useState({
        audio: 0,
        video: 0
    })

    const getAllSubject = () => {
        try {
            ApiGetUser("/subject/all").then((response) => {
                const res = response.data.data;
                console.log("sub", res)
                let temparr = [];
                for (let i = 0; i < res.length; i++) {
                    temparr.push({ value: res[i]._id, label: res[i].name })

                }
                setSubjects((prev) => {
                    return [...temparr];
                });
            });
        } catch (error) { toast.error(error.message) }
    }
    const getAllSlote = () => {
        try {
            ApiGetUser("/slot").then((response) => {
                const res = response.data.data;
                console.log("sub", res)
                let temparr = [];
                for (let i = 0; i < res.length; i++) {
                    let start = new Date(res[i].start).getHours();
                    let end = new Date(res[i].end).getHours()
                    let val = 'SLOT  ' + (Number(res[i].number)+1) + " :->      " + start + ':00' + (start > 12 ? ' pm' : ' am') + ' TO ' + end + ':00' + (end > 12 ? ' pm' : ' am')

                    temparr.push({ value: res[i]._id, label: val })

                }
                setSlots(temparr)
            });
        } catch (error) { toast.error(error.message) }
    }

    const submitSlot = () => {
        console.log(selectedSlot, selectedSubject)
        if(false){

            try {
                ApiPostUser("/slot/chat/book", {
                    slotId: selectedSlot,
                    subjectId: selectedSubject,
                    isFromWallet: false
                    
                }).then((response) => {
                    const res = response.data.data;
                    ApiGetUser(`/stripe/pay?orderId=${res._id}&userId=${user._id}`).then((response) => {
                        console.log(response)
                        window.open(response?.data?.data, '_blank', 'noreferrer')
                    })
                    
            });
        } catch (error) { toast.error(error.message) }
    }else{
        toast.error("Vedio &  Chat Feature is Comming Soon")
    }
    }
    
    useEffect(() => {
        getAllSubject();
        getAllSlote()
    }, [])


    return (
        <div className="slot_book_wrapper">
            <div className="slot_book_wrap ">
                <Container className="">
                    <div className="slot_book_block">
                        <div className="slot_book_sec">
                            <div className="u_questions_select">
                                <Select onChange={(e) => { setSelectedSubject(e.value) }} options={subjects} />
                            </div>
                            <div className="slot_book_chat">
                                <ul className="slot_book_chat_block">
                                    <li onClick={() => setWhichSelect({ video: 0, audio: 1 })}  >
                                        <a href="#0" className={`slot_icon_conte ${whichSelect.audio ? 'slot_hover' : ''}`}  >
                                            <div className="slot_icon">
                                                <img src={slot_icon1} alt="slot_icon" />
                                            </div>
                                            <h3>Chat</h3>
                                            <p>pricing</p>
                                            <h4>$750</h4>
                                        </a>
                                    </li>
                                    <li onClick={() => setWhichSelect({ video: 1, audio: 0 })}>
                                        <a href="#0" className={`slot_icon_conte ${whichSelect.video ? 'slot_hover' : ''}`}>
                                            <div className="slot_icon">
                                                <img src={slot_icon2} alt="slot_icon" />
                                            </div>
                                            <h3>Video chat</h3>
                                            <p>pricing</p>
                                            <h4>$750</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="slot_book_chat_select">
                                    <Select onChange={(e) => { setSelectedSlot(e.value) }} options={slots} />
                                </div>
                                <div className="slot_book_chat_btn">
                                    <a onClick={submitSlot} style={{cursor:'pointer'}}>payment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    ) 
}

export default SelectSlot;