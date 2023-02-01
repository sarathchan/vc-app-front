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
        <div>

            <Row>
{ stream && (

                <Card>
                    <h1>
                        {name || "Name"}
                    </h1>
                    <video playsInline muted ref={myVideo} autoPlay className='myVideo' />
                </Card>
)}

                {/* ownuserVideo */}

                {/* userVideo */}
                {
                    callAccepted && !callEnded && (
                        <Card>
                            <h1>
                                {call.name || "Name"}
                            </h1>
                            <video playsInline muted ref={userVideo} autoPlay className='myVideo' />
                        </Card>
                    )
                }

            </Row>
        </div>
    )
}

export default VideoPlayer