import React, { useState,useEffect } from 'react'
import { Input, Row, Button, Col, Card } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CopyOutlined ,PhoneOutlined} from '@ant-design/icons';
import { useContext } from 'react';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import { SocketContext } from '../SocketContext'
import axios from 'axios';

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

        //  let url = window.location.href;
        //  let callId = url.split("/").slice(-1);
        //  let callerId = callId[0]
        //  console.log(callerId)

        //  useEffect(() => {
        //     callUser(callerId,'user')
        //  }, 1000)
        const [idToCall, setIdToCall] = useState('')

        let url = window.location.href;
        let splittedUrl = url.split('/')[3];
      
      // const vcId = splittedUrl[0]
      console.log(splittedUrl,"splittedUrl")
      useEffect(() => {
      setIdToCall(splittedUrl)
     
        callUser(idToCall,"chan")
    
      }, [splittedUrl])

      
        if(idToCall != ''){
            callUser(idToCall,"chan")
        }
    

        useEffect(() => {
            if(splittedUrl == ""){
                if(me){

            let body ={
                vcId:me
            }
            
        axios.post(`https://api-training-nexus.valuehealthsolutions.com/gpo/create`,body)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {

        })
    }
    } else {

    }

        }, [me])
      

 

console.log(idToCall,"idToCall",typeof idToCall)
    return (
        <>
        <div className='hang'>
        {callAccepted && !callEnded ?
            <Row  className='hangRow'>
        <Col  >
                        <h2>
                           End Call
                        </h2>
        <Button className='DangerBtn' type="primary" danger onClick={leaveCall}>
                        Hangup <PhoneOutlined classsname='icon' />
                        </Button>
                        </Col>
                        </Row>
                        :
                        <></>
        }
        </div>
       
        <div className='options'>
                    <Card className='options-card'>
            <Row>
                <Col span={11}>
                        <h2>
                            Account Info
                        </h2>

                        <Input  label='Name'  style={{
            // width: 150,
          }} value={name} placeholder=' Enter Name' onChange={(e) => { setName(e.target.value) }} />
          <div>
            {console.log(me)}

                        <CopyToClipboard text={me}>
                            <Button className='copybtn' >
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
            // width: 150,
          }} value={idToCall} placeholder=" Enter friend's ID" onChange={(e) => { setIdToCall(e.target.value) }} />

                    {callAccepted && !callEnded ?
                    <div>

                        <Button className='DangerBtn' type="primary" danger onClick={leaveCall}>
                        Hangup <PhoneOutlined classsname='icon' />
                        </Button>
                    </div>
                        : 
                            <div>
                            <Button
                            className='copybtn'
                            type='primary' 
                            onClick={() => callUser(idToCall,name)}>
                           <PhoneOutlined /> Call
                        </Button>
                        </div>
                    }
                {children}  
                </Col>
            </Row>
                    </Card>
                
                


           
        </div >
        </>
    )
}

export default Options