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
        name } = useContext(SocketContext)
console.log("userVideo",userVideo,name)

    return (
        <div className='video-main'>

            <Row justify="center" 
            // gutter={[16, 16]}
            >
                {stream && (

                    <Card className='senderCard'>
                        <h1>
                            {name || "User"}
                        </h1>
                        <video playsInline muted ref={myVideo} autoPlay className='myVideo mirrored' />
                    </Card>
                )}

                {
                    callAccepted && !callEnded && (
                        <Card>
                            {console.log(call,"call")}
                            <h1>
                                {call.name || "Name"}
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