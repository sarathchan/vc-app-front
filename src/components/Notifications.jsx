import React,{ useState,useEffect } from 'react'
import {  Modal } from 'antd';
import { useContext } from 'react';
import { SocketContext } from '../SocketContext'

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    
useEffect(() => {

  if(call.isReceivingCall === true ){
    setIsModalOpen(true);
  }
}, [call.isReceivingCall])
  return (
    <div>
        
        {call.isReceivingCall && !callAccepted && (
          
        <Modal open={isModalOpen} onOk={answerCall} onCancel={handleCancel} >

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h2>{call.name} is calling:</h2>
                {/* <Button onClick={answerCall}>Answer </Button> */}
            </div>
        </Modal>
    )}</div>
  )
}

export default Notifications