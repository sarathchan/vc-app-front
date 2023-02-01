import React, { useState } from 'react'
import { Input, Row, Button, Col, Card,Modal } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CopyOutlined ,PhoneOutlined} from '@ant-design/icons';
import { useContext } from 'react';
import { SocketContext } from '../SocketContext'

const Options = ({ children }) => {

    const {
        callAccepted,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
         } = useContext(SocketContext)

    const [idToCall, setIdToCall] = useState('')
    return (
        <div className='options'>
                    <Card className='options-card'>
            <Row>
                <Col span={11}>
                        <h2>
                            Account Info
                        </h2>

                        <Input label='Name'  style={{
            width: 150,
          }} value={name} placeholder=' Enter Name' onChange={(e) => { setName(e.target.value) }} />
          <div>
            {console.log(me)}

                        <CopyToClipboard text={me}>
                            <Button >
                                <CopyOutlined />Copy your Id
                            </Button>
                        </CopyToClipboard>
          </div>
          </Col>
          <Col span={2}>
          </Col>
          <Col span={11}>
                        <h2>
                        Make a Call
                    </h2>
                    <Input label='Name'style={{
            width: 150,
          }} value={idToCall} placeholder=' Enter Name' onChange={(e) => { setIdToCall(e.target.value) }} />
                    {callAccepted && !callEnded ?
                    <div>

                        <Button type="primary" danger onClick={leaveCall}>
                            Hangup
                        </Button>
                    </div>
                        : 
                            <div>
                            <Button
                            onClick={() => callUser(idToCall)}>
                           <PhoneOutlined /> Call
                        </Button>
                        </div>
                    }
                {children}  
                </Col>
            </Row>
                    </Card>
                
                


           
        </div >
    )
}

export default Options