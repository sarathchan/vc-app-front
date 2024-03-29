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

let url = window.location.href;
let splittedUrl = url.split('/')[3];
    return (
        <div className='video-main'>

            <Row justify="center" 
            // gutter={[16, 16]}
            >
                
                {stream && (

<div>
    

                    {/* <Card className='senderCard'> */}
                        <div style={{display:'flex'}}>
                            <Row>

                            
                        {/* <h1 style={{justifyContent:'center'}}>
                            {name || "User"}
                        </h1> */}
                            </Row>
                        </div>
                        <video playsInline muted ref={myVideo} autoPlay className='myVideo mirrored' />
                    {/* </Card> */}
</div>
                )}

                {
                    callAccepted && !callEnded && (
                        <Card className='senderCard'>
                            {console.log(call,"call")}
                            <h1>
                                {call.name || "GPO Manager"}
                            </h1>
                            <video playsInline ref={userVideo} autoPlay className='callVideo mirrored' />
                        </Card>
                    )
                }

            </Row>
        </div>
    )
}

export default VideoPlayer