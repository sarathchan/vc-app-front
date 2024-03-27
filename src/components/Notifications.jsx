import React,{ useState,useEffect,useRef } from 'react'
import {  Modal } from 'antd';
import { useContext } from 'react';
import { SocketContext } from '../SocketContext'

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const audioRef = useRef(null);

    const playNotificationSound = () => {
      audioRef.current.play();
    };
    
useEffect(() => {

  if(call.isReceivingCall === true ){
    setIsModalOpen(true);
    playNotificationSound()
  }
}, [call.isReceivingCall])

const attendCall = () => {
  answerCall()
  audioRef.current.pause();
}
  return (
    <div>
        
      <audio ref={audioRef}  src="/ringing-151670.mp3" />
        {call.isReceivingCall && !callAccepted && (
          
        <Modal okText='Attend' okType='primary' open={isModalOpen} onOk={attendCall} onCancel={handleCancel} >

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h2>{call.name} is calling</h2>
            </div>
        </Modal>
    )}</div>
  )
}

export default Notifications