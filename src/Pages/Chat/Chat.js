import React, { useEffect, useState } from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter '
import './index.css'
import socketIO from 'socket.io-client';
import { ApiPost, ApiPostUser } from '../../Helpers/Api/ApiData'
import { useSelector } from 'react-redux'
let socket = socketIO.connect('http://192.168.29.132:80');
console.log("first")
function Chat() {
    const [sideBarUsers, setSideBarUsers] = useState([])
    const user = useSelector((state) => state.user.profile);
    const [selectedchat, setSelectedchat] = useState(null);
    useEffect(() => {
      try {
        ApiPostUser('/room/get').then((response)=>{
            setSideBarUsers(response?.data?.data)
        })
      } catch (error) {
        console.log(error)
      }
    }, [])

    useEffect(()=>{
      console.log("first")
      user?._id && socket.emit('online',{userId:user?._id})
      
    },[user])
    
    return (
        <>  
            <div className="chat">
                <ChatBar sideBarUsers={sideBarUsers} socket={socket} sender={user?._id} setSelectedchat={setSelectedchat}/> 
                <div className="chat__main">
                    <ChatBody socket={socket} />
                    <ChatFooter socket={socket} sender={user?._id} selectedchat={selectedchat}/>
                </div>
            </div>
        </>
    )
}

export default Chat