import React, { memo, useEffect, useState } from "react";

import QA_Header from '../ChatUs/QA_Header';
import QA_Banner from '../ChatUs/QA_Banner';
import ChatUs from '../ChatUs/ChatUs';
import QA_Footer from '../ChatUs/QA_Footer';
import {io} from 'socket.io-client';
import { useSelector } from "react-redux";
import { ApiPostUser } from "../../Helpers/Api/ApiData";
let socket ;
// const socket = (io(`http://192.168.29.132:80`));
const ChatUspage = () => {
    const [sideBarUsers, setSideBarUsers] = useState([])
    const user = useSelector((state) => state.user.profile);

useEffect(() => {
  
 socket=(io(`${process.env.REACT_APP_BASE_URL}`))
        
}, [])


    useEffect(() => {
        try {
            ApiPostUser('/room/get').then((response) => {
                console.log(response,"All Room")
                setSideBarUsers(response?.data?.data)
            })
        } catch (error) {
            console.log(error)
        }
        console.log("online")

        user?._id && socket.emit('online', { userId: user?._id })
        // user?._id && socket.emit('disconnect', { userId: user?._id })

    }, [user])

    return (
        <div className="chatus_page">
            {/* <QA_Header /> */}
            {/* <QA_Banner /> */}
            <ChatUs sideBarUsers={sideBarUsers} socket={socket}/>
            {/* <QA_Footer /> */}
        </div>
    )
}

export default  memo(ChatUspage);