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


    return (
        <div className='video-main'>

            <Row justify="center" gutter={[16, 16]}>
{ stream && (

                <Card className='senderCard'>
                    <h1>
                        {name || "Name"}
                    </h1>
                    <video playsInline  ref={myVideo} autoPlay className='myVideo' />
                </Card>
)}

                {/* ownuserVideo */}

                {/* userVideo */}
                {
                    callAccepted && !callEnded && (
                        <Card>
                            {console.log(call)}
                            <h1>
                                {call.name || "Name"}
                            </h1>
                            <video playsInline  ref={userVideo} autoPlay className='myVideo' />
                        </Card>
                    )
                }

            </Row>
        </div>
    )
}

export default VideoPlayer