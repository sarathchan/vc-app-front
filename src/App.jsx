import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import { Row, Typography } from 'antd';
import History from './components/History';
// import Glow from './components/glow';
const { Title } = Typography;

const App = () => {
  return (
    <div>
       <Row className='main-Title'>
        {/* <Glow/> */}
       {/* <Title style={{color:'#fff'}} >Video Chat</Title> */}
       </Row>
    <VideoPlayer />
    <Options>
        <Notifications/>
    </Options>
    <History/>

    </div>
  )
}

export default App