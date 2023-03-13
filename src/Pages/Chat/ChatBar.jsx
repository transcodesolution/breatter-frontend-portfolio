import React, { useEffect, useState } from 'react';
import user from '../../Store/Reducers/Userreducer/user';

const ChatBar = ({sideBarUsers,socket,sender,setSelectedchat}) => {
    const [roomId, setRoomId] = useState(null); 
    const handleJoinroom=((selectedUser)=>{
      console.log(roomId,sender,selectedUser)
        setSelectedchat(selectedUser)
        // if(roomId ){

        //     socket.emit('leave_room',{
        //         roomId,
        //         userId:sender
        //     })
        // }
         setRoomId(selectedUser._id);
       
    })
    useEffect(() => {
        socket.on('publish_online_list',(data)=>{
           })
    }, [])

    useEffect(()=>{

      console.log("join", roomId)
      socket.emit('join_room',{
        roomId:roomId,
        userId:sender
    })

      return () =>{

        console.log("leave", roomId)
        socket.emit('leave_room',{
          roomId,
          userId:sender
      })
      }

    },[roomId])
    
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
            {
                sideBarUsers?.map((selectedUser)=>{
                    return <><p style={{cursor:'pointer'}} onClick={()=>handleJoinroom(selectedUser)}>{selectedUser?.user?.firstName} {selectedUser?.user?.lastName}</p> </>
                })
            }
          {/* <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p> */}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;