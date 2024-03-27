import React from 'react'
import { useContext } from 'react'
import { Card, Row } from 'antd';
import { SocketContext } from '../SocketContext'


const VideoPlayer = () => {
    const { call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        callEnded,
        me,
        name } = useContext(SocketContext)
console.log("userVideo",userVideo,name)
console.log(me,"myesld")
    return (
        <div className='video-main'>

            <Row justify="center" 
            // gutter={[16, 16]}
            >
                {stream && (

                    <Card className='senderCard'>
                        <div style={{display:'flex'}}>
                            <Row>

                            
                        <h1 style={{justifyContent:'center'}}>
                            {name || "User"}
                        </h1>
                        <p className='id'>
                            {me}
                        </p>
                            </Row>
                        </div>
                        <video playsInline muted ref={myVideo} autoPlay className='myVideo mirrored' />
                    </Card>
                )}

                {
                    callAccepted && !callEnded && (
                        <Card className='senderCard'>
                            {console.log(call,"call")}
                            <h1>
                                {call.name || "GPO Manager"}
                            </h1>
                            <video playsInline ref={userVideo} autoPlay className='myVideo mirrored' />
                        </Card>
                    )
                }

            </Row>
        </div>
    )
}

export default VideoPlayer